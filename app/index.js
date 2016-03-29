import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import convert from 'koa-convert'
import session from 'koa-session'
import mongoose from 'mongoose'
import cros from './middleware/cros'

import routing from './routes/'
import { port, connexionString } from './config'

mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

const app = new Koa()

app
  .use(convert(logger()))
  .use(convert(bodyParser()))

/**
 * 跨域
 */
app.use(cros)

app.on('error', function(err, ctx){
  log.error('server error', err, ctx)
})

/**
 * 压缩json返回中的空格
 */
app.jsonSpaces = 0

/**
 * key
 */
app.keys = ['key']

/**
 * session
 */
app.use(convert(session(app)))



routing(app)

app.listen(port, () => console.log(`✅ The server is running at http://localhost:${port}/`))

export default app