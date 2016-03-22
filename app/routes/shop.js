import 'babel-polyfill'
import Router from 'koa-router'

import Shop from '../models/shop.js'

import { baseApi } from '../config'

const api = 'shop'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/save', async(ctx) => {
  console.log(ctx)
  try {
    const shop = await new Shop(ctx.request.body).save()
    ctx.body = shop
  } catch (err) {
    ctx.throw(422)
  }
})

router.post('/lists', async(ctx) => {
  try {
    ctx.body = await Shop.find()
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
})

router.post('/findById:id', async(ctx) => {
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


// // GET /api/city
// router.get('/', async(ctx) =>
//   ctx.body = await City.find())

// // POST /api/city
// router.post('/', async(ctx) => {
//   console.log(ctx)
//   try {
//     const city = await new City(ctx.request.body).save()
//     ctx.body = city
//   } catch (err) {
//     ctx.throw(422)
//   }
// })

// // GET /api/city/id
// router.get('/:id', async(ctx) => {
//   try {
//     const city = await City.findById(ctx.params.id)
//     if (!city) {
//       ctx.throw(404)
//     }
//     ctx.body = city
//   } catch (err) {
//     if (err.name === 'CastError' || err.name === 'NotFoundError') {
//       ctx.throw(404)
//     }
//     ctx.throw(500)
//   }
// })

// // PUT /api/city/id
// router.put('/:id', async(ctx) => {
//   try {
//     const city = await City.findByIdAndUpdate(ctx.params.id, ctx.request.body)
//     if (!city) {
//       ctx.throw(404)
//     }
//     ctx.body = city
//   } catch (err) {
//     if (err.name === 'CastError' || err.name === 'NotFoundError') {
//       ctx.throw(404)
//     }
//     ctx.throw(500)
//   }
// })

// // DELETE /api/city/id
// router.delete('/:id', async(ctx) => {
//   try {
//     const city = await City.findByIdAndRemove(ctx.params.id)
//     if (!city) {
//       ctx.throw(404)
//     }
//     ctx.body = city
//   } catch (err) {
//     if (err.name === 'CastError' || err.name === 'NotFoundError') {
//       ctx.throw(404)
//     }
//     ctx.throw(500)
//   }
// })

export default router