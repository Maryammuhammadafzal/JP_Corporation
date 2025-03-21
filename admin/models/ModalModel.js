import mongoose from "mongoose";

const ModalSchema = new mongoose.Schema({
  modalTitle: { type: String, required: true },
  modalMake: { type: String , required : true },
}, { timestamps: true });
export default mongoose.model("Modal", ModalSchema);