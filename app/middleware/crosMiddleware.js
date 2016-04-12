export default async function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers','content-type')
  // if (!ctx.request.header.origin.includes('http://localhost:8080')) {
  //   return false
  // }
  await next()
}