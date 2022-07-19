const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = (module.exports = new Koa());

// middleware

app.use(logger());

app.use(render);

app.use(koaBody());

// route definitions

router.get('/', index);

router.get('/koka-kabana', async function alo(ctx) {
  await ctx.render('hello', { content: 'yello yello!!' });
});

app.use(router.routes());

async function index(ctx) {
  await ctx.render('index', { content: 'Hello World' });
}

// listen

if (!module.parent) app.listen(3000);
