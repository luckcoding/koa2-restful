import Router from 'koa-router'

import { baseApi } from '../config'
import { register } from '../controllers/path.js'

const api = 'path'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/register', register)

export default router