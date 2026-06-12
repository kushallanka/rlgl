/**
 * Best-effort local Semgrep runner.
 *
 * Semgrep has no native Windows build, so local runs are opportunistic:
 * if a `semgrep` binary is on PATH (macOS/Linux/WSL), run the custom
 * ruleset with --error so violations fail. If not, print a skip notice
 * and exit 0 — CI runs Semgrep in a container and remains the hard gate.
 */
import { spawnSync } from 'node:child_process';

const probe = spawnSync('semgrep', ['--version'], { shell: true, stdio: 'pipe' });

if (probe.status !== 0) {
  console.log('[validate:semgrep] semgrep not found on PATH — skipping locally.');
  console.log('[validate:semgrep] Semgrep still runs as a hard PR gate in CI (pr-validation.yml).');
  console.log('[validate:semgrep] To run locally: use WSL/macOS/Linux and `pip install semgrep`.');
  process.exit(0);
}

const result = spawnSync(
  'semgrep',
  ['--config', '.semgrep.yml', '--error', 'services', 'packages', 'src'],
  { shell: true, stdio: 'inherit' }
);

process.exit(result.status ?? 1);
