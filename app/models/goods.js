import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goodsSchema = new Schema({
  goodsId: { type: Number, required: true },
  name: { type: String, required: true },
  updated: { type: Date, default: Date.now }
})

export default mongoose.model('Goods', goodsSchema)