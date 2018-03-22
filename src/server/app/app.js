const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const stories = require('../stories');

const app = new Koa();
const router = new Router({ prefix: '/api' });

router.use(stories.routes(), stories.allowedMethods());

app.use(cors());
app.use(router.routes());

module.exports = app;
