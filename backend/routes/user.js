import express from 'express';
const router = express.Router();

import { signIn, signup } from '../controllers/user.controller.js';

router.post('/signup' , signup);
router.post('/signin' , signIn);

export default router;