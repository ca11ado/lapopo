require('dotenv-flow').config();
const Koa = require ('koa');
const cors = require('@koa/cors');
const middleware = require('./middleware');

const app = new Koa();
const port = process.env.PORT || process.env.VUE_APP_API_PORT;

if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: `http://${process.env.LAPOPO_CLIENT_HOST}:${process.env.LAPOPO_CLIENT_PORT}`,
    credentials: true,
  }));
}

middleware(app);

app.listen(port, () => {
  console.log(`App is running on ${port} port`);
});
