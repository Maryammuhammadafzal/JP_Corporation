import Car from "../models/CarModel.js";
import verifyToken from "../middlewares/tokenVerify.js";

// Get All Car
export const getCars =  async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const getCar = await Car.find()
                .skip((page - 1) * limit)
                .limit(limit);

        res.json(getCar);
};


// Update Car
export const updateCar = async (req, res) => {
        const id = req.params.id;
        const { name, password } = req.body;
    
        try {
            const updatedCar = await Car.findByIdAndUpdate(id, { name, password }, { new: true });
    
            if (!updatedCar) {
                return res.status(404).json({ message: "Car not found" });
            }
    
            res.json({ message: "Car updated successfully", data: updatedCar });
        } catch (err) {
            res.status(400).json({ message: "Failed to update car", error: err.message });
        }
    };
    
    // Delete Car
export const deleteCar =  async (req, res) => {
        const id = req.params.id;
    
        try {
            const deletedCar = await Car.findByIdAndDelete(id);
    
            if (!deletedCar) {
                return res.status(404).json({ message: "Car not found" });
            }
    
            res.json({ message: "Car deleted successfully", data: deletedCar });
        } catch (err) {
            res.status(400).json({ message: "Failed to delete car", error: err.message });
        }
    };