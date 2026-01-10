import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import ExpertSignup from './pages/ExpertSignup';
import TeacherSignup from './pages/TeacherSignup';
import StudentSignup from './pages/StudentSignup';
import ExpertDashboard from './pages/ExpertDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<RoleSelection />} />
        
        {/* Unified Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/:role" element={<Login />} />
        
        {/* Signup Pages */}
        <Route path="/signup/expert" element={<ExpertSignup />} />
        <Route path="/signup/teacher" element={<TeacherSignup />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        
        {/* Dashboard Pages */}
        <Route path="/dashboard/expert" element={<ExpertDashboard />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}