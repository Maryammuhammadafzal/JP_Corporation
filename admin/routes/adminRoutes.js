import express from "express"
import jwt from 'jsonwebtoken';

const router = express.Router();

const adminUser = {
        username: 'admin',
        password: '**-(!jpadmin!)-**', // later hash it with bcrypt
}

// Admin login route
router.post('/', (req, res) => {
        const { username, password } = req.body;

        if (username === adminUser.username && password === adminUser.password) {
                const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
                res.json({ token });
        } else {
                res.status(401).json({ message: 'Invalid credentials' });
        }
});

export default router;
