/**
 * Installs the pre-push governance hook.
 *
 * Deliberately a plain .git/hooks installer rather than husky: no extra
 * dependency, no package.json "prepare" magic, and it degrades cleanly in
 * this repo's current state (not yet under git).
 *
 * Usage: npm run hooks:install   (run once after `git init` / clone)
 */
import { existsSync, mkdirSync, writeFileSync, chmodSync } from 'node:fs';
import { join } from 'node:path';

const gitDir = join(process.cwd(), '.git');

if (!existsSync(gitDir)) {
  console.log('[hooks] No .git directory found — this workspace is not a git repository yet.');
  console.log('[hooks] Pre-push governance activates automatically once you run:');
  console.log('[hooks]   git init && npm run hooks:install');
  process.exit(0);
}

const hooksDir = join(gitDir, 'hooks');
mkdirSync(hooksDir, { recursive: true });

// Tier-1 gate only: typecheck + architecture + fast tests. Heavy analysis
// (E2E, k6, MemLab, Clinic.js) belongs to CI and nightly — never pre-push.
const prePush = `#!/bin/sh
# RLGL pre-push governance (installed by scripts/install-git-hooks.mjs)
echo "[pre-push] Running fast validation gate (npm run validate:fast)..."
npm run validate:fast || {
  echo ""
  echo "[pre-push] BLOCKED: validation failed. Fix the errors above, or"
  echo "[pre-push] push with --no-verify only if you genuinely must."
  exit 1
}
`;

const hookPath = join(hooksDir, 'pre-push');
writeFileSync(hookPath, prePush, { encoding: 'utf-8' });
try {
  chmodSync(hookPath, 0o755);
} catch {
  // Windows: chmod is a no-op; git-for-windows runs hooks via sh regardless.
}

console.log('[hooks] pre-push hook installed → runs `npm run validate:fast` before every push.');
