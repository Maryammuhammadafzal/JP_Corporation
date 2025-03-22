import mongoose from "mongoose";

const CapLinksSchema = new mongoose.Schema({
  capLinksName: { type: String, required: true },
  capLinksCompanyName: { type: String , required : true },
}, { timestamps: true });
export default mongoose.model("CapLinks", CapLinksSchema);