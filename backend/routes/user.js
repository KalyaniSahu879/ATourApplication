import express from 'express';
const router = express.Router();

import { signIn, signup ,googleSignIn} from '../controllers/user.controller.js';

router.post('/signup' , signup);
router.post('/signin' , signIn);
router.post('/googleSignIn' , googleSignIn);

export default router;