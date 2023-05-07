import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_URL = "https://xdgeziouuaebrftdlcnf.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZ2V6aW91dWFlYnJmdGRsY25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3ODg2NzgsImV4cCI6MTk5ODM2NDY3OH0.pikQy-lSHjsTXjUXrrd1nAFeI893sF4JSPJjeLdYuSk";
const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
