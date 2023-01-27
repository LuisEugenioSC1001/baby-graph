import { Schema, model } from "mongoose";
import Gift from "./gift";

const guest = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  attend: {
    type: Boolean,
    required: true,
  },
  companion: {
    type: Number,
    required: false,
  },
  gifts: {
    type: [Gift.schema],
    required: false,
  },
},{timestamps:true, versionKey:false});

const Guest = model("Guest", guest);
export default Guest;
