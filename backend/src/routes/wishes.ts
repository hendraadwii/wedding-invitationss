import { Router } from 'express';
import { getWishes } from '../controllers/wishesController';

const router = Router();

router.get('/', getWishes);

export default router;
