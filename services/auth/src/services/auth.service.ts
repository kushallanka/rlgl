import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { AuthRepository } from '../repositories/auth.repository.js';
import { AppError } from '@rlgl/shared';

export class AuthService {
  constructor(
    private readonly repo: AuthRepository,
    private readonly jwtSecret: string
  ) {}

  async signup(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    
    // Split name into firstName and lastName
    let firstName = '', lastName = '';
    if (data.name) {
      const nameParts = data.name.trim().split(/\s+/);
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }

    const user = await this.repo.createUser({
      email: data.email,
      password: hashedPassword,
      firstName,
      lastName,
      systemPermissions: 'system.user.view',
      role: 'TESTER'
    });

    return user;
  }

  async login(credentials: any) {
    const user = await this.repo.findUserByEmail(credentials.email);
    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      throw new AppError(401, 'Invalid credentials');
    }
    return user;
  }

  async generateTokenPair(user: any) {
    let sysPerms: string[] = [];
    try {
      const parsed = JSON.parse(user.systemPermissions || '[]');
      sysPerms = Array.isArray(parsed) ? parsed : [];
    } catch {
      sysPerms = (user.systemPermissions || '').split(',').filter(Boolean);
    }
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, systemPermissions: sysPerms },
      this.jwtSecret,
      { expiresIn: '15m' }
    );

    const randomHex = crypto.randomBytes(32).toString('hex');
    const refreshHash = await bcrypt.hash(randomHex, 10);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const rtRecord = await this.repo.createRefreshToken({
      userId: user.id,
      hash: refreshHash,
      expiresAt
    });

    const refreshToken = `${rtRecord.id}.${randomHex}`;
    return { accessToken, refreshToken };
  }

  async listUsers() {
    return this.repo.listUsers();
  }

  async refresh(reqToken: string) {
    if (!reqToken) throw new AppError(401, 'No refresh token provided');
    
    const [tokenId, randomHex] = reqToken.split('.');
    if (!tokenId || !randomHex) throw new AppError(401, 'Malformed refresh token');
    const record = await this.repo.findRefreshToken(tokenId);

    if (!record) throw new AppError(401, 'Invalid refresh token');
    if (record.revoked) {
      await this.repo.revokeAllUserTokens(record.userId);
      throw new AppError(401, 'Token compromised and revoked');
    }
    if (Date.now() > record.expiresAt.getTime()) {
      throw new AppError(401, 'Refresh token expired');
    }

    const isValid = await bcrypt.compare(randomHex, record.hash);
    if (!isValid) throw new AppError(401, 'Invalid token signature');

    // Rotate
    await this.repo.revokeRefreshToken(tokenId);
    const user = await this.repo.findUserById(record.userId);
    if (!user) throw new AppError(401, 'User not found');
    return this.generateTokenPair(user);
  }
}
