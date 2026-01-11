# EduBridge Supabase Authentication Guide

## Overview

This guide documents the **Supabase-ready authentication UI** screens designed for the EduBridge platform. These screens provide a complete reference implementation for integrating Supabase Auth with role-based user management.

---

## 🚀 Quick Start

### Access the Supabase Authentication Flow

Navigate to these routes to see the Supabase authentication screens:

- **Login:** `/supabase-login`
- **Signup Questionnaire:** `/supabase-signup-questionnaire`
- **Signup Forms:** `/supabase-signup/:role` (where `:role` is `student`, `teacher`, or `expert`)
- **Success Screen:** `/signup-success`

---

## 📋 Authentication Flow

### Complete User Journey

```
1. Landing Page
   ↓
2. Supabase Login (/supabase-login)
   OR
   Signup Questionnaire (/supabase-signup-questionnaire)
   ↓
3. Role Selection (Student / Teacher / Expert)
   ↓
4. Role-Specific Signup Form (/supabase-signup/:role)
   ↓
5. Account Creation & Success Screen (/signup-success)
   ↓
6. Redirect to Dashboard (based on role)
```

---

## 🎨 Screen Details

### 1. Login Page (`/supabase-login`)

**Purpose:** Authenticate existing users with email and password

**Features:**
- Email and password input fields
- Password visibility toggle
- Loading states (idle, loading, success, error)
- Error handling with inline messages
- "Forgot Password" link
- "Create Account" CTA

**Supabase Integration:**

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
});

if (error) {
  // Handle error states:
  // - Invalid login credentials
  // - Email not confirmed
  // - Network errors
}

// Fetch user role from profiles table
const { data: profile } = await supabase
  .from('profiles')
  .select('role, full_name')
  .eq('user_id', data.user.id)
  .single();

// Redirect based on role
if (profile.role === 'student') navigate('/dashboard/student');
if (profile.role === 'teacher') navigate('/dashboard/teacher');
if (profile.role === 'expert') navigate('/dashboard/expert');
```

**Error States:**
- Invalid credentials
- Email not confirmed
- Network errors
- Generic errors

---

### 2. Signup Questionnaire (`/supabase-signup-questionnaire`)

**Purpose:** Discover user role through intent-based questioning

**Features:**
- 3-step progress indicator
- Role selection cards (Student, Teacher, Expert)
- Visual feedback on selection
- Role-specific color coding
- Continue button (disabled until selection)

**Role Detection Logic:**

```typescript
// User selects intent → stores in localStorage
localStorage.setItem('pendingUserRole', selectedRole);

// Navigate to role-specific signup
navigate(`/supabase-signup/${selectedRole}`);
```

**Role Mapping:**
- "I want to learn new skills" → Student (Green #48BB78)
- "I want to improve my teaching" → Teacher (Teal #14B8A6)
- "I want to share my expertise" → Expert (Purple #9F7AEA)

---

### 3. Signup Form (`/supabase-signup/:role`)

**Purpose:** Collect user details and create Supabase account

**Common Fields (All Roles):**
- Full Name *
- Email Address *
- Password * (with strength validation)
- Confirm Password *

**Student-Specific Fields:**
- Institution *
- Course / Year *
- Skill Interests (optional)

**Teacher-Specific Fields:**
- Institution Name *
- Subjects Taught *
- Years of Experience *

**Expert-Specific Fields:**
- Industry / Domain *
- Current Role *
- Short Bio *

**Supabase Integration:**

```typescript
// Step 1: Create auth user
const { data: authData, error: authError } = await supabase.auth.signUp({
  email: email,
  password: password,
});

if (authError) throw authError;

// Step 2: Create profile with role-specific data
const profileData = {
  user_id: authData.user.id,
  role: role, // 'student' | 'teacher' | 'expert'
  full_name: fullName,
  email: email,
  
  // Role-specific fields
  ...(role === 'student' && {
    institution: institution,
    course_year: courseYear,
    skill_interests: skillInterests,
  }),
  
  ...(role === 'teacher' && {
    institution_name: institutionName,
    subjects_taught: subjectsTaught,
    years_experience: parseInt(yearsExperience),
  }),
  
  ...(role === 'expert' && {
    industry_domain: industryDomain,
    current_role: currentRole,
    short_bio: shortBio,
  }),
};

const { error: profileError } = await supabase
  .from('profiles')
  .insert(profileData);

if (profileError) throw profileError;
```

**Validation Rules:**
- Full Name: Required, non-empty
- Email: Required, valid email format
- Password: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- Confirm Password: Must match password
- All role-specific required fields must be filled

**Error Handling:**
- User already registered
- Weak password
- Network errors
- Missing required fields
- Inline validation errors with icons

---

### 4. Success Screen (`/signup-success`)

**Purpose:** Confirm successful account creation

**Features:**
- Confetti animation (3 seconds)
- Success icon with pulsing animation
- Welcome message with user's name
- Account verification checklist
- Role-specific color theming
- "Continue to Dashboard" CTA

**Success State Data:**
```typescript
✓ User created in auth.users
✓ Profile created in profiles table
✓ Role: [student|teacher|expert]
✓ Email verification sent (if enabled)
```

---

## 🗄️ Database Schema

### Supabase Tables

#### `auth.users` (Built-in Supabase Auth)
```sql
-- Managed by Supabase Auth
- id (uuid, primary key)
- email (text, unique)
- encrypted_password (text)
- email_confirmed_at (timestamp)
- created_at (timestamp)
```

#### `profiles` (Custom Table)
```sql
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('student', 'teacher', 'expert')),
  full_name text NOT NULL,
  email text NOT NULL,
  
  -- Student-specific fields
  institution text,
  course_year text,
  skill_interests text,
  
  -- Teacher-specific fields
  institution_name text,
  subjects_taught text,
  years_experience integer,
  
  -- Expert-specific fields
  industry_domain text,
  current_role text,
  short_bio text,
  
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);
```

---

## 🎨 UI/UX Features

### Color Theming (Role-Based)

**Student (Green):**
- Primary: `#48BB78`
- Gradient: `from-[#48BB78] to-[#38A169]`

**Teacher (Teal):**
- Primary: `#14B8A6`
- Gradient: `from-[#14B8A6] to-[#0D9488]`

**Expert (Purple):**
- Primary: `#9F7AEA`
- Gradient: `from-[#9F7AEA] to-[#805AD5]`

### States & Animations

**Login/Signup States:**
- `idle` - Default state
- `loading` - Spinner animation on button
- `success` - Success message + redirect
- `error` - Inline error messages

**Animations:**
- Smooth transitions (300ms)
- Confetti on success (3s duration)
- Pulsing success icon
- Form field focus rings
- Button hover effects

### Accessibility

✅ Keyboard navigation
✅ Focus indicators
✅ Screen reader labels
✅ Error announcements
✅ Color contrast (WCAG AA)
✅ Responsive mobile-first design

---

## 🔧 Developer Notes

### Developer Annotation Panels

Each screen includes a **dark developer notes panel** at the bottom showing:
- Current state values
- Supabase integration points
- Data mapping to database fields
- Real-time field values

These panels are for **developer reference only** and should be removed in production.

### Component Files

```
/src/app/pages/
  ├── SupabaseLogin.tsx              # Login screen
  ├── SupabaseSignupQuestionnaire.tsx # Role discovery
  ├── SupabaseSignup.tsx             # Role-specific signup
  └── SignupSuccess.tsx              # Success confirmation
```

### Routes Configuration

```typescript
// App.tsx
<Route path="/supabase-login" element={<SupabaseLogin />} />
<Route path="/supabase-signup-questionnaire" element={<SupabaseSignupQuestionnaire />} />
<Route path="/supabase-signup/:role" element={<SupabaseSignup />} />
<Route path="/signup-success" element={<SignupSuccess />} />
```

---

## 🚨 Error Handling

### Login Errors

| Error Message | Supabase Error | User Message |
|--------------|----------------|--------------|
| `Invalid login credentials` | Auth error | "Invalid email or password. Please try again." |
| `Email not confirmed` | Auth error | "Please verify your email before logging in." |
| Network error | Connection issue | "An error occurred. Please try again." |

### Signup Errors

| Error Message | Supabase Error | User Message |
|--------------|----------------|--------------|
| `User already registered` | Auth error | "This email is already registered. Please log in." |
| `Password should be at least 6 characters` | Validation | "Password must be at least 6 characters long." |
| Weak password | Validation | "Password must contain uppercase, lowercase, and number" |
| Network error | Connection issue | "An error occurred during signup. Please try again." |

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 640px - Full-width forms, stacked layout
- **Tablet:** 640px - 1024px - Medium-width cards
- **Desktop:** > 1024px - Max-width 512px centered cards

### Mobile-Specific Features

- Bottom sheet modals
- Touch-friendly tap targets (min 44x44px)
- Optimized keyboard behavior
- Reduced animations for performance

---

## ✅ Testing Checklist

### Functional Testing

- [ ] Login with valid credentials
- [ ] Login with invalid credentials
- [ ] Password visibility toggle
- [ ] Forgot password link
- [ ] Role selection (all 3 roles)
- [ ] Signup form validation (all fields)
- [ ] Password strength validation
- [ ] Email format validation
- [ ] Confirm password matching
- [ ] Successful account creation
- [ ] Redirect to correct dashboard
- [ ] Error message display

### Visual Testing

- [ ] Responsive layouts (mobile, tablet, desktop)
- [ ] Role-specific color theming
- [ ] Loading states
- [ ] Success animations
- [ ] Error states
- [ ] Focus indicators
- [ ] Hover effects
- [ ] Progress indicators

---

## 🎯 Next Steps for Implementation

1. **Set up Supabase Project:**
   - Create project at supabase.com
   - Create `profiles` table with schema above
   - Enable Row Level Security policies

2. **Install Supabase Client:**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Configure Supabase:**
   ```typescript
   // src/supabaseClient.ts
   import { createClient } from '@supabase/supabase-js';
   
   const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
   const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
   
   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

4. **Uncomment Supabase Integration Code:**
   - Search for `// SUPABASE INTEGRATION POINT` in each file
   - Uncomment the Supabase code blocks
   - Remove mock/simulation code

5. **Test Authentication Flow:**
   - Test signup for all roles
   - Test login with created accounts
   - Verify role-based redirects
   - Test error scenarios

---

## 📞 Support

For questions or issues with this authentication implementation, refer to:
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- EduBridge Development Team

---

**Last Updated:** January 11, 2026
**Version:** 1.0.0
**Status:** ✅ Ready for Developer Handoff
