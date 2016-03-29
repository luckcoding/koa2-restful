import User from '../models/user.js'
import msg from '../middleware/msg.js'
// import {isEmail} from '../utils/rules.js'

export async function register (ctx) {
  const { email, password } = ctx.request.body

  try {
    // console.log(isEmail(email))
    const hasUser = await User.findOne({email: email})
    if (hasUser) {
      // ctx.throw(417)
      ctx.body = msg(417,'已存在用户')
    } else {
      try {
        const user = await new User(ctx.request.body).save()
        ctx.body = user
      } catch (err) {
        ctx.throw(422)
      }
    }
  } catch (err) {
    ctx.throw(422)
  }
}