const Router = require('@koa/router');
const {register, auth} = require('./../../controllers/users')

const router = new Router({prefix: '/api'})

router.get('/user', auth);
router.post('/user', register);

module.exports = router;