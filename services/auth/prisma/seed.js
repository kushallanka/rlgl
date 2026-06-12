const { PrismaClient } = require('../generated/client/index.js');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create admin user with full system permissions
  const adminHashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@rlgl.com' },
    update: {
      role: 'ADMIN',
      systemPermissions: JSON.stringify(["system.project.create", "system.user.view"])
    },
    create: {
      email: 'admin@rlgl.com',
      password: adminHashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      systemPermissions: JSON.stringify(["system.project.create", "system.user.view"])
    }
  });

  console.log('Admin user created/updated:', admin.id, admin.email, admin.role);

  // Create test user with basic permissions (system.user.view only)
  const testHashedPassword = await bcrypt.hash('test123', 10);

  const testUser = await prisma.user.upsert({
    where: { email: 'test@rlgl.com' },
    update: {
      role: 'TESTER',
      systemPermissions: JSON.stringify(["system.user.view"])
    },
    create: {
      email: 'test@rlgl.com',
      password: testHashedPassword,
      firstName: 'Test',
      lastName: 'User',
      role: 'TESTER',
      systemPermissions: JSON.stringify(["system.user.view"])
    }
  });

  console.log('Test user created/updated:', testUser.id, testUser.email, testUser.role);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
