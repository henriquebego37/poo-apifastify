const fastify = require('fastify')({ logger: true });
////------------------------------>
const port = process.env.PORT || 3002
////------------------------------>
// start server
async function start() {
      try {
            await fastify.listen({ port });
            console.log(`server runing: http://localhost:${port}`);
      } catch (err) {
            console.error(err);
      }
};
////------------------------------>
start();
