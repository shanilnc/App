import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
// Get these values from: https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://niguvyhdgewekhmwbupg.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Validate configuration
if (!import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY === '') {
  console.warn(
    '⚠️ SUPABASE SETUP REQUIRED:\n' +
    '1. Create a .env file in the project root\n' +
    '2. Add: VITE_SUPABASE_ANON_KEY=your-key-here\n' +
    '3. Get your key from: https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/settings/api\n' +
    '4. See SUPABASE_SETUP.md for detailed instructions'
  );
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface UserProfile {
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