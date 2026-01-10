import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, GraduationCap, BookOpen } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'expert',
      icon: Brain,
      title: 'Expert',
      subtitle: 'Teach what the industry actually uses',
      color: 'purple',
      route: '/login',
    },
    {
      id: 'teacher',
      icon: GraduationCap,
      title: 'Teacher',
      subtitle: 'Learn from industry experts. Teach with confidence.',
      color: 'blue',
      route: '/login',
    },
    {
      id: 'student',
      icon: BookOpen,
      title: 'Student',
      subtitle: 'Learn skills. Rate teaching. Become industry-ready.',
      color: 'emerald',
      route: '/login',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE0] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-yellow-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-orange-200 rounded-full opacity-40 blur-2xl"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-[2rem] flex items-center justify-center shadow-lg">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black">
            From Rote Learning to Real-World Skills
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by industry experts, validated by students
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className="group relative overflow-hidden border-0 bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-[2.5rem]"
                onClick={() => navigate(role.route)}
              >
                <div className="p-8 sm:p-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-${role.color}-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 text-${role.color}-600`} />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl mb-4 text-center text-black">
                    {role.title}
                  </h2>
                  
                  <p className="text-base sm:text-lg text-center text-gray-600 mb-8 min-h-[60px] flex items-center justify-center">
                    {role.subtitle}
                  </p>
                  
                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white transition-colors rounded-full h-14 text-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(role.route);
                    }}
                  >
                    Continue as {role.title}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>Blending classroom learning with industry workspace</p>
        </div>
      </div>
    </div>
  );
}