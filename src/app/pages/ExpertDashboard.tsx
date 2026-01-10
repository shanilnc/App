import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, BookOpen, TrendingUp, Plus, Star, LogOut } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ExpertDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Learners', value: '1,248', icon: Users, color: 'text-purple-400' },
    { label: 'Courses Created', value: '12', icon: BookOpen, color: 'text-purple-400' },
    { label: 'Live Sessions', value: '48', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-gold-400' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900">
      {/* Header */}
      <div className="border-b border-purple-700/50 bg-purple-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-white">Expert Dashboard</h1>
                <p className="text-sm text-gray-400">Welcome back, Dr. Sarah Chen</p>
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
              <Card key={index} className="bg-white/10 backdrop-blur-md border-purple-700">
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
          {/* Courses Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-purple-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-white">My Courses</h2>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Course
                  </Button>
                </div>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-purple-600/30 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg text-white mb-2">{course.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {course.learners} learners
                            </span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-gold-400" />
                              {course.rating}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            course.status === 'Active'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-gray-500/20 text-gray-300'
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
            <Card className="bg-white/10 backdrop-blur-md border-purple-700">
              <div className="p-6">
                <h2 className="text-2xl text-white mb-6">Engagement & Growth</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4C1D95" />
                    <XAxis dataKey="month" stroke="#A78BFA" />
                    <YAxis stroke="#A78BFA" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#581C87', border: 'none', borderRadius: '8px' }}
                      labelStyle={{ color: '#E9D5FF' }}
                    />
                    <Bar dataKey="learners" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card className="bg-white/10 backdrop-blur-md border-purple-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Upcoming Live Sessions</h2>
                <div className="space-y-3">
                  {[
                    { title: 'React Hooks Deep Dive', time: 'Tomorrow, 3:00 PM' },
                    { title: 'AWS Architecture Q&A', time: 'Jan 12, 5:00 PM' },
                    { title: 'Code Review Session', time: 'Jan 15, 2:00 PM' },
                  ].map((session, index) => (
                    <div key={index} className="bg-white/5 border border-purple-600/30 rounded-lg p-3">
                      <p className="text-white text-sm mb-1">{session.title}</p>
                      <p className="text-xs text-gray-400">{session.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Recent Feedback */}
            <Card className="bg-white/10 backdrop-blur-md border-purple-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Recent Feedback</h2>
                <div className="space-y-4">
                  {[
                    { text: 'Excellent real-world examples!', rating: 5 },
                    { text: 'Very clear explanations', rating: 5 },
                    { text: 'Would love more hands-on exercises', rating: 4 },
                  ].map((feedback, index) => (
                    <div key={index} className="bg-white/5 border border-purple-600/30 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        {Array.from({ length: feedback.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-300">{feedback.text}</p>
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
