import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ThemeToggle } from '../components/ThemeToggle';

export default function ExpertSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: '',
    currentRole: '',
    yearsExperience: '',
    bio: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user's name to localStorage
    localStorage.setItem('userName', formData.fullName);
    navigate('/dashboard/expert');
  };

  return (
    <div className="min-h-screen bg-[#F6F4F1] dark:bg-[#0F172A] py-12 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.04] dark:opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiM0Nzc3OUIiLz48L2c+PC9zdmc+')]" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-300/30 dark:bg-amber-500/20 rounded-full blur-3xl transition-colors duration-500"></div>
      
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

        <Card className="bg-white dark:bg-[#1F2937] shadow-2xl border-2 border-[#E5E1DC] dark:border-[#374151] rounded-[2.5rem] overflow-hidden transition-colors duration-300">
          <div className="p-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300">Join as Expert</h1>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] text-lg transition-colors duration-300">
                Shape the future of education
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Industry / Domain *</Label>
                  <Input
                    id="industry"
                    name="industry"
                    type="text"
                    placeholder="e.g., Software Development"
                    value={formData.industry}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentRole" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Current Role / Organization *</Label>
                  <Input
                    id="currentRole"
                    name="currentRole"
                    type="text"
                    placeholder="e.g., Senior Engineer at Google"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="yearsExperience" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Years of Experience *</Label>
                  <Input
                    id="yearsExperience"
                    name="yearsExperience"
                    type="number"
                    min="0"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Short Bio *</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about your expertise and what you'd like to teach..."
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl px-5 py-3 text-[#1F2933] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-[#4B5563] dark:text-[#9CA3AF] text-sm mb-2 block transition-colors duration-300">Create Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-[#F6F4F1] dark:bg-[#0F172A] border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl h-12 px-5 pr-12 text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
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
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] dark:from-[#A78BFA] dark:to-[#8B5CF6] hover:from-[#805AD5] hover:to-[#6B46C1] dark:hover:from-[#8B5CF6] dark:hover:to-[#7C3AED] text-white rounded-full h-14 text-lg mt-8 shadow-lg transition-all duration-300"
              >
                Create Expert Account
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
                Already have an account?{' '}
                <Link to="/login" className="text-[#9F7AEA] dark:text-[#A78BFA] font-medium hover:text-[#805AD5] dark:hover:text-[#8B5CF6] transition-colors duration-300">
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