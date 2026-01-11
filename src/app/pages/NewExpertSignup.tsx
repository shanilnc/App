import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NewExpertSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: '',
    role: '',
    organization: '',
    experience: '',
    bio: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate account creation
    setTimeout(() => {
      localStorage.setItem('userRole', 'expert');
      localStorage.setItem('userName', formData.fullName);
      navigate('/dashboard/expert');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] flex items-center justify-center p-4 py-12">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+')]" />

      <div className="w-full max-w-2xl relative">
        {/* Back Button */}
        <button
          onClick={() => navigate('/signup')}
          className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            EduBridge
          </span>
        </div>

        {/* Form Card */}
        <div className="bg-[#1E293B]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#334155]/50 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
              <span className="text-[#8B5CF6] text-sm font-medium">Expert Account</span>
            </div>
            <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join as Expert
            </h1>
            <p className="text-[#94A3B8]">Shape the future of education</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                placeholder="Dr. Sarah Johnson"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                  placeholder="sarah@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Industry/Domain */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Industry / Domain
              </label>
              <input
                id="industry"
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                required
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                placeholder="e.g., Technology, Healthcare, Finance"
              />
            </div>

            {/* Role and Organization */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Current Role
                </label>
                <input
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                  placeholder="Senior Engineer"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Organization
                </label>
                <input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
                  placeholder="Company Name"
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                required
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              >
                <option value="">Select Experience</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="15+">15+ years</option>
              </select>
            </div>

            {/* Short Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Short Bio
              </label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                required
                rows={4}
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your expertise and what you'd like to share with teachers..."
              />
              <p className="text-xs text-[#64748B] mt-1">150-300 characters recommended</p>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Create Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 pr-12 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
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
              <p className="text-xs text-[#64748B] mt-1">Must be at least 8 characters</p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white rounded-lg py-3.5 font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'Creating Account...' : 'Create Expert Account'}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-[#64748B] text-sm mt-6">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
