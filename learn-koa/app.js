const Koa = require('koa')
require('dotenv').config()
const json = require('koa-json')

const app = new Koa()
const port = process.env.SERVER_PORT

app.use(json())

// Koa doesn't ship with a router
// What is a router? A router is simply an endpoint + HTTP method

app.use(async ctx => (ctx.body = {message: 'Why did Ahmar make me use Koa when Express is all I needed?'}))

// The reason Nodemon wasn't working is because we ran `npm start` and package.json had 
// "start": "node ./learn-koa/app.js",
//  Should run `npm run dev` to get Nodemon

app.listen(port || 3002, () => console.log(`Server is listening on ${port}`))