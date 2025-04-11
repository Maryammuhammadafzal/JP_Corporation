import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { addCapLinks , getCapLinks , deleteCapLinks , getCapLinksById , updateCapLinks } from '../controllers/capLinksController.js'
import upload from '../middlewares/upload.js';

const router = express.Router();

// Get All Cards

router.post('/add', upload.fields([
        { name : "productFeatureImageRef", maxCount : 1 },
        { name : "productImageRef" ,maxCount : 20 },
        { name : "bLFileRef" , maxCount : 1 },
        { name : "certificateFileRef" , maxCount : 1 },
        { name : "englishCertificateFileRef" , maxCount : 1 },
        { name : "invoiceFileRef" , maxCount : 1 },
        { name : "inspectionFileRef" , maxCount : 1 },
]), addCapLinks);
router.get('/' , getCapLinks);
router.get('/get/:id' , getCapLinksById);
router.put('/update/:id' ,  upload.fields([
        { name : "productFeatureImageRef" , maxCount : 1 },
        { name : "productImageRef" , maxCount : 20 },
        { name : "bLFileRef" , maxCount : 1 },
        { name : "certificateFileRef" , maxCount : 1 },
        { name : "englishCertificateFileRef" , maxCount : 1 },
        { name : "invoiceFileRef" , maxCount : 1 },
        { name : "inspectionFileRef" , maxCount : 1 },
]), updateCapLinks);
router.delete('/delete/:id', deleteCapLinks);

// Export Router
export default router;