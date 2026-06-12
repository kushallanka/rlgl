import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Config } from '../config/index.js';

export interface SwaggerOptions {
  title: string;
  version: string;
  description: string;
  /** The route where Swagger UI will be served (e.g., '/docs' or '/api-docs') */
  swaggerRoute?: string;
  /** The base URL for the API (e.g., '/api/v1/auth') */
  basePath?: string;
  /** Array of file paths to scan for OpenAPI annotations */
  apis: string[];
}

/**
 * Sets up Swagger UI and OpenAPI documentation for an Express application.
 * 
 * @param app - The Express application instance
 * @param config - The application configuration (uses ENABLE_SWAGGER flag)
 * @param options - Configuration options for Swagger
 */
export const setupSwagger = (app: Express, config: Config, options: SwaggerOptions) => {
  // Respect environment-aware visibility
  if (config.ENABLE_SWAGGER === false) {
    return;
  }

  const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: options.title,
        version: options.version,
        description: options.description,
        contact: {
          name: 'Red Light Green Light Support',
        },
      },
      servers: options.basePath ? [
        {
          url: options.basePath,
          description: 'Service Base Path',
        },
      ] : [
        {
          url: '/',
          description: 'Root',
        }
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      // Globally apply security to all endpoints by default
      // Individual endpoints can override this
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
    apis: options.apis,
  };

  const swaggerSpec = swaggerJsdoc(swaggerOptions);

  const route = options.swaggerRoute || (options.title === 'API Gateway' ? '/api-docs' : '/docs');

  app.use(route, swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: `${options.title} | RLGL Documentation`,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
    },
  }));

};
