import { createClient } from '@supabase/supabase-js';

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Clean trailing slash and '/rest/v1' from URL if exists to prevent double/invalid paths
if (supabaseUrl.endsWith('/')) {
  supabaseUrl = supabaseUrl.slice(0, -1);
}
if (supabaseUrl.endsWith('/rest/v1')) {
  supabaseUrl = supabaseUrl.slice(0, -8);
}


const isConfigured = supabaseUrl && supabaseUrl !== 'your_supabase_url' && supabaseUrl.startsWith('http');

if (!isConfigured && typeof window !== 'undefined') {
  console.warn(
    '⚠️ Warning: NEXT_PUBLIC_SUPABASE_URL is not configured correctly in .env.local. Supabase client will run in fallback mode.'
  );
}

export const supabase = createClient(
  isConfigured ? supabaseUrl : 'https://placeholder-project.supabase.co',
  isConfigured ? supabaseAnonKey : 'placeholder-key'
);


