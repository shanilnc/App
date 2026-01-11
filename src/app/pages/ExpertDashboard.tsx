import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, BookOpen, TrendingUp, Plus, Star, LogOut } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ExpertDashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Expert');

  useEffect(() => {
    // Get user's name from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const stats = [
    { label: 'Total Learners', value: '1,248', icon: Users, color: 'text-[#9F7AEA]' },
    { label: 'Courses Created', value: '12', icon: BookOpen, color: 'text-[#FF6B6B]' },
    { label: 'Live Sessions', value: '48', icon: TrendingUp, color: 'text-[#48BB78]' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-[#FFA07A]' },
  ];

  const courses = [
    { title: 'Advanced React Patterns', learners: 324, rating: 4.9, status: 'Active' },
    { title: 'System Design Masterclass', learners: 512, rating: 4.8, status: 'Active' },
    { title: 'Cloud Architecture Fundamentals', learners: 234, rating: 4.7, status: 'Draft' },
    { title: 'Microservices at Scale', learners: 178, rating: 4.9, status: 'Active' },
  ];

  const engagementData = [
    { month: 'Jan', learners: 65 },
    { month: 'Feb', learners: 89 },
    { month: 'Mar', learners: 120 },
    { month: 'Apr', learners: 156 },
    { month: 'May', learners: 201 },
    { month: 'Jun', learners: 248 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F3]" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Header */}
      <div className="border-b-2 border-[#FFE8D6] bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>Expert Dashboard</h1>
                <p className="text-sm text-[#718096]">Welcome back, {userName}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-[#4A5568] hover:bg-[#FFE8D6] rounded-full"
              onClick={() => navigate('/')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border-2 border-[#FFE8D6] shadow-sm hover:shadow-lg transition-shadow rounded-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-3xl text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</span>
                  </div>
                  <p className="text-sm text-[#4A5568]">{stat.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>My Courses</h2>
                  <Button className="bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white rounded-full shadow-md">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Course
                  </Button>
                </div>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-4 hover:border-[#9F7AEA] transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg text-[#2D3748] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{course.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-[#718096]">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {course.learners} learners
                            </span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-[#FFA07A] fill-[#FFA07A]" />
                              {course.rating}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            course.status === 'Active'
                              ? 'bg-gradient-to-r from-[#48BB78]/20 to-[#38A169]/20 text-[#48BB78] border-2 border-[#48BB78]'
                              : 'bg-[#FFE8D6] text-[#718096] border-2 border-[#FFD4BF]'
                          }`}
                        >
                          {course.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Engagement Analytics */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-2xl text-[#2D3748] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Engagement & Growth</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#FFE8D6" />
                    <XAxis dataKey="month" stroke="#718096" style={{ fontFamily: 'var(--font-sans)' }} />
                    <YAxis stroke="#718096" style={{ fontFamily: 'var(--font-sans)' }} />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '2px solid #FFE8D6', 
                        borderRadius: '12px',
                        fontFamily: 'var(--font-sans)'
                      }}
                      labelStyle={{ color: '#2D3748', fontWeight: 500 }}
                    />
                    <Bar dataKey="learners" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#9F7AEA" />
                        <stop offset="100%" stopColor="#805AD5" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Upcoming Live Sessions</h2>
                <div className="space-y-3">
                  {[
                    { title: 'React Hooks Deep Dive', time: 'Tomorrow, 3:00 PM' },
                    { title: 'AWS Architecture Q&A', time: 'Jan 12, 5:00 PM' },
                    { title: 'Code Review Session', time: 'Jan 15, 2:00 PM' },
                  ].map((session, index) => (
                    <div key={index} className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-3 hover:border-[#9F7AEA] transition-colors">
                      <p className="text-[#2D3748] text-sm mb-1 font-medium">{session.title}</p>
                      <p className="text-xs text-[#718096]">{session.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Recent Feedback */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Recent Feedback</h2>
                <div className="space-y-4">
                  {[
                    { text: 'Excellent real-world examples!', rating: 5 },
                    { text: 'Very clear explanations', rating: 5 },
                    { text: 'Would love more hands-on exercises', rating: 4 },
                  ].map((feedback, index) => (
                    <div key={index} className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-3">
                      <div className="flex items-center mb-2">
                        {Array.from({ length: feedback.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#FFA07A] fill-[#FFA07A]" />
                        ))}
                      </div>
                      <p className="text-sm text-[#4A5568]">{feedback.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}