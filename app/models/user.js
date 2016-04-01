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
  // name: { type: String, required: true, minlength: 10 },
  // password: { type: String, required: true },
  registed: { type: Date, default: Date.now },
  regdevice: { type: String },
  // regcity: { type: String, required: true }
})

userSchema.statics.create = async function ({email}) {
  const exists = await this.findOne({email})
  if (exists) {
    return {
      created: false,
      data: await exists.update(arguments[0])
    }
  }
  return {
    created: true,
    data: await this.create(arguments[0])
  }
}

export default mongoose.model('User', userSchema)