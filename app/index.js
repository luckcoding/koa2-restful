import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import cros from './middleware/cros'

import routing from './routes/'
import { port, connexionString } from './config'

mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

const app = new Koa()

app
  .use(logger())
  .use(bodyParser())
  .use(cros)

routing(app)

app.listen(port, () => console.log(`✅ The server is running at http://localhost:${port}/`))

export default app