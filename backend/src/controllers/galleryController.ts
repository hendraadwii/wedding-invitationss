import { Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabaseAdmin';

export const getGallery = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
