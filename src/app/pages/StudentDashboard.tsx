import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, Trophy, Star, LogOut, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

export default function StudentDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Workshops Attended', value: '16', icon: CheckCircle, color: 'text-emerald-400' },
    { label: 'Upcoming Sessions', value: '5', icon: Calendar, color: 'text-emerald-400' },
    { label: 'Skills Acquired', value: '8', icon: Trophy, color: 'text-orange-400' },
    { label: 'Hours Learned', value: '42', icon: BookOpen, color: 'text-emerald-400' },
  ];

  const availableWorkshops = [
    {
      title: 'Full Stack Web Development',
      teacher: 'Prof. Anjali Sharma',
      rating: 4.8,
      date: 'Jan 12, 2026',
      duration: '3 hours',
      level: 'Intermediate',
    },
    {
      title: 'Data Analytics with Python',
      teacher: 'Dr. Vikram Patel',
      rating: 4.9,
      date: 'Jan 14, 2026',
      duration: '2.5 hours',
      level: 'Beginner',
    },
    {
      title: 'UI/UX Design Principles',
      teacher: 'Ms. Neha Gupta',
      rating: 4.7,
      date: 'Jan 16, 2026',
      duration: '2 hours',
      level: 'Beginner',
    },
  ];

  const topTeachers = [
    { name: 'Prof. Anjali Sharma', subject: 'Web Development', rating: 4.9, students: 234 },
    { name: 'Dr. Vikram Patel', subject: 'Data Science', rating: 4.8, students: 189 },
    { name: 'Ms. Neha Gupta', subject: 'Design', rating: 4.7, students: 156 },
  ];

  const attendanceHistory = [
    { workshop: 'React Fundamentals', teacher: 'Prof. Rajesh K.', date: 'Jan 5', rating: 5, feedback: 'Submitted' },
    { workshop: 'Python Basics', teacher: 'Dr. Priya S.', date: 'Jan 3', rating: 5, feedback: 'Submitted' },
    { workshop: 'Design Thinking', teacher: 'Ms. Neha G.', date: 'Dec 28', rating: 4, feedback: 'Pending' },
  ];

  const skillProgress = [
    { skill: 'Web Development', progress: 75 },
    { skill: 'Data Science', progress: 45 },
    { skill: 'UI/UX Design', progress: 60 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-600">
      {/* Header */}
      <div className="border-b border-emerald-700/50 bg-emerald-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-white">Student Dashboard</h1>
                <p className="text-sm text-gray-200">Welcome back, Arjun Verma</p>
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
              <Card key={index} className="bg-white/10 backdrop-blur-md border-emerald-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-3xl text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Available Workshops */}
            <Card className="bg-white/10 backdrop-blur-md border-emerald-700">
              <div className="p-6">
                <h2 className="text-2xl text-white mb-6">Available Workshops</h2>
                <div className="space-y-4">
                  {availableWorkshops.map((workshop, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-emerald-600/30 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg text-white mb-2">{workshop.title}</h3>
                          <p className="text-sm text-gray-300 mb-2">by {workshop.teacher}</p>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {workshop.date}
                            </span>
                            <span>{workshop.duration}</span>
                            <Badge variant="outline" className="bg-emerald-500/20 text-emerald-300 border-emerald-500">
                              {workshop.level}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                            <span className="text-white">{workshop.rating}</span>
                          </div>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Enroll
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Workshop Attendance History */}
            <Card className="bg-white/10 backdrop-blur-md border-emerald-700">
              <div className="p-6">
                <h2 className="text-2xl text-white mb-6">Attendance History</h2>
                <div className="space-y-3">
                  {attendanceHistory.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-emerald-600/30 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-white mb-1">{item.workshop}</h3>
                          <p className="text-sm text-gray-300">by {item.teacher}</p>
                          <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <Badge
                            variant={item.feedback === 'Submitted' ? 'default' : 'outline'}
                            className={
                              item.feedback === 'Submitted'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-orange-500/20 text-orange-300'
                            }
                          >
                            {item.feedback}
                          </Badge>
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
            {/* Top Teachers */}
            <Card className="bg-white/10 backdrop-blur-md border-emerald-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Top Rated Teachers</h2>
                <div className="space-y-4">
                  {topTeachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-emerald-600/30 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10 bg-emerald-600">
                          <AvatarFallback className="bg-emerald-600 text-white">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-white text-sm mb-1">{teacher.name}</h3>
                          <p className="text-xs text-gray-400 mb-2">{teacher.subject}</p>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                              <span className="text-white">{teacher.rating}</span>
                            </div>
                            <span className="text-gray-400">{teacher.students} students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="bg-white/10 backdrop-blur-md border-emerald-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Skill Progress
                </h2>
                <div className="space-y-4">
                  {skillProgress.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-white">{item.skill}</span>
                        <span className="text-gray-300">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-emerald-700">
              <div className="p-6">
                <h2 className="text-xl text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Browse All Workshops
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-emerald-600 text-white hover:bg-white/20">
                    View Teachers
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-emerald-600 text-white hover:bg-white/20">
                    Rate Sessions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
