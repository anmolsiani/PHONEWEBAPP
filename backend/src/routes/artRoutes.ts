import express from 'express';
import { getArts, createArt } from '../controllers/artController';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

router.get('/', getArts);
router.post('/', verifyToken, createArt);

export default router;
