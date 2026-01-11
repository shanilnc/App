import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, GraduationCap, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';

type LoginState = 'idle' | 'loading' | 'success' | 'error';

export default function SupabaseLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginState('loading');
    setErrorMessage('');

    try {
      // SUPABASE INTEGRATION POINT
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email: email,
      //   password: password,
      // });

      // if (error) throw error;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock success - In real implementation, get role from profiles table
      // const { data: profile } = await supabase
      //   .from('profiles')
      //   .select('role, full_name')
      //   .eq('user_id', data.user.id)
      //   .single();

      const mockRole = localStorage.getItem('userRole') || 'student';
      const userName = email.split('@')[0];
      localStorage.setItem('userName', userName);

      setLoginState('success');

      // Redirect based on role
      setTimeout(() => {
        if (mockRole === 'student') {
          navigate('/dashboard/student');
        } else if (mockRole === 'teacher') {
          navigate('/dashboard/teacher');
        } else if (mockRole === 'expert') {
          navigate('/dashboard/expert');
        }
      }, 500);

    } catch (error: any) {
      setLoginState('error');
      // Handle Supabase errors
      if (error.message === 'Invalid login credentials') {
        setErrorMessage('Invalid email or password. Please try again.');
      } else if (error.message === 'Email not confirmed') {
        setErrorMessage('Please verify your email before logging in.');
      } else {
        setErrorMessage(error.message || 'An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F3] via-[#FFE8D6] to-[#FFD4B8] flex items-center justify-center p-4">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNGRjZCNkIiLz48L2c+PC9zdmc+')]" />

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>
            EduBridge
          </span>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-[#FFE8D6] p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Welcome Back
            </h1>
            <p className="text-[#718096]">Sign in to continue your learning journey</p>
          </div>

          {/* Supabase Integration Note (Developer Annotation) */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-xs font-mono text-blue-800 mb-2">
              <strong>🔵 Supabase Integration:</strong>
            </p>
            <code className="text-xs text-blue-700 block">
              supabase.auth.signInWithPassword({'{'}email, password{'}'})
            </code>
            <p className="text-xs text-blue-600 mt-2">
              → Fetches user role from <code>profiles</code> table
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full bg-[#FFF8F3] border-2 ${
                    loginState === 'error' ? 'border-red-400 focus:ring-red-400' : 'border-[#FFE8D6] focus:ring-[#FF6B6B]'
                  } rounded-xl pl-11 pr-4 py-3 text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2D3748] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full bg-[#FFF8F3] border-2 ${
                    loginState === 'error' ? 'border-red-400 focus:ring-red-400' : 'border-[#FFE8D6] focus:ring-[#FF6B6B]'
                  } rounded-xl pl-11 pr-12 py-3 text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096] hover:text-[#2D3748] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {loginState === 'error' && errorMessage && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border-2 border-red-200 rounded-xl animate-in slide-in-from-top duration-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#FF6B6B] hover:text-[#E55353] font-medium transition-colors"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loginState === 'loading' || loginState === 'success'}
              className="w-full h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] hover:from-[#E55353] hover:to-[#FF8C6B] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginState === 'loading' ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </div>
              ) : loginState === 'success' ? (
                'Success! Redirecting...'
              ) : (
                'Log In'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t-2 border-[#FFE8D6]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-[#718096]">Don't have an account?</span>
            </div>
          </div>

          {/* Signup Link */}
          <Button
            variant="outline"
            onClick={() => navigate('/signup-questionnaire')}
            className="w-full h-12 border-2 border-[#FFE8D6] bg-[#FFF8F3] text-[#FF6B6B] hover:bg-[#FFE8D6] hover:border-[#FF6B6B] rounded-xl font-semibold transition-all"
          >
            Create an Account
          </Button>
        </div>

        {/* Developer Notes Panel */}
        <div className="mt-6 p-4 bg-gray-900 rounded-xl border-2 border-gray-700">
          <p className="text-xs font-semibold text-gray-300 mb-3">📋 Developer Notes:</p>
          <ul className="text-xs text-gray-400 space-y-2">
            <li>• <strong className="text-gray-300">Login State:</strong> {loginState}</li>
            <li>• <strong className="text-gray-300">Success:</strong> Redirect to role-based dashboard</li>
            <li>• <strong className="text-gray-300">Error Handling:</strong> Inline validation with error messages</li>
            <li>• <strong className="text-gray-300">Role Detection:</strong> Fetched from <code className="text-blue-400">profiles.role</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
