import Goods from '../models/goods.js'

export async function save (ctx) {
  console.log(ctx)
  try {
    const goods = await new Goods(ctx.request.body).save()
    ctx.body = goods
  } catch (err) {
    ctx.throw(422)
  }
}