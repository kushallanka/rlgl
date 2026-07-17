import { execSync } from 'node:child_process';
import net from 'node:net';

const REDIS_HOST = '127.0.0.1';
const REDIS_PORT = 6379;
const DEV_CONTAINER = 'rlgl-redis-dev';

function portOpen(host, port, timeoutMs = 1000) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port }, () => {
      socket.end();
      resolve(true);
    });
    socket.on('error', () => resolve(false));
    socket.setTimeout(timeoutMs, () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function main() {
  if (await portOpen(REDIS_HOST, REDIS_PORT)) {
    console.log(`[dev-prep] Redis already reachable at ${REDIS_HOST}:${REDIS_PORT}`);
    return;
  }

  try {
    execSync('docker info', { stdio: 'ignore' });
  } catch {
    console.warn(
      `[dev-prep] No Redis on ${REDIS_HOST}:${REDIS_PORT} and Docker is not available. Install/start Redis locally, or run: docker compose up -d redis`,
    );
    return;
  }

  try {
    execSync(`docker start ${DEV_CONTAINER}`, { stdio: 'ignore' });
    console.log(`[dev-prep] Started existing container ${DEV_CONTAINER}`);
    return;
  } catch {
    // no existing container yet
  }

  try {
    execSync(`docker run -d --name ${DEV_CONTAINER} -p ${REDIS_PORT}:6379 redis:7-alpine`, { stdio: 'inherit' });
    console.log(`[dev-prep] Created ${DEV_CONTAINER} (redis:7-alpine) on host port ${REDIS_PORT}`);
  } catch {
    console.warn(
      `[dev-prep] Could not start Redis in Docker (port busy or create failed). Try: docker compose up -d redis`,
    );
  }
}

await main();
