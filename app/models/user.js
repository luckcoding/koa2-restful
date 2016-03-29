import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String},
  password: { type: String, required: true },
  updated: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)