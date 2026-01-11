import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Award, Users, Star, LogOut, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Teacher');

  useEffect(() => {
    // Get user's name from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const stats = [
    { label: 'Masterclasses Enrolled', value: '8', icon: BookOpen, color: 'text-[#FF6B6B]' },
    { label: 'Workshops Conducted', value: '24', icon: Users, color: 'text-[#9F7AEA]' },
    { label: 'Avg Student Rating', value: '4.6', icon: Star, color: 'text-[#FFA07A]' },
    { label: 'Certificates Earned', value: '5', icon: Award, color: 'text-[#48BB78]' },
  ];

  const enrolledCourses = [
    { title: 'Advanced Teaching Methodologies', expert: 'Dr. John Smith', progress: 75, status: 'In Progress' },
    { title: 'AI in Education', expert: 'Prof. Emily Wang', progress: 45, status: 'In Progress' },
    { title: 'Student Engagement Strategies', expert: 'Dr. Michael Brown', progress: 100, status: 'Completed' },
  ];

  const upcomingWorkshops = [
    { title: 'Introduction to Data Science', date: 'Jan 12, 2026', students: 45, rating: 4.7 },
    { title: 'Web Development Basics', date: 'Jan 15, 2026', students: 38, rating: 4.5 },
    { title: 'Cloud Computing Fundamentals', date: 'Jan 18, 2026', students: 52, rating: 4.8 },
  ];

  const studentFeedback = [
    { student: 'Rahul K.', comment: 'Very engaging and practical approach', rating: 5 },
    { student: 'Priya S.', comment: 'Clear explanations, loved the examples', rating: 5 },
    { student: 'Amit M.', comment: 'Great workshop but could use more time', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F3]" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Header */}
      <div className="border-b-2 border-[#FFE8D6] bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>Teacher Dashboard</h1>
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
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enrolled Masterclasses */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-2xl text-[#2D3748] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Enrolled Expert Masterclasses</h2>
                <div className="space-y-4">
                  {enrolledCourses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-4 hover:border-[#FF8E53] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg text-[#2D3748] mb-1" style={{ fontFamily: 'var(--font-display)' }}>{course.title}</h3>
                          <p className="text-sm text-[#718096]">by {course.expert}</p>
                        </div>
                        <Badge
                          variant={course.status === 'Completed' ? 'default' : 'outline'}
                          className={
                            course.status === 'Completed'
                              ? 'bg-gradient-to-r from-[#48BB78] to-[#38A169] text-white border-0'
                              : 'bg-gradient-to-r from-[#FF6B6B]/10 to-[#FF8E53]/10 text-[#FF6B6B] border-[#FF8E53]'
                          }
                        >
                          {course.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#718096]">Progress</span>
                          <span className="text-[#2D3748] font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2 bg-[#FFE8D6]" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF5252] hover:to-[#FF7A3D] text-white rounded-full shadow-lg">
                  Browse More Masterclasses
                </Button>
              </div>
            </Card>

            {/* Upcoming Workshops */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-2xl text-[#2D3748] mb-6" style={{ fontFamily: 'var(--font-display)' }}>My Upcoming Workshops</h2>
                <div className="space-y-4">
                  {upcomingWorkshops.map((workshop, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-4 hover:border-[#FF8E53] transition-colors"
                    >
                      <h3 className="text-lg text-[#2D3748] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{workshop.title}</h3>
                      <div className="flex items-center justify-between text-sm text-[#718096]">
                        <span>{workshop.date}</span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {workshop.students} students
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-[#FFA07A] fill-[#FFA07A]" />
                            {workshop.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Skill Progress */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4 flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
                  <TrendingUp className="w-5 h-5 mr-2 text-[#FF6B6B]" />
                  Skill Progress
                </h2>
                <div className="space-y-4">
                  {[
                    { skill: 'Modern Teaching Methods', level: 85 },
                    { skill: 'Technology Integration', level: 70 },
                    { skill: 'Student Engagement', level: 92 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[#2D3748]">{item.skill}</span>
                        <span className="text-[#718096]">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-2 bg-[#FFE8D6]" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Student Feedback */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Student Feedback</h2>
                <div className="space-y-4">
                  {studentFeedback.map((feedback, index) => (
                    <div key={index} className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#2D3748] font-medium">{feedback.student}</span>
                        <div className="flex items-center">
                          {Array.from({ length: feedback.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-[#FFA07A] fill-[#FFA07A]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#4A5568]">{feedback.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Certificates */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Certificates & Achievements</h2>
                <div className="space-y-3">
                  {[
                    'Teaching Excellence 2025',
                    'Digital Pedagogy Certified',
                    'Student Success Coach',
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-gradient-to-r from-[#FFA07A]/10 to-[#FFD4BF]/10 border-2 border-[#FFE8D6] rounded-xl p-3"
                    >
                      <Award className="w-5 h-5 text-[#FFA07A]" />
                      <span className="text-sm text-[#2D3748]">{cert}</span>
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