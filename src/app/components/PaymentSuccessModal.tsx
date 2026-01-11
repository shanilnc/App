import React, { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCourse: () => void;
  courseName: string;
}

export function PaymentSuccessModal({ isOpen, onClose, onStartCourse, courseName }: PaymentSuccessModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      // Auto-hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
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
                size={16 + Math.random() * 16}
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center animate-in zoom-in-95 duration-300">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
            <div className="relative bg-gradient-to-br from-[#48BB78] to-[#38A169] rounded-full p-4">
              <CheckCircle2 className="w-16 h-16 text-white animate-in zoom-in duration-500" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-2">
          You're now enrolled in
        </p>
        <p className="text-lg font-semibold text-[#48BB78] mb-8">
          {courseName}
        </p>

        {/* Success Details */}
        <div className="bg-gradient-to-r from-[#48BB78]/10 to-[#38A169]/10 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[#48BB78]" />
            <span>Course access unlocked</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mt-2">
            <CheckCircle2 className="w-4 h-4 text-[#48BB78]" />
            <span>Lifetime access granted</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button
            onClick={onStartCourse}
            className="w-full h-12 bg-gradient-to-r from-[#48BB78] to-[#38A169] hover:from-[#3EA76A] hover:to-[#2F855A] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Start Learning Now
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full h-12 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
          >
            Back to Dashboard
          </Button>
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
