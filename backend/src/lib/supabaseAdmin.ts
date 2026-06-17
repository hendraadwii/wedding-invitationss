import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

let supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Clean trailing slash and '/rest/v1' from URL if exists to prevent double/invalid paths
if (supabaseUrl.endsWith('/')) {
  supabaseUrl = supabaseUrl.slice(0, -1);
}
if (supabaseUrl.endsWith('/rest/v1')) {
  supabaseUrl = supabaseUrl.slice(0, -8);
}


if (!supabaseUrl || supabaseUrl === 'your_supabase_url' || !supabaseUrl.startsWith('http')) {
  console.error('\n❌ ERROR: SUPABASE_URL in backend/.env is not configured or is invalid.');
  console.error('Please edit backend/.env and replace "your_supabase_url" with your actual Supabase Project URL.\n');
  process.exit(1);
}

if (!supabaseServiceRoleKey || supabaseServiceRoleKey === 'your_supabase_service_role_key') {
  console.error('\n❌ ERROR: SUPABASE_SERVICE_ROLE_KEY in backend/.env is not configured.');
  console.error('Please edit backend/.env and replace "your_supabase_service_role_key" with your actual Supabase service role key.\n');
  process.exit(1);
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {

  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

