const fastify = require('fastify')({ logger: true });
////-------------------->
////------------------------------>
fastify.get('/', async (request, reply) => {
      return { message: 'Hello, World!' };
});
////-------------------->
////-------------------->