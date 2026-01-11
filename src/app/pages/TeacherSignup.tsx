import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ThemeToggle } from '../components/ThemeToggle';

export default function TeacherSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    subjects: '',
    yearsExperience: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user's name to localStorage
    localStorage.setItem('userName', formData.fullName);
    navigate('/dashboard/teacher');
  };

  return (
    <div className="min-h-screen bg-[#F6F4F1] dark:bg-[#0F172A] py-12 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.04] dark:opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiM0Nzc3OUIiLz48L2c+PC9zdmc+')]" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl transition-colors duration-500"></div>
      
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-[#4B5563] dark:text-[#9CA3AF] hover:bg-[#E5E1DC] dark:hover:bg-[#1F2937] mb-6 rounded-full transition-colors duration-300"
          onClick={() => navigate('/login')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>

        <Card className="bg-white dark:bg-[#111827] shadow-2xl border-0 rounded-[2.5rem] overflow-hidden">
          <div className="p-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3 text-black dark:text-white">Join as Teacher</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Learn from experts and improve your teaching
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="institution" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Institution Name *</Label>
                  <Input
                    id="institution"
                    name="institution"
                    type="text"
                    placeholder="e.g., ABC College"
                    value={formData.institution}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="subjects" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Subjects Taught *</Label>
                  <Input
                    id="subjects"
                    name="subjects"
                    type="text"
                    placeholder="e.g., Mathematics, Physics"
                    value={formData.subjects}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="yearsExperience" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Years of Experience *</Label>
                  <Input
                    id="yearsExperience"
                    name="yearsExperience"
                    type="number"
                    min="0"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 text-black dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 text-sm mb-2 block">Create Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] dark:bg-[#1F2937] border-0 rounded-2xl h-12 px-5 pr-12 text-black dark:text-white"
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
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-14 text-lg mt-8"
              >
                Create Teacher Account
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-black dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300">
                  Login here
                </Link>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}