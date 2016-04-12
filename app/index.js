import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import convert from 'koa-convert'
import session from 'koa-session'
import mongoose from 'mongoose'

import cros from './middleware/crosMiddleware'
import pipeMiddleware from './middleware/pipeMiddleware'

import routing from './routes/'
import { port, mongodb } from './config'

mongoose.connect(mongodb)
mongoose.connection.on('error', console.error)

const app = new Koa()

app.jsonSpaces = 0 // 压缩json返回中的空格
app.keys = ['key']

app.use(convert.compose(
  cros, // 跨域
  logger(),
  bodyParser(),
  session(app),
  pipeMiddleware()
))
// app.use(cros) // 跨域
// app.use(convert(logger()))
// app.use(convert(bodyParser()))
// app.use(convert(session(app)))
// app.use(pipeMiddleware())

routing(app)

app.listen(port, () => console.log(`✅ The server is running at http://localhost:${port}/`))

export default app