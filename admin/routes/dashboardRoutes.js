import express from 'express';
import Car from '../models/CardModel.js'; 
import verifyToken from '../middlewares/tokenVerify.js';

const router = express.Router();

// Get Dashboard
router.get('/', verifyToken, (req, res) => {
    res.json({ message: "Welcome to the dashboard", data: [] });
});

// Add New Car
router.post('/add', verifyToken, async (req, res) => {
    const { name, password } = req.body;

    try {
        const car = new Car({ name, password });
        const savedCar = await car.save();

        res.json({ message: "Car added successfully", data: savedCar });
    } catch (err) {
        res.status(400).json({ message: "Failed to add car", error: err.message });
    }
});

// Update Car
router.put('/update/:id', verifyToken, async (req, res) => {
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
});

// Delete Car
router.delete('/delete/:id', verifyToken, async (req, res) => {
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
});

// Export Router
export default router;
