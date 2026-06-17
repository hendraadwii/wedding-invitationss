import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rsvpRoutes from './routes/rsvp';
import wishesRoutes from './routes/wishes';
import galleryRoutes from './routes/gallery';
import { generalLimiter } from './middlewares/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(generalLimiter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/rsvp', rsvpRoutes);
app.use('/api/wishes', wishesRoutes);
app.use('/api/gallery', galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
