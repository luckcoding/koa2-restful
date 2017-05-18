import Router from 'koa-router'

import { baseApi } from '../config'
import { register } from '../controllers/auth.js'

const api = 'auth'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/register', register)

export default router