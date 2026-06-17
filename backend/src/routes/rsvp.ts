import { Router } from 'express';
import { z } from 'zod';
import { createRSVP, getRSVPs } from '../controllers/rsvpController';
import { validate } from '../middlewares/validator';
import { rsvpLimiter } from '../middlewares/rateLimiter';

const router = Router();

const rsvpSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  attendance: z.enum(['Hadir', 'Tidak Hadir']),
  message: z.string().max(500).optional(),
});

router.get('/', getRSVPs);
router.post('/', rsvpLimiter, validate(rsvpSchema), createRSVP);

export default router;
