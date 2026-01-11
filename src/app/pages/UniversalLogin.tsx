import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function UniversalLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call and role detection
    setTimeout(() => {
      // Mock role detection from backend
      const storedRole = localStorage.getItem('userRole');
      const userName = email.split('@')[0];
      localStorage.setItem('userName', userName);

      if (storedRole === 'student') {
        navigate('/dashboard/student');
      } else if (storedRole === 'teacher') {
        navigate('/dashboard/teacher');
      } else if (storedRole === 'expert') {
        navigate('/dashboard/expert');
      } else {
        // Default fallback
        navigate('/dashboard/student');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+')]" />

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            EduBridge
          </span>
        </div>

        {/* Login Card */}
        <div className="bg-[#1E293B]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#334155]/50 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Welcome Back
            </h1>
            <p className="text-[#94A3B8]">Sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg pl-11 pr-12 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#94A3B8] transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#6366F1] hover:text-[#818CF8] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] text-white rounded-lg py-3 font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Log In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#334155]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1E293B] text-[#64748B]">or</span>
            </div>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <p className="text-[#94A3B8]">
              New to EduBridge?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[#64748B] text-sm mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
