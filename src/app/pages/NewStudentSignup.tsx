import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap, ArrowLeft, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const SKILL_OPTIONS = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'UI/UX Design',
  'AI/ML',
  'Cybersecurity',
  'Cloud Computing',
  'DevOps',
];

export default function NewStudentSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    course: '',
    year: '',
    password: '',
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate account creation
    setTimeout(() => {
      localStorage.setItem('userRole', 'student');
      localStorage.setItem('userName', formData.fullName);
      localStorage.setItem('userSkills', JSON.stringify(selectedSkills));
      navigate('/dashboard/student');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] flex items-center justify-center p-4">
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
          <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#10B981] text-sm font-medium">Student Account</span>
            </div>
            <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join as Student
            </h1>
            <p className="text-[#94A3B8]">Start your journey to industry-ready skills</p>
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
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                placeholder="John Doe"
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
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                  placeholder="john@example.com"
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
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Institution */}
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                Institution
              </label>
              <input
                id="institution"
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                required
                className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                placeholder="University/College Name"
              />
            </div>

            {/* Course and Year */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Course
                </label>
                <input
                  id="course"
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                  placeholder="Computer Science"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                  Year
                </label>
                <select
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  required
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
            </div>

            {/* Skill Interests */}
            <div>
              <label className="block text-sm font-medium text-[#E2E8F0] mb-3">
                Skill Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-[#10B981] text-white border-2 border-[#10B981]'
                          : 'bg-[#0F172A]/50 text-[#94A3B8] border-2 border-[#334155] hover:border-[#475569]'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 inline mr-1" />}
                      {skill}
                    </button>
                  );
                })}
              </div>
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
                  className="w-full bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 pr-12 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
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
              disabled={loading || selectedSkills.length === 0}
              className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-lg py-3.5 font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'Creating Account...' : 'Create Student Account'}
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
