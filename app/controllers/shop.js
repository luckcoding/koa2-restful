import Shop from '../models/shop.js'

export async function save (ctx) {
  console.log(ctx)
  try {
    const shop = await new Shop(ctx.request.body).save()
    ctx.body = shop
  } catch (err) {
    ctx.throw(422)
  }
}

export async function show (ctx) {
  console.log(ctx)
  try {
    ctx.body = await Shop.find()
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
}

export async function find (ctx) {
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
}