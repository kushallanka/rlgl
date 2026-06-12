#!/usr/bin/env node
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  console.log('🌱 Seeding test case database with initial project...\n');

  // Execute Prisma query via migrate deploy which initializes the DB
  process.chdir(path.join(__dirname, 'services', 'testcase'));
  
  // Try to upsert a project using Prisma db execute
  const sql = `INSERT INTO "Project" (id, name, createdAt, updatedAt) 
               VALUES (1, 'Default Test Project', datetime('now'), datetime('now'))
               ON CONFLICT(id) DO NOTHING;`;

  console.log('📝 Running SQL: Insert default project into testcase database\n');
  execSync(`npx prisma db execute --stdin`, { input: sql, stdio: 'inherit' });
  
  console.log('\n✅ Seed complete!');
  process.exit(0);
} catch (err) {
  console.error('❌ Seed failed:', err?.message ?? err);
  process.exit(1);
}
