import { Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabaseAdmin';

export const getWishes = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('rsvp')
      .select('name, attendance, message, created_at')
      .not('message', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
