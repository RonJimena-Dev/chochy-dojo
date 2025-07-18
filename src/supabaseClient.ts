import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tnqqgeqwuvoxlbfxsvlk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRucXFnZXF3dXZveGxiZnhzdmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTIyNzQsImV4cCI6MjA2ODM4ODI3NH0.pGc_nKrA0K0UIl0RDkh_pfAe9TtomnI4BSG1SVrTCUo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
