import * as path from 'node:path';
import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables
const envPath = path.join(import.meta.dirname, '..', '.env');
dotenv.config({ path: envPath });

const config = {
  // Admin (Project Admin role — all permissions)
  adminEmail: process.env.SEED_ADMIN_EMAIL || 'admin@test.com',
  adminPassword: process.env.SEED_ADMIN_PASSWORD || 'AdminPass123!',
  adminName: process.env.SEED_ADMIN_NAME || 'Alice Admin',

  // Tester (view + create on testcase/testrun only — no config.manage)
  testerEmail: process.env.SEED_TESTER_EMAIL || 'tester@test.com',
  testerPassword: process.env.SEED_TESTER_PASSWORD || 'TesterPass123!',
  testerName: process.env.SEED_TESTER_NAME || 'Bob Tester',

  authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
  projectServiceUrl: process.env.PROJECT_SERVICE_URL || 'http://localhost:3002',
};

const TESTER_PERMISSIONS = ['testcase.view', 'testcase.create', 'testrun.view', 'testrun.create', 'testrun.update'];

async function signupOrLogin(email: string, password: string, name: string): Promise<string> {
  try {
    const res = await axios.post(`${config.authServiceUrl}/signup`, { email, password, name });
    console.log(`  ✓ Created user: ${email}`);
    return res.data.accessToken;
  } catch (err: any) {
    if (err.response?.status === 400 || err.response?.status === 409) {
      // User exists — login instead
      const res = await axios.post(`${config.authServiceUrl}/login`, { email, password });
      console.log(`  ℹ User already exists, logged in: ${email}`);
      return res.data.accessToken;
    }
    throw new Error(`Failed to signup/login ${email}: ${err.response?.data?.error || err.message}`);
  }
}

async function seed() {
  console.log('\n🚀 Starting seed...\n');

  try {
    // ── Step 1: Create / login admin and tester ──────────────────────────────
    console.log('👤 Creating users...');
    const adminToken = await signupOrLogin(config.adminEmail, config.adminPassword, config.adminName);

    // Get tester's userId (needed for role assignment)
    const testerToken = await signupOrLogin(config.testerEmail, config.testerPassword, config.testerName);
    const testerMe = await axios.get(`${config.authServiceUrl}/me`, {
      headers: { Authorization: `Bearer ${testerToken}` },
    });
    const testerUserId = testerMe.data.id;
    console.log(`  ✓ Tester userId: ${testerUserId}\n`);

    // ── Step 2: Create project (as admin) ────────────────────────────────────
    console.log('📁 Creating project...');
    let projectId: string;
    let adminRoleId: string;

    try {
      const projectRes = await axios.post(
        `${config.projectServiceUrl}/`,
        { name: 'Demo Project', description: 'Sample project for development & testing' },
        { headers: { Authorization: `Bearer ${adminToken}` } },
      );
      projectId = projectRes.data.id;
      console.log(`  ✓ Project created: Demo Project (${projectId})\n`);

      // Fetch the auto-created Project Admin role
      const rolesRes = await axios.get(`${config.projectServiceUrl}/${projectId}/roles`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId },
      });
      const projectAdminRole = rolesRes.data.find((r: any) => r.name === 'Project Admin');
      adminRoleId = projectAdminRole?.id;
      console.log(`  ✓ Project Admin role found: ${adminRoleId}`);
    } catch {
      // Project may already exist — fetch existing
      const listRes = await axios.get(`${config.projectServiceUrl}/`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      const existing = listRes.data.data?.[0] || listRes.data[0];
      if (!existing) throw new Error('No project found and could not create one');
      projectId = existing.id;
      console.log(`  ℹ Using existing project: ${existing.name} (${projectId})\n`);
      const rolesRes = await axios.get(`${config.projectServiceUrl}/${projectId}/roles`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId },
      });
      const projectAdminRole = rolesRes.data.find((r: any) => r.name === 'Project Admin');
      adminRoleId = projectAdminRole?.id;
    }

    // ── Step 3: Create Tester role ────────────────────────────────────────────
    console.log('\n🔑 Setting up roles...');
    let testerRoleId: string;

    try {
      const roleRes = await axios.post(
        `${config.projectServiceUrl}/${projectId}/roles`,
        { name: 'Tester', description: 'Can view and execute test cases', permissions: TESTER_PERMISSIONS },
        { headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId } },
      );
      testerRoleId = roleRes.data.id;
      console.log(`  ✓ Tester role created (${testerRoleId})`);
    } catch (err: any) {
      if (err.response?.status === 400) {
        const rolesRes = await axios.get(`${config.projectServiceUrl}/${projectId}/roles`, {
          headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId },
        });
        const testerRole = rolesRes.data.find((r: any) => r.name === 'Tester');
        testerRoleId = testerRole?.id;
        console.log(`  ℹ Tester role exists: ${testerRoleId}`);
      } else throw err;
    }

    // ── Step 4: Assign tester user to Tester role ─────────────────────────────
    console.log('\n👥 Assigning user roles...');
    try {
      await axios.post(
        `${config.projectServiceUrl}/${projectId}/users/${testerUserId}/roles`,
        { roleId: testerRoleId },
        { headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId } },
      );
      console.log(`  ✓ ${config.testerName} → Tester role`);
    } catch (err: any) {
      if (err.response?.status === 400) console.log(`  ℹ ${config.testerName} already has Tester role`);
      else throw err;
    }

    // ── Step 5: Seed config: Types ────────────────────────────────────────────
    console.log('\n⚙️  Seeding project configuration...');
    const types = [
      { name: 'Functional', color: 'blue', description: 'Functional test cases' },
      { name: 'Regression', color: 'purple', description: 'Regression test cases' },
      { name: 'Smoke', color: 'orange', description: 'Smoke test cases' },
      { name: 'Performance', color: 'red', description: 'Performance test cases' },
    ];
    for (const t of types) {
      try {
        await axios.post(`${config.projectServiceUrl}/${projectId}/config/types`, t, {
          headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId },
        });
        console.log(`  ✓ Type: ${t.name}`);
      } catch {
        console.log(`  ℹ Type exists: ${t.name}`);
      }
    }

    // ── Step 6: Seed config: Priorities ──────────────────────────────────────
    const priorities = [
      { name: 'Critical', level: 1, color: 'red' },
      { name: 'High', level: 2, color: 'orange' },
      { name: 'Medium', level: 3, color: 'yellow' },
      { name: 'Low', level: 4, color: 'blue' },
    ];
    for (const p of priorities) {
      try {
        await axios.post(`${config.projectServiceUrl}/${projectId}/config/priorities`, p, {
          headers: { Authorization: `Bearer ${adminToken}`, 'x-project-id': projectId },
        });
        console.log(`  ✓ Priority: ${p.name}`);
      } catch {
        console.log(`  ℹ Priority exists: ${p.name}`);
      }
    }

    // ── Done ──────────────────────────────────────────────────────────────────
    console.log('\n🎉 Seed complete!\n');
    console.log('  Accounts:');
    console.log(`    Admin  → ${config.adminEmail} / ${config.adminPassword}`);
    console.log(`    Tester → ${config.testerEmail} / ${config.testerPassword}`);
    console.log(`  Project: Demo Project (${projectId})\n`);
  } catch (error: any) {
    console.error('\n✗ Seed error:', error.message);
    if (error.response?.data) console.error('  API response:', error.response.data);
    process.exit(1);
  }
}

// Wait for services to start in dev mode
setTimeout(seed, 5000);
