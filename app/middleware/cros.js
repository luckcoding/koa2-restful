export default async function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', '*')
  if (ctx.request.header.origin != 'http://localhost:8080') {
    return false
  }
  await next()
}