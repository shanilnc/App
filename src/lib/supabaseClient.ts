import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// These values should be replaced with your actual Supabase project credentials
// You can find these in your Supabase project settings: https://app.supabase.com
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Profile {
  id: string;
  user_id: string;
  role: 'student' | 'teacher' | 'expert';
  full_name: string;
  email: string;
  
  // Student-specific fields
  institution?: string;
  course_year?: string;
  skill_interests?: string;
  
  // Teacher-specific fields
  institution_name?: string;
  subjects_taught?: string;
  years_experience?: number;
  
  // Expert-specific fields
  industry_domain?: string;
  current_role?: string;
  short_bio?: string;
  
  created_at?: string;
  updated_at?: string;
}
