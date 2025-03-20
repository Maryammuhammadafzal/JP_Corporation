import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { getCars, updateCar, deleteCar } from '../controllers/dashboardController.js'

const router = express.Router();

// Get All Cards
router.get('/' , getCars);
router.put('/update/:id' , updateCar);
router.delete('/delete/:id', deleteCar);

// Export Router
export default router;
