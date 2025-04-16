import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  carTitle: { type: String, required: true },
  carCondition: { type: String, required: true },
  carType: { type: String },
  carMake: { type: String, required: true  },
  carModel: { type: String },
  carPrice: { type: String },
  carYear: { type: String, required: true },
  carDriveType: { type: String },
  carTransmission: { type: String },
  carFuelType: { type: String },
  carMileage: { type: String },
  carEngineSize: { type: String },
  carCylinder: { type: String },
  carColour: { type: String },
  carDoor: { type: String },
  carVin: { type: String },
  carAvailability: { type: String },
  carDescription: { type: String },
  featuredImage: String,          
  attachmentImage: String,        
  galleryImages: [String],
  carAllFeatures : [{ type: String }],
  carSafetyFeatures: [{ type: String }],
}, { timestamps: true });
export default mongoose.model("Car", CarSchema);