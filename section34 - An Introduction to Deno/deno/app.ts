import { Application, Context } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts';

const app = new Application();

app.use(async (Context, next) => {
  console.log('Middleware!');
  await next();
})

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());


await app.listen({ port: 3000 });