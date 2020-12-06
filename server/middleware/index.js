const serve = require('koa-static');
const path = require('path');
const session = require('koa-generic-session');
const Redis = require('koa-redis');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const config = require('../config');

module.exports = (app) => {
  app.keys = [process.env.SECRET_KEY];
  app.use(session({
    key: 'sid',
    store: new Redis({
      host: config.heroku.host,
      port: config.heroku.port,
      password: process.env.PASSWORD,
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