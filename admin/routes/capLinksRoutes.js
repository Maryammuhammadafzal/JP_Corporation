import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { addCapLinks  } from '../controllers/capLinksController.js'

const router = express.Router();

// Get All Cards

router.post('/add' , addCapLinks);
// router.get('/' , getCapLinks);
// router.get('/get/:id' , getCapLinksById);
// router.put('/update/:id' , updateCapLinks);
// router.delete('/delete/:id', deleteCapLinks);

// Export Router
export default router;