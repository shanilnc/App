import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

type UserIntent = 'student' | 'teacher' | 'expert' | null;

export default function SupabaseSignupQuestionnaire() {
  const navigate = useNavigate();
  const [selectedIntent, setSelectedIntent] = useState<UserIntent>(null);

  const handleContinue = () => {
    if (!selectedIntent) return;

    // Store the detected role in localStorage for the next step
    localStorage.setItem('pendingUserRole', selectedIntent);
    
    // Navigate to role-specific signup form
    navigate(`/supabase-signup/${selectedIntent}`);
  };

  const options = [
    {
      id: 'student' as UserIntent,
      icon: BookOpen,
      title: 'I want to learn new skills',
      description: 'Access industry workshops and build career-ready skills',
      gradient: 'from-[#48BB78] to-[#38A169]',
      borderColor: 'border-[#48BB78]',
      bgColor: 'bg-[#48BB78]/10',
      colorClass: 'text-[#48BB78]',
    },
    {
      id: 'teacher' as UserIntent,
      icon: Users,
      title: 'I want to improve my teaching',
      description: 'Learn from industry experts and enhance your curriculum',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      borderColor: 'border-[#14B8A6]',
      bgColor: 'bg-[#14B8A6]/10',
      colorClass: 'text-[#14B8A6]',
    },
    {
      id: 'expert' as UserIntent,
      icon: Briefcase,
      title: 'I want to share my expertise',
      description: 'Mentor teachers and shape the future of education',
      gradient: 'from-[#9F7AEA] to-[#805AD5]',
      borderColor: 'border-[#9F7AEA]',
      bgColor: 'bg-[#9F7AEA]/10',
      colorClass: 'text-[#9F7AEA]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F3] via-[#FFE8D6] to-[#FFD4B8] flex items-center justify-center p-4">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNGRjZCNkIiLz48L2c+PC9zdmc+')]" />

      <div className="w-full max-w-3xl relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>
            EduBridge
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-[#FFE8D6] p-8 md:p-10">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
              <div className="w-16 h-1 bg-[#FFE8D6]" />
              <div className="w-8 h-8 rounded-full bg-[#FFE8D6] flex items-center justify-center text-[#A0AEC0] text-sm font-bold">
                2
              </div>
              <div className="w-16 h-1 bg-[#FFE8D6]" />
              <div className="w-8 h-8 rounded-full bg-[#FFE8D6] flex items-center justify-center text-[#A0AEC0] text-sm font-bold">
                3
              </div>
            </div>
            <div className="flex justify-center gap-12 mt-2">
              <span className="text-xs font-medium text-[#FF6B6B]">Role</span>
              <span className="text-xs text-[#A0AEC0]">Details</span>
              <span className="text-xs text-[#A0AEC0]">Complete</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Tell us about yourself
            </h1>
            <p className="text-[#718096] text-lg">
              This helps us personalize your EduBridge experience
            </p>
          </div>

          {/* Supabase Integration Note */}
          <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-xs font-mono text-blue-800 mb-2">
              <strong>🔵 Role Discovery Step:</strong>
            </p>
            <p className="text-xs text-blue-700">
              Selected role will be stored in <code className="bg-blue-100 px-1 rounded">profiles.role</code> field after signup
            </p>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-xl text-[#2D3748] font-semibold mb-6">
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
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
                      isSelected
                        ? `${option.borderColor} ${option.bgColor} shadow-lg scale-[1.02]`
                        : 'border-[#FFE8D6] bg-[#FFF8F3] hover:border-[#FFD4B8] hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                          isSelected ? `bg-gradient-to-r ${option.gradient}` : 'bg-[#FFE8D6]'
                        } transition-all`}
                      >
                        <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-[#718096]'}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${isSelected ? option.colorClass : 'text-[#2D3748]'}`}>
                          {option.title}
                        </h3>
                        <p className="text-sm text-[#718096]">
                          {option.description}
                        </p>
                      </div>

                      {/* Checkmark */}
                      {isSelected && (
                        <div className="flex-shrink-0">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
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
            className="w-full h-14 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] hover:from-[#E55353] hover:to-[#FF8C6B] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/supabase-login')}
              className="text-sm text-[#718096] hover:text-[#2D3748] font-medium transition-colors"
            >
              Already have an account? <span className="text-[#FF6B6B]">Log In</span>
            </button>
          </div>
        </div>

        {/* Developer Notes */}
        <div className="mt-6 p-4 bg-gray-900 rounded-xl border-2 border-gray-700">
          <p className="text-xs font-semibold text-gray-300 mb-3">📋 Developer Notes:</p>
          <ul className="text-xs text-gray-400 space-y-2">
            <li>• <strong className="text-gray-300">Selected Role:</strong> {selectedIntent || 'None'}</li>
            <li>• <strong className="text-gray-300">Storage:</strong> Stored in localStorage as <code className="text-blue-400">'pendingUserRole'</code></li>
            <li>• <strong className="text-gray-300">Next Step:</strong> Role-specific signup form</li>
            <li>• <strong className="text-gray-300">Supabase Field:</strong> <code className="text-green-400">profiles.role</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
