import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

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
    navigate('/dashboard/expert');
  };

  return (
    <div className="min-h-screen bg-[#F5EFE0] py-12 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-40 blur-2xl"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-gray-700 hover:bg-black/5 mb-6 rounded-full"
          onClick={() => navigate('/login')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>

        <Card className="bg-white shadow-2xl border-0 rounded-[2.5rem] overflow-hidden">
          <div className="p-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3 text-black">Join as Expert</h1>
              <p className="text-gray-600 text-lg">
                Shape the future of education
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 text-sm mb-2 block">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 text-sm mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-700 text-sm mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-gray-700 text-sm mb-2 block">Industry / Domain *</Label>
                  <Input
                    id="industry"
                    name="industry"
                    type="text"
                    placeholder="e.g., Software Development"
                    value={formData.industry}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentRole" className="text-gray-700 text-sm mb-2 block">Current Role / Organization *</Label>
                  <Input
                    id="currentRole"
                    name="currentRole"
                    type="text"
                    placeholder="e.g., Senior Engineer at Google"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="yearsExperience" className="text-gray-700 text-sm mb-2 block">Years of Experience *</Label>
                  <Input
                    id="yearsExperience"
                    name="yearsExperience"
                    type="number"
                    min="0"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio" className="text-gray-700 text-sm mb-2 block">Short Bio *</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about your expertise and what you'd like to teach..."
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#F8F8F8] border-0 rounded-2xl px-5 py-3 text-black placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 text-sm mb-2 block">Create Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 pr-12 text-black"
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
                Create Expert Account
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-black underline hover:text-gray-700">
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