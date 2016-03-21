import 'babel-polyfill'
import Router from 'koa-router'

import Shop from '../models/shop.js'

import { baseApi } from '../config'

const api = 'shop'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', async(ctx) => {
  console.log(ctx)
  try {
    const shop = await new Shop(ctx.request.body).save()
    ctx.body = shop
  } catch (err) {
    ctx.throw(422)
  }
})

router.get('/:id', async(ctx) => {
  try {
    const shop = await Shop.findById(ctx.params.id)
    if (!shop) {
      ctx.throw(404)
    }
    ctx.body = shop
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
})

export default router