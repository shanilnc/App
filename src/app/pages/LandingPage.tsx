import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, Play, Check, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ThemeToggle } from '../components/ThemeToggle';
import { VideoModal } from '../components/VideoModal';

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4F1] dark:bg-[#0F172A] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.04] dark:opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiM0Nzc3OUIiLz48L2c+PC9zdmc+')]" />
      
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F4F1]/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-[#E5E1DC] dark:border-[#1F2937] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>EduBridge</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF5252] hover:to-[#FF7A3D] text-white rounded-full px-6 h-10 shadow-lg hover:shadow-xl transition-all font-medium"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Centered */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFE8D6] to-[#FFD4BF] dark:from-[#1F2937] dark:to-[#374151] text-sm text-[#8B4513] dark:text-[#60A5FA] mb-8 shadow-sm transition-colors duration-300">
            <Sparkles className="w-4 h-4" />
            <span>Bridging Education with Industry</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 text-[#1F2933] dark:text-[#E5E7EB] leading-[1.05] tracking-tight font-bold transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            From Rote Learning to{' '}
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFA07A] dark:from-[#60A5FA] dark:via-[#3B82F6] dark:to-[#2563EB] bg-clip-text text-transparent">
              Real Skills
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#4B5563] dark:text-[#9CA3AF] mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Teachers learn from industry experts. Students learn from upskilled teachers. Everyone wins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] hover:from-[#FF5252] hover:to-[#FF7A3D] dark:hover:from-[#3B82F6] dark:hover:to-[#2563EB] text-white rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="ghost"
              className="group text-[#1F2933] dark:text-[#E5E7EB] hover:bg-[#FFE8D6] dark:hover:bg-[#1F2937] rounded-full px-8 h-12 text-base border-2 border-[#FFD4BF] dark:border-[#374151] hover:border-[#FF8E53] dark:hover:border-[#60A5FA] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Watch platform demo video"
            >
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Visual Demo Area */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB8B8]/20 via-[#FFD4BF]/20 to-[#FFA07A]/20 dark:from-[#60A5FA]/10 dark:via-[#3B82F6]/10 dark:to-[#2563EB]/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl border-2 border-[#FFE8D6] dark:border-[#374151] p-8 shadow-2xl transition-colors duration-300">
              {/* Role Selection Interactive Demo */}
              <div className="text-left mb-6">
                <p className="text-sm text-[#718096] dark:text-[#9CA3AF] mb-3 transition-colors duration-300">Choose your path</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedRole('teacher')}
                    className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedRole === 'teacher'
                        ? 'border-[#FF6B6B] dark:border-[#60A5FA] bg-gradient-to-br from-[#FFF0F0] to-[#FFE8E8] dark:from-[#1E3A5F] dark:to-[#1E3A5F]'
                        : 'border-[#FFE8D6] dark:border-[#374151] hover:border-[#FFD4BF] dark:hover:border-[#4B5563] bg-white dark:bg-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedRole === 'teacher' ? 'bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6]' : 'bg-[#FFE8D6] dark:bg-[#374151]'
                      }`}>
                        <GraduationCap className={`w-5 h-5 ${
                          selectedRole === 'teacher' ? 'text-white' : 'text-[#8B4513] dark:text-[#9CA3AF]'
                        }`} />
                      </div>
                      {selectedRole === 'teacher' && (
                        <Check className="w-5 h-5 text-[#FF6B6B] dark:text-[#60A5FA]" />
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-[#1F2933] dark:text-[#E5E7EB] mb-1 transition-colors duration-300">Teacher</h3>
                    <p className="text-sm text-[#718096] dark:text-[#9CA3AF] transition-colors duration-300">Learn from experts, teach with confidence</p>
                  </button>

                  <button
                    onClick={() => setSelectedRole('student')}
                    className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedRole === 'student'
                        ? 'border-[#48BB78] dark:border-[#10B981] bg-gradient-to-br from-[#F0FFF4] to-[#E6FFEF] dark:from-[#1E3A2F] dark:to-[#1E3A2F]'
                        : 'border-[#FFE8D6] dark:border-[#374151] hover:border-[#FFD4BF] dark:hover:border-[#4B5563] bg-white dark:bg-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedRole === 'student' ? 'bg-gradient-to-br from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669]' : 'bg-[#FFE8D6] dark:bg-[#374151]'
                      }`}>
                        <GraduationCap className={`w-5 h-5 ${
                          selectedRole === 'student' ? 'text-white' : 'text-[#8B4513] dark:text-[#9CA3AF]'
                        }`} />
                      </div>
                      {selectedRole === 'student' && (
                        <Check className="w-5 h-5 text-[#48BB78] dark:text-[#10B981]" />
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-[#1F2933] dark:text-[#E5E7EB] mb-1 transition-colors duration-300">Student</h3>
                    <p className="text-sm text-[#718096] dark:text-[#9CA3AF] transition-colors duration-300">Learn skills, rate teachers, get industry-ready</p>
                  </button>
                </div>
              </div>

              {selectedRole && (
                <Button
                  onClick={() => navigate('/login')}
                  className={`w-full rounded-xl h-12 text-white shadow-lg transition-all duration-300 ${
                    selectedRole === 'teacher'
                      ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] hover:from-[#FF5252] hover:to-[#FF7A3D] dark:hover:from-[#3B82F6] dark:hover:to-[#2563EB]'
                      : 'bg-gradient-to-r from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669] hover:from-[#3EA76A] hover:to-[#2F855A] dark:hover:from-[#059669] dark:hover:to-[#047857]'
                  }`}
                >
                  Continue as {selectedRole === 'teacher' ? 'Teacher' : 'Student'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Minimal */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-[#1F2937] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#1F2933] dark:text-[#E5E7EB] tracking-tight font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>How it works</h2>
            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Three simple steps to transform education</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white flex items-center justify-center text-lg font-medium shadow-lg transition-all duration-300">
                1
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Industry experts teach teachers</h3>
                <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
                  Professionals from leading companies conduct live masterclasses, sharing real-world knowledge and cutting-edge industry practices with educators.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] dark:from-[#A78BFA] dark:to-[#8B5CF6] text-white flex items-center justify-center text-lg font-medium shadow-lg transition-all duration-300">
                2
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Teachers conduct skill workshops</h3>
                <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
                  Upskilled teachers bring industry knowledge to students through hands-on, practical workshops focused on real-world applications.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669] text-white flex items-center justify-center text-lg font-medium shadow-lg transition-all duration-300">
                3
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Students rate and learn</h3>
                <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
                  Students gain industry-ready skills while providing transparent feedback, ensuring continuous improvement in teaching quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Minimal */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F6F4F1] to-[#E5E1DC]/30 dark:from-[#0F172A] dark:to-[#1F2937]/30 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#1F2933] dark:text-[#E5E7EB] tracking-tight font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Everything you need</h2>
            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Comprehensive platform for modern education</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] flex items-center justify-center shadow-md transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Expert Masterclasses</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Live sessions with industry professionals</p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#4299E1] to-[#3182CE] dark:from-[#3B82F6] dark:to-[#2563EB] flex items-center justify-center shadow-md transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Skill Workshops</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Hands-on training for real-world skills</p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669] flex items-center justify-center shadow-md transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quality Ratings</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Transparent feedback system</p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] dark:from-[#A78BFA] dark:to-[#8B5CF6] flex items-center justify-center shadow-md transition-all duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Certifications</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Industry-recognized credentials</p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#ED8936] to-[#DD6B20] dark:from-[#F59E0B] dark:to-[#D97706] flex items-center justify-center shadow-md transition-all duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Progress Tracking</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Monitor learning journey</p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E5E1DC] dark:border-[#374151] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#38B2AC] to-[#319795] dark:from-[#14B8A6] dark:to-[#0D9488] flex items-center justify-center shadow-md transition-all duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[#1F2933] dark:text-[#E5E7EB] font-semibold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Community</h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Connect with peers and mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-[#1F2937] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl mb-2 text-[#FF6B6B] dark:text-[#60A5FA] font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>500+</div>
              <div className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Industry Experts</div>
            </div>
            <div>
              <div className="text-5xl mb-2 text-[#9F7AEA] dark:text-[#A78BFA] font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>10K+</div>
              <div className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Teachers Upskilled</div>
            </div>
            <div>
              <div className="text-5xl mb-2 text-[#48BB78] dark:text-[#10B981] font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>50K+</div>
              <div className="text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">Students Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F6F4F1] to-white dark:from-[#0F172A] dark:to-[#1F2937] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#1F2933] dark:text-[#E5E7EB] tracking-tight font-bold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Loved by educators</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-6 leading-relaxed transition-colors duration-300">
                "EduBridge transformed how I teach. The industry knowledge I gained is invaluable, and my students are finally learning skills that matter."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] shadow-md transition-all duration-300"></div>
                <div>
                  <div className="font-medium text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300">Sarah Mitchell</div>
                  <div className="text-sm text-[#718096] dark:text-[#9CA3AF] transition-colors duration-300">High School Teacher</div>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-[#E5E1DC] dark:border-[#374151] rounded-2xl bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-6 leading-relaxed transition-colors duration-300">
                "Finally, education that prepares students for real careers. The workshops are practical and the feedback system ensures quality."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#48BB78] to-[#38A169] dark:from-[#10B981] dark:to-[#059669] shadow-md transition-all duration-300"></div>
                <div>
                  <div className="font-medium text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300">Rajesh Kumar</div>
                  <div className="text-sm text-[#718096] dark:text-[#9CA3AF] transition-colors duration-300">College Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFA07A] dark:from-[#1E40AF] dark:via-[#3B82F6] dark:to-[#60A5FA] transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-6 text-white tracking-tight leading-tight font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to bridge the gap?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands transforming traditional education into industry-ready learning
          </p>
          <Button
            onClick={() => navigate('/login')}
            className="bg-white hover:bg-gray-50 dark:hover:bg-gray-100 text-[#FF6B6B] dark:text-[#3B82F6] rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all font-medium"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E5E1DC] dark:border-[#1F2937] py-12 px-6 lg:px-8 bg-[#F6F4F1] dark:bg-[#0F172A] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Developer Quick Access - Supabase Auth */}
          <div className="mb-12 p-6 bg-gray-900 rounded-2xl border-2 border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">🔵</span>
              </div>
              <h3 className="text-white font-semibold">Developer Access: Supabase Authentication</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Access the complete Supabase-ready authentication flow with developer annotations and data mapping.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Button
                onClick={() => navigate('/supabase-login')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm h-10 rounded-lg"
              >
                📝 Login
              </Button>
              <Button
                onClick={() => navigate('/supabase-signup-questionnaire')}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm h-10 rounded-lg"
              >
                🎯 Signup Flow
              </Button>
              <Button
                onClick={() => navigate('/supabase-signup/student')}
                className="bg-green-600 hover:bg-green-700 text-white text-sm h-10 rounded-lg"
              >
                👨‍🎓 Student Signup
              </Button>
              <Button
                onClick={() => window.open('/SUPABASE_AUTH_GUIDE.md', '_blank')}
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm h-10 rounded-lg"
              >
                📚 Documentation
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] dark:from-[#60A5FA] dark:to-[#3B82F6] rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>EduBridge</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
              <a href="#about" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">About</a>
              <a href="#features" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">Features</a>
              <a href="#pricing" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">Contact</a>
              <a href="#privacy" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-[#FF6B6B] dark:hover:text-[#60A5FA] transition-colors">Terms</a>
            </div>

            <div className="text-sm text-[#718096] dark:text-[#9CA3AF] transition-colors duration-300">
              © 2026 EduBridge
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
      />
    </div>
  );
}