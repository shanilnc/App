import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

// Pages
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import UniversalLogin from './pages/UniversalLogin';
import SignupQuestionnaire from './pages/SignupQuestionnaire';
import NewStudentSignup from './pages/NewStudentSignup';
import NewTeacherSignup from './pages/NewTeacherSignup';
import NewExpertSignup from './pages/NewExpertSignup';
import ExpertSignup from './pages/ExpertSignup';
import TeacherSignup from './pages/TeacherSignup';
import StudentSignup from './pages/StudentSignup';
import ExpertDashboard from './pages/ExpertDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* New Authentication Flow */}
          <Route path="/login" element={<UniversalLogin />} />
          <Route path="/signup" element={<SignupQuestionnaire />} />
          <Route path="/signup/student" element={<NewStudentSignup />} />
          <Route path="/signup/teacher" element={<NewTeacherSignup />} />
          <Route path="/signup/expert" element={<NewExpertSignup />} />
          
          {/* Legacy Routes (for backward compatibility) */}
          <Route path="/roles" element={<RoleSelection />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/signup-old/expert" element={<ExpertSignup />} />
          <Route path="/signup-old/teacher" element={<TeacherSignup />} />
          <Route path="/signup-old/student" element={<StudentSignup />} />
          
          {/* Dashboard Pages */}
          <Route path="/dashboard/expert" element={<ExpertDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}