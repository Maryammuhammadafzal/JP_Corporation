import express from 'express';
import Car from '../models/CarModel.js';
import verifyToken from '../middlewares/tokenVerify.js';

const router = express.Router();

// Get Dashboard
router.get('/', verifyToken, (req, res) => {
    res.json({ message: "Welcome to the dashboard", data: [] });
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
