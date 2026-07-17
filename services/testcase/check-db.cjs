const { PrismaClient } = require('./generated/client');

const prisma = new PrismaClient();

(async () => {
  try {
    const projectCount = await prisma.project.count();
    const suiteCount = await prisma.suite.count();
    const caseCount = await prisma.testCase.count();

    console.log('📊 Database Statistics:');
    console.log('  Projects:', projectCount);
    console.log('  Suites:', suiteCount);
    console.log('  Test Cases:', caseCount);

    if (projectCount === 0) {
      console.log('\n⚠️  No projects found. Need to create or sync projects from project-service.');
    } else {
      console.log('\n✅ Database is ready for test case creation');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
