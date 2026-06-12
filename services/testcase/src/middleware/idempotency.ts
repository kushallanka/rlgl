// Idempotency helpers for TestCase Service
import { PrismaClient } from '../../generated/client';
import { SERVICE_NAME } from '../config/constants.js';

export class IdempotencyService {
  constructor(private readonly prisma: PrismaClient) {}

  async checkIdempotency(key: string, _endpoint: string) {
    if (!key) return null;
    try {
      return await this.prisma.idempotencyKey.findUnique({
        where: { key_service: { key, service: SERVICE_NAME } }
      });
    } catch { return null; }
  }

  async storeIdempotency(key: string, endpoint: string, statusCode: number, response: any) {
    if (!key) return;
    try {
      await this.prisma.idempotencyKey.create({
        data: {
          key,
          service: SERVICE_NAME,
          endpoint,
          response: JSON.stringify(response),
          statusCode
        }
      });
    } catch { /* duplicate key, ignore */ }
  }
}
