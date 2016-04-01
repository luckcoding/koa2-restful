import mongoose from 'mongoose'
import validate from 'mongoose-validator'
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: validate({
      validator: 'isEmail',
      message: '邮箱格式错误',
    })
  },
  name: { type: String, required: true, minlength: 10 },
  password: { type: String, required: true },
  registed: { type: Date, default: Date.now },
  regdevice: { type: String },
  regcity: { type: String, required: true }
})

/**
 * todo
 */

// find by id
userSchema.statics.findById = async function (_id) {
  const exists = await this.findById(_id)
  if (exists) {
    return {
      done: true,
      data: exists
    }
  }
}

userSchema.statics.create = async function (obj) {
  const user = new this(obj)

  const exists = await this.findOne({email: user.email})
  if (exists) {
    return {
      done: false,
    }
  }
  const back = await user.save()
  if (back) {
    return {
      done: true,
      data: back
    }
  }
}

export default mongoose.model('User', userSchema)