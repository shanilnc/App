import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';

export default function StudentSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    courseYear: '',
    password: '',
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillOptions = [
    'Web Development', 'Mobile Development', 'Data Science', 'UI/UX Design',
    'Digital Marketing', 'Cloud Computing', 'AI/ML', 'Cybersecurity',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user's name to localStorage
    localStorage.setItem('userName', formData.fullName);
    navigate('/dashboard/student');
  };

  return (
    <div className="min-h-screen bg-[#F5EFE0] py-12 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-200 rounded-full opacity-40 blur-2xl"></div>
      
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
              <h1 className="text-4xl mb-3 text-black">Join as Student</h1>
              <p className="text-gray-600 text-lg">
                Start your journey to industry-ready skills
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
                  <Label htmlFor="institution" className="text-gray-700 text-sm mb-2 block">Institution *</Label>
                  <Input
                    id="institution"
                    name="institution"
                    type="text"
                    placeholder="e.g., XYZ University"
                    value={formData.institution}
                    onChange={handleChange}
                    className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="courseYear" className="text-gray-700 text-sm mb-2 block">Course / Year *</Label>
                <Input
                  id="courseYear"
                  name="courseYear"
                  type="text"
                  placeholder="e.g., Computer Science - Year 2"
                  value={formData.courseYear}
                  onChange={handleChange}
                  className="bg-[#F8F8F8] border-0 rounded-2xl h-12 px-5 text-black placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label className="text-gray-700 text-sm mb-2 block">Skill Interests *</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className={`cursor-pointer px-4 py-2 rounded-full ${
                        selectedSkills.includes(skill)
                          ? 'bg-black hover:bg-gray-800 text-white'
                          : 'bg-[#F8F8F8] hover:bg-gray-200 text-gray-700 border-gray-300'
                      }`}
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
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
                Create Student Account
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