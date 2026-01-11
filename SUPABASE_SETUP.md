# 🚀 Supabase Setup Guide for EduBridge

## ⚠️ Important: You'll see an error until you complete Step 1

If you see **"supabaseKey is required"** or **"Supabase is not configured"**, don't worry! Just follow the 2 steps below.

---

## Quick Setup (2 Steps)

### Step 1: Configure Environment Variables

1. Copy `.env.example` to `.env` in your project root:
   ```bash
   cp .env.example .env
   ```

2. Get your Supabase Anon Key from:
   👉 **https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/settings/api**

3. Update your `.env` file:
   ```env
   VITE_SUPABASE_URL=https://niguvyhdgewekhmwbupg.supabase.co
   VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
   ```

### Step 2: Create Database Table

1. Go to Supabase SQL Editor:
   👉 **https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/sql/new**

2. Copy and paste this SQL script, then click **Run**:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('student', 'teacher', 'expert')),
  full_name text NOT NULL,
  email text NOT NULL,
  
  -- Student fields
  institution text,
  course_year text,
  skill_interests text,
  
  -- Teacher fields
  institution_name text,
  subjects_taught text,
  years_experience integer,
  
  -- Expert fields
  industry_domain text,
  current_role text,
  short_bio text,
  
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for faster queries
CREATE INDEX profiles_user_id_idx ON profiles(user_id);
CREATE INDEX profiles_role_idx ON profiles(role);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
```

## 🎉 That's It!

Your Supabase authentication is now connected. Test it by:

1. **Signup:** Go to `/signup/student` (or `/signup/teacher`, `/signup/expert`)
2. **Login:** Go to `/login`
3. **Check Data:** View users in Supabase dashboard

---

## 📊 Database Schema

```
auth.users (Supabase managed)
├── id (uuid)
├── email (text)
└── encrypted_password (text)
    │
    └── Referenced by: profiles.user_id

profiles (Your table)
├── id (uuid) - Primary Key
├── user_id (uuid) - Foreign Key → auth.users.id
├── role (text) - 'student' | 'teacher' | 'expert'
├── full_name (text)
├── email (text)
├── institution (text) - For students
├── course_year (text) - For students
├── skill_interests (text) - For students
├── institution_name (text) - For teachers
├── subjects_taught (text) - For teachers
├── years_experience (integer) - For teachers
├── industry_domain (text) - For experts
├── current_role (text) - For experts
├── short_bio (text) - For experts
├── created_at (timestamp)
└── updated_at (timestamp)
```

---

## 🔒 Security Features

✅ **Row Level Security (RLS)** - Users can only access their own data
✅ **Password Encryption** - Handled by Supabase automatically
✅ **JWT Authentication** - Secure token-based auth
✅ **Email Validation** - Built-in email verification support

---

## 🛠️ What's Been Integrated

### ✅ Login Page (`/login`)
- ✅ Email/password authentication with Supabase
- ✅ Fetches user profile from database
- ✅ Role-based dashboard redirect
- ✅ Error handling and loading states
- ✅ Stores user data in localStorage

### ✅ Student Signup (`/signup/student`)
- ✅ Creates auth user in Supabase
- ✅ Creates profile in profiles table
- ✅ Stores student-specific data (institution, skills)
- ✅ Validates input and shows errors
- ✅ Redirects to success page

### 📝 Next: Teacher & Expert Signup
Update these pages to use Supabase:
- `/signup/teacher` → `NewTeacherSignup.tsx`
- `/signup/expert` → `NewExpertSignup.tsx`

Use the same pattern as Student signup:
1. Import `supabase` from `/lib/supabaseClient`
2. Create auth user with `signUp()`
3. Insert profile with role-specific data
4. Handle errors and loading states

---

## 🧪 Testing

### Test User Creation:
1. Go to `/signup/student`
2. Fill out the form
3. Click "Create Account"
4. Check Supabase dashboard for new user

### Test Login:
1. Go to `/login`
2. Enter email and password
3. Should redirect to appropriate dashboard

### Verify in Supabase:
- **Auth Users:** https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/auth/users
- **Profiles Table:** https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/editor

---

## 🐛 Troubleshooting

### Error: "Invalid login credentials"
- ✅ Check email/password are correct
- ✅ Verify user exists in Auth Users table

### Error: "Profile not found"
- ✅ Check profiles table has entry for user_id
- ✅ Verify RLS policies are created

### Error: "new row violates row-level security policy"
- ✅ Ensure INSERT policy exists
- ✅ Check user_id matches auth.uid()

### Error: "relation 'profiles' does not exist"
- ✅ Run the SQL schema script (Step 2)

---

## 🎯 Next Steps

1. **Update Teacher Signup** - Add Supabase to `NewTeacherSignup.tsx`
2. **Update Expert Signup** - Add Supabase to `NewExpertSignup.tsx`
3. **Add Password Reset** - Implement forgot password flow
4. **Email Verification** - Enable email confirmation in Supabase
5. **Profile Editing** - Add user profile update functionality

---

## 📚 Resources

- **Supabase Docs:** https://supabase.com/docs
- **Auth Guide:** https://supabase.com/docs/guides/auth
- **Your Project Dashboard:** https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg

---

**Need Help?**  
Check the Supabase docs or examine the implemented Login and Student Signup pages as reference examples.