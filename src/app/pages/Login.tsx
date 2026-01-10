import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, GraduationCap, BookOpen, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

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
    // Navigate to appropriate dashboard based on selected role
    navigate(`/dashboard/${selectedRole}`);
  };

  const getDecoColors = () => {
    switch (selectedRole) {
      case 'expert':
        return { color1: 'bg-purple-200', color2: 'bg-yellow-200' };
      case 'teacher':
        return { color1: 'bg-blue-200', color2: 'bg-indigo-200' };
      case 'student':
        return { color1: 'bg-emerald-200', color2: 'bg-orange-200' };
    }
  };

  const decoColors = getDecoColors();

  return (
    <div className="min-h-screen bg-[#F5EFE0] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className={`absolute top-10 right-10 w-32 h-32 ${decoColors.color1} rounded-full opacity-40 blur-2xl transition-colors duration-500`}></div>
      <div className={`absolute bottom-20 left-10 w-40 h-40 ${decoColors.color2} rounded-full opacity-40 blur-2xl transition-colors duration-500`}></div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="text-gray-700 hover:bg-black/5 mb-6 rounded-full"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="bg-white shadow-2xl border-0 rounded-[2.5rem] overflow-hidden">
          <div className="p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3 text-black">Welcome Back</h1>
              <p className="text-gray-600 text-lg">Sign in to continue</p>
            </div>

            {/* Role Selection Tabs */}
            <div className="flex gap-2 mb-8 bg-[#F8F8F8] p-2 rounded-2xl">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex-1 flex flex-col items-center gap-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-transparent text-gray-600 hover:bg-gray-200'
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
                <Label htmlFor="email" className="text-gray-700 text-sm mb-2 block">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello.nixtio@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#F8F8F8] border-0 rounded-2xl h-14 px-5 text-black placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 text-sm mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-14 px-5 pr-12 text-black placeholder:text-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-14 text-lg mt-8"
              >
                Log In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center text-sm">
              <span className="text-gray-600">
                New to EduBridge?{' '}
                <Link to={`/signup/${selectedRole}`} className="text-black underline hover:text-gray-700">
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
