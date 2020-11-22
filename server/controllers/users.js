const Redis = require('koa-redis');
const Store = new Redis().client;

function register (ctx) {
  const {name, pokers} = ctx.request.body;
  ctx.session.name = name;
  ctx.session.pokers = pokers;
  ctx.status = 201;
}

async function auth (ctx) {
  if (!ctx.cookies.get("sid")) {
    ctx.throw(401);
  }
  const infoStr = await Store.get("koa:sess:"+ctx.cookies.get("sid"));
  console.log(infoStr)
  if (infoStr && JSON.parse(infoStr).name) {
    ctx.body = {name : JSON.parse(infoStr).name}
  } else {
    ctx.throw(404);
  }
  
}


module.exports = {
  auth,
  register,
}