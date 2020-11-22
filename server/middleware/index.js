const serve = require('koa-static');
const path = require('path');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const Redis = require('koa-redis');

module.exports = (app) => {
  app.keys = ['keys', 'keykeys'];
  app.use(session({
    key:'sid',
    store: Redis(),
  }));
  app.use(bodyParser());
  app.use(router.middleware());
  if (process.env.NODE_ENV === 'production') {
    app.use(serve(path.join(__dirname, '../../dist')));
  }
}