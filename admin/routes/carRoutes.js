import express from "express";
import { getCars, postCar } from '../controllers/cardController.js';
import verifyToken from '../middlewares/tokenVerify.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get("/", getCars);
router.post("/add", upload.fields([
        { name: 'featuredImage', maxCount: 1 },
        { name: 'attachmentImage', maxCount: 1 },
        { name: 'galleryImages', maxCount: 10 }
      ]), postCar );

export default router;