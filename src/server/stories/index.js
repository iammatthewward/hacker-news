const Router = require('koa-router');
const api = require('./api');

const router = new Router({ prefix: '/stories' });

router.get('/', api.getStories);

module.exports = router;
