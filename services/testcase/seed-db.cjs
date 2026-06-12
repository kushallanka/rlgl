const { PrismaClient } = require('./generated/client');

const prisma = new PrismaClient();

(async () => {
  try {
    console.log('🌱 Seeding testcase database with default project...\n');

    // Upsert a default project
    const project = await prisma.project.upsert({
      where: { id: 1 },
      update: { name: 'Default Test Project' },
      create: { id: 1, name: 'Default Test Project', createdAt: new Date(), updatedAt: new Date() }
    });

    console.log('✅ Project created/updated:', { id: project.id, name: project.name });
    
    // Create a test suite
    const suite = await prisma.suite.upsert({
      where: { id: 1 },
      update: { name: 'Default Suite' },
      create: { id: 1, projectId: 1, name: 'Default Suite', description: 'Default test suite' }
    });
    
    console.log('✅ Suite created/updated:', { id: suite.id, name: suite.name });
    
    // Create a test section
    const section = await prisma.section.upsert({
      where: { id: 1 },
      update: { name: 'Default Section' },
      create: { id: 1, projectId: 1, suiteId: 1, name: 'Default Section' }
    });
    
    console.log('✅ Section created/updated:', { id: section.id, name: section.name });
    
    console.log('\n✅ Seed complete! Database is ready for test case creation.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
