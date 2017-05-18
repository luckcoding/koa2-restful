import User from '../models/user.js'
import { isEmail } from '../utils/rules.js'

export async function register (ctx) {
  // ====================
  // 普通写法 :
  // ====================
  const { email, password } = ctx.request.body
  const hasUser = await User.findOne({email: email})
  if (hasUser) {
    ctx.throw(400,'已存在用户')
  }
  const user = await new User(ctx.request.body).save()
  ctx.body = user

  this.session.user = {
    email: user.email
  }

  // ====================
  // mongooose :
  // ====================
  // const {done,data} = await User.create(ctx.request.body)
  // if (done === true) {
  //   ctx.body = data
  // } else {
  //   ctx.throw(400,'已存在用户')
  // }

}


