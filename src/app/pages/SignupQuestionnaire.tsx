import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

type UserIntent = 'learn' | 'teach' | 'expert' | null;

export default function SignupQuestionnaire() {
  const navigate = useNavigate();
  const [selectedIntent, setSelectedIntent] = useState<UserIntent>(null);

  const handleContinue = () => {
    if (!selectedIntent) return;

    // Store the detected role
    if (selectedIntent === 'learn') {
      localStorage.setItem('detectedRole', 'student');
      navigate('/signup/student');
    } else if (selectedIntent === 'teach') {
      localStorage.setItem('detectedRole', 'teacher');
      navigate('/signup/teacher');
    } else if (selectedIntent === 'expert') {
      localStorage.setItem('detectedRole', 'expert');
      navigate('/signup/expert');
    }
  };

  const options = [
    {
      id: 'learn' as UserIntent,
      icon: BookOpen,
      title: 'I want to learn skills for my career',
      description: 'Build industry-ready skills through hands-on workshops',
      gradient: 'from-[#10B981] to-[#059669]',
      borderColor: 'border-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
    },
    {
      id: 'teach' as UserIntent,
      icon: Users,
      title: 'I want to teach students',
      description: 'Learn from experts and improve your teaching methods',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      borderColor: 'border-[#14B8A6]',
      bgColor: 'bg-[#14B8A6]/10',
    },
    {
      id: 'expert' as UserIntent,
      icon: Briefcase,
      title: 'I want to share industry expertise',
      description: 'Mentor teachers and shape the future of education',
      gradient: 'from-[#8B5CF6] to-[#7C3AED]',
      borderColor: 'border-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+')]" />

      <div className="w-full max-w-3xl relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            EduBridge
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-[#1E293B]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#334155]/50 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tell us about yourself
            </h1>
            <p className="text-[#94A3B8] text-lg">
              This helps us personalize your learning experience
            </p>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-xl text-[#E2E8F0] font-medium mb-6">
              What best describes why you're joining EduBridge?
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {options.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedIntent === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedIntent(option.id)}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                      isSelected
                        ? `${option.borderColor} ${option.bgColor} shadow-lg`
                        : 'border-[#334155] bg-[#0F172A]/30 hover:border-[#475569] hover:bg-[#0F172A]/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? `bg-gradient-to-br ${option.gradient}`
                            : 'bg-[#334155]'
                        }`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-medium text-white mb-1">
                          {option.title}
                        </h3>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                      {isSelected && (
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${option.gradient} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!selectedIntent}
            className="w-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] text-white rounded-lg py-3.5 font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <p className="text-[#94A3B8]">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
