import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lclnmjgelvfwgzflmckj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjbG5tamdlbHZmd2d6ZmxtY2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNzIwMzgsImV4cCI6MjA0Mjg0ODAzOH0.JmPFRW-uQdeEU4yOfPNozKKFsTKRxoULHInZ8f2yWrE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
