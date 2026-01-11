import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function SignupSuccess() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'expert'>('student');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'User';
    const role = localStorage.getItem('userRole') as 'student' | 'teacher' | 'expert' || 'student';
    setUserName(name);
    setUserRole(role);

    // Trigger confetti animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  const handleContinue = () => {
    if (userRole === 'student') {
      navigate('/dashboard/student');
    } else if (userRole === 'teacher') {
      navigate('/dashboard/teacher');
    } else if (userRole === 'expert') {
      navigate('/dashboard/expert');
    }
  };

  const getRoleConfig = () => {
    switch (userRole) {
      case 'student':
        return {
          gradient: 'from-[#48BB78] to-[#38A169]',
          color: '#48BB78',
        };
      case 'teacher':
        return {
          gradient: 'from-[#14B8A6] to-[#0D9488]',
          color: '#14B8A6',
        };
      case 'expert':
        return {
          gradient: 'from-[#9F7AEA] to-[#805AD5]',
          color: '#9F7AEA',
        };
    }
  };

  const config = getRoleConfig();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F3] via-[#FFE8D6] to-[#FFD4B8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Sparkles
                className="text-yellow-400"
                size={12 + Math.random() * 20}
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>
            EduBridge
          </span>
        </div>

        {/* Success Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-[#FFE8D6] p-8 text-center">
          {/* Progress Indicator - All Complete */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#48BB78] to-[#38A169] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#48BB78] to-[#38A169]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#48BB78] to-[#38A169] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#48BB78] to-[#38A169]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#48BB78] to-[#38A169] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
              <div className={`relative bg-gradient-to-br ${config.gradient} rounded-full p-6`}>
                <CheckCircle2 className="w-20 h-20 text-white animate-in zoom-in duration-500" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-[#2D3748] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Account Created Successfully!
          </h1>
          <p className="text-lg text-[#718096] mb-2">
            Welcome to EduBridge, {userName}!
          </p>
          <p className="text-sm text-[#A0AEC0] mb-8">
            Your {userRole} account is ready to use
          </p>

          {/* Success Details */}
          <div className={`bg-gradient-to-r ${config.gradient} bg-opacity-10 rounded-xl p-4 mb-8`}>
            <div className="flex items-center justify-center gap-2 text-sm text-[#2D3748] mb-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: config.color }} />
              <span>Account verified and activated</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-[#2D3748] mb-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: config.color }} />
              <span>Profile created with role: <strong>{userRole}</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-[#2D3748]">
              <CheckCircle2 className="w-4 h-4" style={{ color: config.color }} />
              <span>Dashboard access granted</span>
            </div>
          </div>

          {/* Supabase Integration Note */}
          <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-left">
            <p className="text-xs font-mono text-blue-800 mb-2">
              <strong>🔵 Supabase Success State:</strong>
            </p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>✓ User created in <code>auth.users</code></li>
              <li>✓ Profile created in <code>profiles</code> table</li>
              <li>✓ Role: <strong>{userRole}</strong></li>
              <li>✓ Email verification sent (if enabled)</li>
            </ul>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleContinue}
            className={`w-full h-14 bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all`}
          >
            Continue to Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Secondary Action */}
          <div className="mt-4">
            <button
              onClick={() => navigate('/supabase-login')}
              className="text-sm text-[#718096] hover:text-[#2D3748] transition-colors"
            >
              Or go to <span style={{ color: config.color }} className="font-medium">Login Page</span>
            </button>
          </div>
        </div>

        {/* Developer Notes */}
        <div className="mt-6 p-4 bg-gray-900 rounded-xl border-2 border-gray-700">
          <p className="text-xs font-semibold text-gray-300 mb-3">📋 Developer Notes:</p>
          <ul className="text-xs text-gray-400 space-y-2">
            <li>• <strong className="text-gray-300">User Name:</strong> {userName}</li>
            <li>• <strong className="text-gray-300">Role:</strong> {userRole}</li>
            <li>• <strong className="text-gray-300">Redirect:</strong> /dashboard/{userRole}</li>
            <li>• <strong className="text-gray-300">Session:</strong> Auto-login via Supabase session</li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </div>
  );
}
