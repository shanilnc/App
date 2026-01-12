# EduBridge 🎓

A comprehensive EdTech platform connecting Industry Experts, Teachers, and Students in a seamless learning ecosystem.

![EduBridge Platform](https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=400&fit=crop)

## 🌟 Overview

EduBridge is a full-featured educational technology platform that bridges the gap between industry professionals, educators, and learners. Built with modern web technologies and a beautiful craft-07 inspired design system, EduBridge provides a comprehensive learning experience with role-based access, course management, and interactive learning tools.

## ✨ Key Features

### 🎨 Design System
- **Warm Frameblox Craft-07 Theme**: Peach cream backgrounds with coral gradients
- **Role-Specific Accent Colors**: 
  - Industry Experts: Professional Blue
  - Teachers: Vibrant Orange
  - Students: Energetic Green
- **Dark Mode/Light Mode Toggle**: Smooth animations with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 👥 Three-Role Ecosystem

#### 1. Industry Experts
- Share real-world knowledge and industry insights
- Create specialized courses and workshops
- Mentor students with practical expertise
- Build professional brand and following

#### 2. Teachers
- Develop structured curriculum and courses
- Manage classrooms and student progress
- Create assessments and assignments
- Track learning outcomes and analytics

#### 3. Students
- Browse and enroll in diverse courses
- Interactive learning experience
- Track progress and achievements
- Connect with mentors and peers

### 🔐 Authentication System
- **Production-Ready Login/Signup**: Full Supabase integration
- **Role-Specific Signup Forms**: Tailored fields for each user type
- **Form Validation**: Real-time validation with error handling
- **Session Management**: Secure token-based authentication
- **Social Login Support**: Ready for OAuth providers (Google, GitHub, etc.)

### 🧭 Intelligent Role Discovery
- Dynamic questionnaire system
- Automatic role detection based on user responses
- Personalized onboarding experience
- Smart recommendations

### 📚 Course Management

#### Course Preview System
- Detailed course information pages
- Instructor profiles and credentials
- Course curriculum breakdown
- Student reviews and ratings
- Prerequisites and learning outcomes

#### Enrollment Flow
- Streamlined enrollment process
- Razorpay-inspired payment modals
- Secure payment processing
- Instant access upon enrollment

#### Course Player
- Udemy-style video player interface
- Progress tracking
- Note-taking capabilities
- Resource downloads
- Interactive elements

### 📊 Feature-Rich Dashboards
- **Personalized Greetings**: User-specific welcome messages via localStorage
- **Analytics and Insights**: Track progress and performance
- **Quick Actions**: Role-based shortcuts and features
- **Activity Feed**: Recent updates and notifications
- **Course Management**: Create, edit, and manage courses

### 🎯 Additional Features
- Search and filter courses
- Categories and tags
- Bookmarking and favorites
- Progress certificates
- Discussion forums (planned)
- Live sessions (planned)

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling
- **Lucide React**: Beautiful icon system
- **Motion/React**: Smooth animations

### Backend
- **Supabase**: 
  - PostgreSQL Database
  - Edge Functions (Hono web server)
  - Authentication
  - Storage
  - Row Level Security (RLS)

### Architecture
Three-tier architecture:
```
Frontend (React) → Server (Hono/Edge Functions) → Database (PostgreSQL)
```

## 📦 Project Structure

```
edubridge/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main application component
│   │   ├── components/             # Reusable components
│   │   │   ├── auth/              # Authentication components
│   │   │   ├── dashboard/         # Dashboard components
│   │   │   ├── courses/           # Course-related components
│   │   │   └── shared/            # Shared UI components
│   │   └── imports/               # Figma imports and assets
│   ├── styles/
│   │   ├── theme.css              # Design tokens
│   │   ├── fonts.css              # Font imports
│   │   └── globals.css            # Global styles
│   └── utils/
│       └── supabase/
│           └── info.tsx           # Supabase configuration
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx          # Main server file
│           └── kv_store.tsx       # Key-value store utility
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account
- (Optional) Razorpay account for payment integration

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/edubridge.git
   cd edubridge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Supabase Setup**
   
   The platform uses built-in Supabase integration via `/utils/supabase/info.tsx`. Your Supabase credentials are already configured:
   - Project URL: `https://niguvyhdgewekhmwbupg.supabase.co`
   - Keys are provided by the platform automatically

4. **Database Setup**

   Create the following tables in your Supabase database:

   **Profiles Table**
   ```sql
   CREATE TABLE profiles (
     id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
     email TEXT NOT NULL,
     name TEXT NOT NULL,
     role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'expert')),
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

   **Courses Table**
   ```sql
   CREATE TABLE courses (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     description TEXT,
     instructor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
     category TEXT,
     price DECIMAL(10, 2),
     thumbnail_url TEXT,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

   **Enrollments Table**
   ```sql
   CREATE TABLE enrollments (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
     course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
     enrolled_at TIMESTAMPTZ DEFAULT NOW(),
     progress INTEGER DEFAULT 0,
     UNIQUE(student_id, course_id)
   );
   ```

5. **Row Level Security (RLS) Policies**

   ⚠️ **Important**: Enable RLS and create appropriate policies:

   ```sql
   -- Enable RLS on profiles table
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

   -- Allow users to read all profiles
   CREATE POLICY "Profiles are viewable by everyone"
     ON profiles FOR SELECT
     USING (true);

   -- Allow users to insert their own profile
   CREATE POLICY "Users can insert their own profile"
     ON profiles FOR INSERT
     WITH CHECK (auth.uid() = id);

   -- Allow users to update their own profile
   CREATE POLICY "Users can update their own profile"
     ON profiles FOR UPDATE
     USING (auth.uid() = id)
     WITH CHECK (auth.uid() = id);

   -- Enable RLS on other tables
   ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
   ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

   -- Add appropriate policies for courses and enrollments
   CREATE POLICY "Courses are viewable by everyone"
     ON courses FOR SELECT
     USING (true);

   CREATE POLICY "Instructors can create courses"
     ON courses FOR INSERT
     WITH CHECK (auth.uid() = instructor_id);

   CREATE POLICY "Enrollments are viewable by enrolled student or instructor"
     ON enrollments FOR SELECT
     USING (
       auth.uid() = student_id OR 
       auth.uid() IN (
         SELECT instructor_id FROM courses WHERE id = course_id
       )
     );

   CREATE POLICY "Students can enroll in courses"
     ON enrollments FOR INSERT
     WITH CHECK (auth.uid() = student_id);
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Access the application**
   Open your browser to `http://localhost:5173`

## 🔧 Configuration

### Theme Customization
Edit `/src/styles/theme.css` to customize colors, typography, and spacing tokens.

### Role Colors
```css
:root {
  --color-expert: #3B82F6;    /* Blue */
  --color-teacher: #F97316;   /* Orange */
  --color-student: #10B981;   /* Green */
}
```

### Dark Mode
The platform automatically detects system preferences and persists user selection in localStorage.

## 🗄️ Database Schema

### Key-Value Store
The platform includes a pre-configured KV store for flexible data storage:
- Table: `kv_store_a77b4756`
- Functions: `get`, `set`, `del`, `mget`, `mset`, `mdel`, `getByPrefix`
- Import: `import * as kv from '/supabase/functions/server/kv_store'`

### Custom Tables
See the installation section for the recommended database schema for profiles, courses, and enrollments.

## 🔌 API Integration

### Server Routes
All server routes are prefixed with `/make-server-a77b4756`:

```typescript
// Example: Fetch courses
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a77b4756/courses`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
```

### Protected Routes
For authenticated routes, pass the user's access token:
```typescript
headers: {
  'Authorization': `Bearer ${accessToken}`
}
```

## 📱 Features in Development

- [ ] Discussion forums for courses
- [ ] Live video sessions
- [ ] Advanced analytics dashboard
- [ ] Mobile native apps (iOS/Android)
- [ ] AI-powered course recommendations
- [ ] Gamification and badges
- [ ] Certificate generation
- [ ] Email notifications

## 🐛 Known Issues

### RLS Policy Error (Current)
**Issue**: Users encounter error code "42501" during signup - "new row violates row-level security policy for table 'profiles'"

**Solution**: Ensure RLS policies are properly configured (see Database Setup section above)

**Status**: Pending database policy configuration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by Frameblox Craft-07 theme
- Payment UI inspired by Razorpay
- Course player inspired by Udemy
- Icons by [Lucide Icons](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

## 📞 Support

For support, email support@edubridge.example.com or join our Slack channel.

## 🔗 Links

- [Live Demo](https://edubridge.example.com)
- [Documentation](https://docs.edubridge.example.com)
- [API Reference](https://api.edubridge.example.com)
- [Supabase Documentation](https://supabase.com/docs)

---

**Built with ❤️ by the EduBridge Team**

*Bridging the gap between knowledge and learning*
