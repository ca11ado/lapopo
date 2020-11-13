const serve = require('koa-static');
const path = require('path');

module.exports = (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.use(serve(path.join(__dirname, '../../dist')));
  }
}