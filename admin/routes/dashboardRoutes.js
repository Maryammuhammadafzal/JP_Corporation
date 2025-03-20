import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { getCars, getCarById , deleteCar } from '../controllers/dashboardController.js'

const router = express.Router();

// Get All Cards
router.get('/' , getCars);
router.get('/get/:id' , getCarById);
router.delete('/delete/:id', deleteCar);

// Export Router
export default router;
