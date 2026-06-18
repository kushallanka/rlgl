/**
 * Generates a single, gateway-prefixed OpenAPI spec for the whole platform by
 * scanning each backend service's controller annotations and merging them.
 *
 * Output: docs/openapi.json (deterministic — keys sorted so CI can drift-check).
 *
 * Run with: npm run generate:openapi
 *
 * The per-service Swagger UIs (served at /docs by each service) describe paths
 * relative to that service. The gateway is the public entry point, so the
 * merged spec re-keys every path under the gateway mount that proxies to it.
 */
import swaggerJsdoc from 'swagger-jsdoc';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.join(import.meta.dirname, '..');
const OUT_FILE = path.join(ROOT, 'docs', 'openapi.json');

/** Each service's controllers, plus the gateway mount that proxies to it. */
interface ServiceSource {
  name: string;
  /** Gateway path prefix (must match services/gateway/src/app.ts proxies). */
  basePath: string;
  /** Glob(s) of controller files to scan for @swagger annotations. */
  apis: string[];
}

const SERVICES: ServiceSource[] = [
  { name: 'auth',     basePath: '/api/v1/auth',      apis: ['services/auth/src/controllers/*.ts'] },
  { name: 'project',  basePath: '/api/v1/projects',  apis: ['services/project/src/controllers/*.ts'] },
  { name: 'testcase', basePath: '/api/v1/testcases', apis: ['services/testcase/src/controllers/*.ts'] },
  { name: 'testrun',  basePath: '/api/v1/testruns',  apis: ['services/testrun/src/controllers/*.ts'] },
];

type AnyRecord = Record<string, unknown>;

/** glob needs forward slashes, even on Windows. */
const toGlob = (rel: string) => path.join(ROOT, rel).replace(/\\/g, '/');

/** Re-key a service's local paths under its gateway mount ("/" collapses to the bare prefix). */
const prefixPath = (basePath: string, localPath: string) =>
  localPath === '/' ? basePath : `${basePath}${localPath}`;

/** Recursively sort object keys so JSON output is stable across runs. */
function sortDeep<T>(value: T): T {
  if (Array.isArray(value)) return value.map(sortDeep) as unknown as T;
  if (value && typeof value === 'object') {
    const out: AnyRecord = {};
    for (const key of Object.keys(value as AnyRecord).sort()) {
      out[key] = sortDeep((value as AnyRecord)[key]);
    }
    return out as T;
  }
  return value;
}

function build() {
  const mergedPaths: AnyRecord = {};
  const mergedSchemas: AnyRecord = {};
  const tagsByName = new Map<string, AnyRecord>();

  for (const svc of SERVICES) {
    const spec = swaggerJsdoc({
      definition: { openapi: '3.0.0', info: { title: svc.name, version: '1.0.0' } },
      apis: svc.apis.map(toGlob),
    }) as AnyRecord;

    const paths = (spec.paths ?? {}) as AnyRecord;
    for (const [localPath, item] of Object.entries(paths)) {
      const full = prefixPath(svc.basePath, localPath);
      if (mergedPaths[full]) {
        console.warn(`[generate-openapi] path collision on ${full} (service: ${svc.name})`);
      }
      mergedPaths[full] = item;
    }

    const schemas = ((spec.components as AnyRecord)?.schemas ?? {}) as AnyRecord;
    for (const [name, schema] of Object.entries(schemas)) {
      if (mergedSchemas[name]) {
        console.warn(`[generate-openapi] schema name collision on "${name}" (service: ${svc.name})`);
      }
      mergedSchemas[name] = schema;
    }

    for (const tag of (spec.tags ?? []) as AnyRecord[]) {
      const name = tag.name as string;
      if (name && !tagsByName.has(name)) tagsByName.set(name, tag);
    }
  }

  const merged = {
    openapi: '3.0.0',
    info: {
      title: 'Red Light Green Light Platform API',
      version: '1.0.0',
      description:
        'Unified public API served through the gateway. Generated from per-service ' +
        'controller annotations — do not edit by hand (run `npm run generate:openapi`).',
      contact: { name: 'Red Light Green Light Support' },
    },
    servers: [{ url: '/', description: 'API Gateway' }],
    tags: [...tagsByName.values()].sort((a, b) => String(a.name).localeCompare(String(b.name))),
    components: {
      securitySchemes: {
        BearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
      schemas: sortDeep(mergedSchemas),
    },
    security: [{ BearerAuth: [] }],
    paths: sortDeep(mergedPaths),
  };

  return merged;
}

function main() {
  const spec = build();
  const pathCount = Object.keys(spec.paths).length;
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(spec, null, 2) + '\n', 'utf8');
  console.log(`[generate-openapi] wrote ${pathCount} paths to ${path.relative(ROOT, OUT_FILE)}`);
}

main();
