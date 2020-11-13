const Koa = require ('koa');
const config = require('./config');

const middleware = require('./middleware');

const app = new Koa();

middleware(app);

app.listen(config.port, () => {
  console.log(`App is running on http://localhost:${config.port}`);
});
