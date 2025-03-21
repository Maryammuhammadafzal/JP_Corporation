import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { addModal   } from '../controllers/modelController.js'

const router = express.Router();

// Get All Cards

router.post('/add' , addModal);
// router.get('/' , getModal);
// router.get('/get/:id' , getModalById);
// router.put('/edit/:id' , editModalById);editModalById
// router.delete('/delete/:id', deleteModal);

// Export Router
export default router;