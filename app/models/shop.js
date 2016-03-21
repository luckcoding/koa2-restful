import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shopSchema = new Schema({
  shopId: { type: Number, required: true },
  name: { type: String, required: true },
  subName: String,
  cover: { type: String, required: true },
  tel: { type: String, required: true },
  environment: String,
  panorama: String,
  updated: { type: Date, default: Date.now },
})

export default mongoose.model('Shop', shopSchema)