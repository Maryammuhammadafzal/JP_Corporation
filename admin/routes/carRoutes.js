import express from "express";
import { getCars, postCar , updateCar , getCarsByQuery } from '../controllers/cardController.js';
import verifyToken from '../middlewares/tokenVerify.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get("/", getCars);
router.get("/get", getCarsByQuery);
router.post("/add", upload.fields([
        { name: 'featuredImage', maxCount: 1 },
        { name: 'attachmentImage', maxCount: 1 },
        { name: 'galleryImages', maxCount: 10 }
      ]), postCar );
// UPDATE route for editing car
router.put('/update/:id', upload.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'attachmentImage', maxCount: 1 },
  { name: 'galleryImages', maxCount: 10 }
]), updateCar);
export default router;



