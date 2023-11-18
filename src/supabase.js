import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qgkssafktlzxpkemhkaq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFna3NzYWZrdGx6eHBrZW1oa2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMzMyNDcsImV4cCI6MjAxNTkwOTI0N30.OX-rkL99MVsg0wPMJRmx-Mzhq2uz5fcQyFjNd_Pnvfc';

export const supabase = createClient(supabaseUrl, supabaseKey);
