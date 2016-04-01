import User from '../models/user.js'
import msg from '../middleware/msg.js'
import {isEmail} from '../utils/rules.js'

export async function register (ctx) {

  const { email, password } = ctx.request.body

  const hasUser = await User.findOne({email: email})

  if (hasUser) {
    ctx.throw(400,'已存在用户')
  }

  const user = await new User(ctx.request.body).save()
  ctx.body = user

}


