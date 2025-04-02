import express from 'express';
import verifyToken from '../middlewares/tokenVerify.js';
import { addCapLinks , getCapLinks , deleteCapLinks , getCapLinksById , updateCapLinks } from '../controllers/capLinksController.js'
import upload from '../middlewares/upload.js';

const router = express.Router();

// Get All Cards

router.post('/add', upload.fields([
        { name : "productFeatureImageRef" },
        { name : "productImageRef" },
        { name : "bLFileRef" },
        { name : "certificateFileRef" },
        { name : "englishCertificateFileRef" },
        { name : "invoiceFileRef" },
        { name : "inspectionFileRef" },
]), addCapLinks);
router.get('/' , getCapLinks);
router.get('/get/:id' , getCapLinksById);
router.put('/update/:id' ,  upload.fields([
        { name : "productFeatureImageRef" },
        { name : "productImageRef" },
        { name : "bLFileRef" },
        { name : "certificateFileRef" },
        { name : "englishCertificateFileRef" },
        { name : "invoiceFileRef" },
        { name : "inspectionFileRef" },
]), updateCapLinks);
router.delete('/delete/:id', deleteCapLinks);

// Export Router
export default router;