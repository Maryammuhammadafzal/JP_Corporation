import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: { type : String , required : true},
  image: { type : String , required : true},
  price: { type : String , required : true},
  miles: { type : String , required : true},
  transition: { type : String , required : true},
  model: { type : String , required : true}
}, { timestamps: true });

export default mongoose.model("Card", cardSchema);