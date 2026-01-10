import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Award, Users, Star, LogOut, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Masterclasses Enrolled', value: '8', icon: BookOpen, color: 'text-blue-400' },
    { label: 'Workshops Conducted', value: '24', icon: Users, color: 'text-blue-400' },
    { label: 'Avg Student Rating', value: '4.6', icon: Star, color: 'text-yellow-400' },
    { label: 'Certificates Earned', value: '5', icon: Award, color: 'text-blue-400' },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700">
      {/* Header */}
      <div className="border-b border-blue-700/50 bg-blue-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-white">Teacher Dashboard</h1>
                <p className="text-sm text-gray-300">Welcome back, Prof. Rajesh Kumar</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
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
              <Card key={index} className="bg-white/10 backdrop-blur-md border-blue-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-3xl text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
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
            <Card className="bg-white/10 backdrop-blur-md border-blue-700">
              <div className="p-6">
                <h2 className="text-2xl text-white mb-6">Enrolled Expert Masterclasses</h2>
                <div className="space-y-4">
                  {enrolledCourses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-blue-600/30 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg text-white mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-400">by {course.expert}</p>
                        </div>
                        <Badge
                          variant={course.status === 'Completed' ? 'default' : 'outline'}
                          className={
                            course.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                              : 'bg-blue-500/20 text-blue-300 border-blue-500'
                          }
                        >
                          {course.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  Browse More Masterclasses
                </Button>
              </div>
            </Card>

            {/* Upcoming Workshops */}
            <Card className="bg-white/10 backdrop-blur-md border-blue-700">
              <div className="p-6">
                <h2 className="text-2xl text-white mb-6">My Upcoming Workshops</h2>
                <div className="space-y-4">
                  {upcomingWorkshops.map((workshop, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-blue-600/30 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <h3 className="text-lg text-white mb-2">{workshop.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{workshop.date}</span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {workshop.students} students
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400" />
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
            <Card className="bg-white/10 backdrop-blur-md border-blue-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
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
                        <span className="text-white">{item.skill}</span>
                        <span className="text-gray-400">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Student Feedback */}
            <Card className="bg-white/10 backdrop-blur-md border-blue-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Student Feedback</h2>
                <div className="space-y-4">
                  {studentFeedback.map((feedback, index) => (
                    <div key={index} className="bg-white/5 border border-blue-600/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white">{feedback.student}</span>
                        <div className="flex items-center">
                          {Array.from({ length: feedback.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">{feedback.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Certificates */}
            <Card className="bg-white/10 backdrop-blur-md border-blue-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Certificates & Achievements</h2>
                <div className="space-y-3">
                  {[
                    'Teaching Excellence 2025',
                    'Digital Pedagogy Certified',
                    'Student Success Coach',
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/5 border border-blue-600/30 rounded-lg p-3"
                    >
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-white">{cert}</span>
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
