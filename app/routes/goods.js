import Router from 'koa-router'

import { baseApi } from '../config'
import {save} from '../controllers/goods.js'

const api = 'goods'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/save', save)

export default router