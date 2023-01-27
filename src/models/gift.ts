import { Schema, model } from "mongoose";

const gift = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
},{timestamps:true, versionKey:false});
const Gift = model("Gift", gift);

export default Gift;
