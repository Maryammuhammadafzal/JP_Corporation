import User from "../models/UserModel.js"
import express from "express"
import jwt from 'jsonwebtoken';
import upload from "../middlewares/upload.js";
import verifyToken from "../middlewares/tokenVerify.js";
const router = express.Router();

const adminUser = {
        username: 'admin',
        password: '**-(!jpadmin!)-**', // later hash it with bcrypt
}

const generateToken = async (id) => {
   return jwt.sign({id} , process.env.JWT_SECRET , {expiresIn : "1h"})
}

// Admin login route
router.post('/', async(req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
                res.status(404).json({ message: 'All Feilds are required' });
        }

        try {
                if (username === adminUser.username ) {

                        if (password === adminUser.password) {
                

                        //Create the user 
                        const user = await User.create({
                                username,
                                password
                        });
        
                        res.status(201).json({
                                id : user._id,
                                user,
                                token: generateToken(user._id),
                        })
                        // const token = jwt.sign({ username }, 'your_jwt_secret');
                        // res.json({ token });
                } else {
                        res.status(404).json({ message: 'Invalid Password' });   
                }
        } else {
                res.status(404).json({ message: 'Invalid User Name' });   
        }
        }
         catch (error) {
                res.status(404).json({ message: 'Error Requesting User' , error : error.message });
        }
});

// router.get("/getUser" , verifyToken , (req , res) => {})

router.post("upload-image" , upload.single("image") , (req , res) => {
        if (!req.file) {
                return res.status(400).json({ message : "No file uploaded" });
        }
        const imageUrl = `${req.verifyToken}://${req.get("host")}/uploads/${req.file.filename}`;
        res.status(200).json({ imageUrl });
})

export default router;
