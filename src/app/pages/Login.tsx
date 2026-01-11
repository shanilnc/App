import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, GraduationCap, BookOpen, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ThemeToggle } from '../components/ThemeToggle';

type Role = 'expert' | 'teacher' | 'student';

export default function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    {
      id: 'expert' as Role,
      icon: Brain,
      label: 'Expert',
      color: 'purple',
    },
    {
      id: 'teacher' as Role,
      icon: GraduationCap,
      label: 'Teacher',
      color: 'blue',
    },
    {
      id: 'student' as Role,
      icon: BookOpen,
      label: 'Student',
      color: 'emerald',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, extract name from email (before @)
    // In production, this would come from authentication response
    const userName = email.split('@')[0].replace(/[._-]/g, ' ');
    const capitalizedName = userName.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Save user's name to localStorage
    localStorage.setItem('userName', capitalizedName || 'User');
    
    // Navigate to appropriate dashboard based on selected role
    navigate(`/dashboard/${selectedRole}`);
  };

  const getDecoColors = () => {
    switch (selectedRole) {
      case 'expert':
        return { color1: 'bg-[#9F7AEA]/30 dark:bg-[#A78BFA]/20', color2: 'bg-[#FFA07A]/30 dark:bg-[#F59E0B]/20' };
      case 'teacher':
        return { color1: 'bg-[#FF6B6B]/30 dark:bg-[#60A5FA]/20', color2: 'bg-[#FF8E53]/30 dark:bg-[#3B82F6]/20' };
      case 'student':
        return { color1: 'bg-[#48BB78]/30 dark:bg-[#10B981]/20', color2: 'bg-[#ED8936]/30 dark:bg-[#F59E0B]/20' };
    }
  };

  const decoColors = getDecoColors();

  return (
    <div className="min-h-screen bg-[#F6F4F1] dark:bg-[#0F172A] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.04] dark:opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiM0Nzc3OUIiLz48L2c+PC9zdmc+')]" />
      
      {/* Decorative circles */}
      <div className={`absolute top-10 right-10 w-32 h-32 ${decoColors.color1} rounded-full blur-3xl transition-colors duration-500`}></div>
      <div className={`absolute bottom-20 left-10 w-40 h-40 ${decoColors.color2} rounded-full blur-3xl transition-colors duration-500`}></div>
      
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="text-[#4B5563] dark:text-[#9CA3AF] hover:bg-[#FFE8D6] dark:hover:bg-[#1F2937] mb-6 rounded-full transition-colors duration-300"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="bg-white dark:bg-[#1F2937] shadow-2xl border-2 border-[#E5E1DC] dark:border-[#374151] rounded-3xl overflow-hidden transition-colors duration-300">
          <div className="p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>Welcome Back</h1>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] text-lg transition-colors duration-300">Sign in to continue</p>
            </div>

            {/* Role Selection Tabs */}
            <div className="flex gap-2 mb-8 bg-[#F6F4F1] dark:bg-[#0F172A] p-2 rounded-2xl border border-[#E5E1DC] dark:border-[#374151] transition-colors duration-300">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                const getGradient = () => {
                  switch (role.id) {
                    case 'expert':
                      return 'bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] dark:from-[#A78BFA] dark:to-[#8B5CF6]';
                    case 'teacher':
                      return 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6]';
                    case 'student':
                      return 'bg-gradient-to-r from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669]';
                  }
                };
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex-1 flex flex-col items-center gap-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? `${getGradient()} text-white shadow-lg`
                        : 'bg-transparent text-[#718096] dark:text-[#9CA3AF] hover:bg-[#E5E1DC] dark:hover:bg-[#374151]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{role.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello.nixtio@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-14 px-5 text-[#1F2933] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:border-[#FF8E53] dark:focus:border-[#60A5FA] transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-14 px-5 pr-12 text-[#1F2933] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:border-[#FF8E53] dark:focus:border-[#60A5FA] transition-colors duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#4B5563] dark:hover:text-[#9CA3AF] transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <Link to="/forgot-password" className="text-sm text-[#718096] dark:text-[#9CA3AF] hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors duration-300">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] hover:from-[#FF5252] hover:to-[#FF7A3D] dark:hover:from-[#3B82F6] dark:hover:to-[#2563EB] text-white rounded-full h-14 text-lg mt-8 shadow-lg transition-all duration-300"
              >
                Log In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center text-sm">
              <span className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
                New to EduBridge?{' '}
                <Link to={`/signup/${selectedRole}`} className="text-[#FF6B6B] dark:text-[#60A5FA] font-medium hover:text-[#FF8E53] dark:hover:text-[#3B82F6] transition-colors duration-300">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}