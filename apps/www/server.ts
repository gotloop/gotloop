import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import fastifyStatic from '@fastify/static';
import fastify from 'fastify';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function app() {
  const server = fastify();
  const angularNodeAppEngine = new AngularNodeAppEngine();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  server.register(fastifyStatic, { root: browserDistFolder, wildcard: false });

  // All regular routes use the Angular engine
  server.get('*', async (req, reply) => {
    try {
      const response = await angularNodeAppEngine.handle(req.raw, {
        server: 'fastify',
      });
      if (response) {
        await writeResponseToNodeResponse(response, reply.raw);
      } else {
        reply.callNotFound();
      }
    } catch (error) {
      reply.send(error);
    }
  });

  return server;
}

const server = app();

if (isMainModule(import.meta.url)) {
  const port = +(process.env['PORT'] || 4000);
  const host = process.env['HOST'] || '0.0.0.0';
  server.listen({ port, host }, () => {
    console.log(`Fastify server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(async (req, res) => {
  await server.ready();
  server.server.emit('request', req, res);
});
