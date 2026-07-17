import { PrismaClient } from '../../generated/client/index.js';

/**
 * AuthRepository - Authentication
 * Handles user authentication: users, tokens, and credentials
 * IAM logic (roles, permissions) is in separate IAMRepository
 */
export class AuthRepository {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Find user by email address
   */
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  /**
   * Find user by ID
   */
  async findUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  /**
   * List all users (with computed name field for frontend)
   */
  async listUsers() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true, firstName: true, lastName: true, role: true, createdAt: true },
    });

    // Map to include computed name field for frontend compatibility
    return users.map((u) => ({
      ...u,
      name: [u.firstName, u.lastName].filter(Boolean).join(' ') || u.email.split('@')[0],
    }));
  }

  /**
   * Create a new user
   */
  async createUser(data: any) {
    return this.prisma.user.create({ data });
  }

  /**
   * Create a refresh token for a user
   */
  async createRefreshToken(data: any) {
    return this.prisma.refreshToken.create({ data });
  }

  /**
   * Find a refresh token by ID
   */
  async findRefreshToken(id: string | number) {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    if (Number.isNaN(numId)) throw new Error('Invalid refresh token ID');

    return this.prisma.refreshToken.findUnique({
      where: { id: numId },
      include: { User: true },
    });
  }

  /**
   * Revoke a single refresh token
   */
  async revokeRefreshToken(id: string | number) {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    if (Number.isNaN(numId)) throw new Error('Invalid refresh token ID');

    return this.prisma.refreshToken.update({
      where: { id: numId },
      data: { revoked: true },
    });
  }

  /**
   * Revoke all refresh tokens for a user
   */
  async revokeAllUserTokens(userId: number) {
    return this.prisma.refreshToken.updateMany({
      where: { userId },
      data: { revoked: true },
    });
  }
}
