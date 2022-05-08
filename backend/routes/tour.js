import express from 'express';
const router = express.Router();
// import auth from "../middlewares/auth.js"
import { createTour , getTours} from '../controllers/tour.controller.js';

router.post('/' , createTour);
router.get('/',getTours)

export default router;