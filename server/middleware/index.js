const serve = require('koa-static');
const path = require('path');
const session = require('koa-generic-session');
const Redis = require('koa-redis');
const router = require('./router');
const bodyParser = require('koa-bodyparser');

module.exports = (app) => {
  app.keys = [process.env.LAPOPO_SECRET_KEY];
  app.use(session({
    key: 'sid',
    store: new Redis({
      url: process.env.REDIS_URL,
      serialize: (session) => {
        return JSON.stringify({
          name: session.name
        })
      },
    }),
  }, app));
  app.use(bodyParser());
  app.use(router.middleware());
  if (process.env.NODE_ENV === 'production') {
    app.use(serve(path.join(__dirname, '../../dist')));
  }
}
