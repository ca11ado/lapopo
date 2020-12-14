require('dotenv-flow').config();
const Koa = require ('koa');
const cors = require('@koa/cors');
const middleware = require('./middleware');

const app = new Koa();
const port = process.env.VUE_APP_API_PORT;
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? `http://${process.env.LAPOPO_CLIENT_HOST}:${process.env.LAPOPO_CLIENT_PORT}`
    : '*'
};

app.use(cors(corsOptions));

middleware(app);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
