import { Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabaseAdmin';

export const createRSVP = async (req: Request, res: Response) => {
  try {
    const { name, attendance, message } = req.body;

    const { data, error } = await supabaseAdmin
      .from('rsvp')
      .insert([{ name, attendance, message }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRSVPs = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
