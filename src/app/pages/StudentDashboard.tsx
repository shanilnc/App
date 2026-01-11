import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, Trophy, Star, LogOut, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { CoursePreview, CourseData } from '../components/CoursePreview';
import { WorkshopCard } from '../components/WorkshopCard';
import { PaymentModal } from '../components/PaymentModal';
import { PaymentSuccessModal } from '../components/PaymentSuccessModal';
import { CoursePlayer } from '../components/CoursePlayer';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Student');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  useEffect(() => {
    // Get user's name from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const stats = [
    { label: 'Workshops Attended', value: '16', icon: CheckCircle, color: 'text-[#48BB78]' },
    { label: 'Upcoming Sessions', value: '5', icon: Calendar, color: 'text-[#9F7AEA]' },
    { label: 'Skills Acquired', value: '8', icon: Trophy, color: 'text-[#FFA07A]' },
    { label: 'Hours Learned', value: '42', icon: BookOpen, color: 'text-[#FF6B6B]' },
  ];

  const availableWorkshops = [
    {
      title: 'Full Stack Web Development',
      teacher: 'Prof. Anjali Sharma',
      teacherTitle: 'Senior Software Engineer & Educator',
      teacherBio: 'Expert full-stack developer with 10+ years of experience in building scalable web applications and mentoring aspiring developers.',
      rating: 4.8,
      date: 'Jan 12, 2026',
      duration: '3 hours',
      level: 'Intermediate' as const,
      price: '₹999',
      originalPrice: '₹1,499',
      discount: '33%',
      coverImage: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjgwNDc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      shortDescription: 'Master modern web development with hands-on experience in React, Node.js, and MongoDB. Build production-ready applications from scratch.',
      fullDescription: 'This comprehensive workshop covers the entire full-stack development lifecycle. You\'ll learn to build responsive front-ends with React, create robust APIs with Node.js and Express, and manage data with MongoDB. Perfect for developers looking to level up their skills.',
      topics: [
        'React Hooks and State Management',
        'RESTful API Design with Node.js & Express',
        'MongoDB Database Integration',
        'Authentication & Authorization',
        'Deployment on Cloud Platforms',
      ],
      learningOutcomes: [
        'Build complete full-stack applications independently',
        'Implement authentication and user management',
        'Design and consume RESTful APIs',
        'Deploy applications to production',
        'Follow industry best practices and patterns',
      ],
      studentsEnrolled: 1247,
    },
    {
      title: 'Data Analytics with Python',
      teacher: 'Dr. Vikram Patel',
      teacherTitle: 'Data Scientist & AI Researcher',
      teacherBio: 'PhD in Computer Science with specialization in machine learning. Published researcher and industry consultant for Fortune 500 companies.',
      rating: 4.9,
      date: 'Jan 14, 2026',
      duration: '2.5 hours',
      level: 'Beginner' as const,
      price: '₹799',
      originalPrice: '₹1,199',
      discount: '33%',
      coverImage: 'https://images.unsplash.com/photo-1724925188921-224ff39d6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwcHl0aG9ufGVufDF8fHx8MTc2ODA5ODk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      shortDescription: 'Learn data analysis fundamentals using Python, pandas, and visualization libraries. Transform raw data into actionable insights.',
      fullDescription: 'Dive into the world of data analytics with Python. This beginner-friendly workshop teaches you how to clean, analyze, and visualize data using industry-standard libraries. No prior programming experience required.',
      topics: [
        'Python Basics for Data Analysis',
        'Data Cleaning with Pandas',
        'Statistical Analysis Techniques',
        'Data Visualization with Matplotlib & Seaborn',
        'Real-world Case Studies',
      ],
      learningOutcomes: [
        'Perform exploratory data analysis on real datasets',
        'Clean and prepare data for analysis',
        'Create compelling data visualizations',
        'Extract insights from complex datasets',
        'Present findings effectively to stakeholders',
      ],
      studentsEnrolled: 982,
    },
    {
      title: 'UI/UX Design Principles',
      teacher: 'Ms. Neha Gupta',
      teacherTitle: 'Lead Product Designer',
      teacherBio: 'Award-winning designer with 8 years of experience crafting user experiences for top tech companies. Passionate about teaching design thinking.',
      rating: 4.7,
      date: 'Jan 16, 2026',
      duration: '2 hours',
      level: 'Beginner' as const,
      price: '₹699',
      originalPrice: '₹999',
      discount: '30%',
      coverImage: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2ODAyNjU4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      shortDescription: 'Discover the fundamentals of user-centered design. Learn to create intuitive interfaces that users love.',
      fullDescription: 'This workshop introduces core UI/UX design principles through practical examples and hands-on exercises. You\'ll learn design thinking methodology, wireframing, prototyping, and usability testing.',
      topics: [
        'Design Thinking Process',
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Visual Design Principles',
        'Usability Testing Methods',
      ],
      learningOutcomes: [
        'Apply design thinking to solve user problems',
        'Create effective wireframes and prototypes',
        'Understand color theory and typography',
        'Conduct usability tests',
        'Build a portfolio-ready design project',
      ],
      studentsEnrolled: 756,
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
    <div className="min-h-screen bg-[#FFF8F3]" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Header */}
      <div className="border-b-2 border-[#FFE8D6] bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#48BB78] to-[#38A169] rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>Student Dashboard</h1>
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
            {/* Available Workshops */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-2xl text-[#2D3748] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Available Workshops</h2>
                <div className="space-y-4">
                  {availableWorkshops.map((workshop, index) => (
                    <WorkshopCard
                      key={index}
                      workshop={{
                        title: workshop.title,
                        teacher: workshop.teacher,
                        rating: workshop.rating,
                        date: workshop.date,
                        duration: workshop.duration,
                        level: workshop.level,
                      }}
                      onPreview={() => {
                        setSelectedCourse(workshop);
                        setPreviewOpen(true);
                      }}
                      onEnroll={() => {
                        setSelectedCourse(workshop);
                        setPreviewOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Workshop Attendance History */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-2xl text-[#2D3748] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Attendance History</h2>
                <div className="space-y-3">
                  {attendanceHistory.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-[#2D3748] mb-1" style={{ fontFamily: 'var(--font-display)' }}>{item.workshop}</h3>
                          <p className="text-sm text-[#718096]">by {item.teacher}</p>
                          <p className="text-xs text-[#A0AEC0] mt-1">{item.date}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-[#FFA07A] fill-[#FFA07A]" />
                            ))}
                          </div>
                          <Badge
                            variant={item.feedback === 'Submitted' ? 'default' : 'outline'}
                            className={
                              item.feedback === 'Submitted'
                                ? 'bg-gradient-to-r from-[#48BB78] to-[#38A169] text-white border-0'
                                : 'bg-gradient-to-r from-[#ED8936]/10 to-[#DD6B20]/10 text-[#ED8936] border-[#ED8936]'
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
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Top Rated Teachers</h2>
                <div className="space-y-4">
                  {topTeachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-3 hover:border-[#48BB78] transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-[#48BB78] to-[#38A169] shadow-md">
                          <AvatarFallback className="bg-gradient-to-br from-[#48BB78] to-[#38A169] text-white">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-[#2D3748] text-sm mb-1 font-medium">{teacher.name}</h3>
                          <p className="text-xs text-[#718096] mb-2">{teacher.subject}</p>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-[#FFA07A] fill-[#FFA07A] mr-1" />
                              <span className="text-[#2D3748]">{teacher.rating}</span>
                            </div>
                            <span className="text-[#718096]">{teacher.students} students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4 flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
                  <Trophy className="w-5 h-5 mr-2 text-[#FFA07A]" />
                  Skill Progress
                </h2>
                <div className="space-y-4">
                  {skillProgress.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[#2D3748]">{item.skill}</span>
                        <span className="text-[#718096]">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2 bg-[#FFE8D6]" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white border-2 border-[#FFE8D6] shadow-sm rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-[#48BB78] to-[#38A169] hover:from-[#3EA76A] hover:to-[#2F855A] text-white rounded-full shadow-md">
                    Browse All Workshops
                  </Button>
                  <Button variant="outline" className="w-full bg-[#FFF8F3] border-2 border-[#FFE8D6] text-[#48BB78] hover:bg-[#FFE8D6] rounded-full">
                    View Teachers
                  </Button>
                  <Button variant="outline" className="w-full bg-[#FFF8F3] border-2 border-[#FFE8D6] text-[#48BB78] hover:bg-[#FFE8D6] rounded-full">
                    Rate Sessions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Course Preview Modal */}
      {previewOpen && selectedCourse && (
        <CoursePreview
          isOpen={previewOpen}
          course={selectedCourse}
          onClose={() => setPreviewOpen(false)}
          onEnroll={(course) => {
            console.log('Enrolling in:', course.title);
            // Handle enrollment logic
            setPreviewOpen(false);
            setPaymentModalOpen(true);
          }}
          onWishlist={(course) => {
            console.log('Added to wishlist:', course.title);
            // Handle wishlist logic
          }}
        />
      )}

      {/* Payment Modal */}
      {paymentModalOpen && selectedCourse && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentSuccess={() => {
            setPaymentModalOpen(false);
            setSuccessModalOpen(true);
            setEnrolledCourses([...enrolledCourses, selectedCourse.title]);
          }}
          courseName={selectedCourse.title}
          price={selectedCourse.price}
        />
      )}

      {/* Payment Success Modal */}
      {successModalOpen && selectedCourse && (
        <PaymentSuccessModal
          isOpen={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          onStartCourse={() => {
            setSuccessModalOpen(false);
            setPlayerOpen(true);
          }}
          courseName={selectedCourse.title}
        />
      )}

      {/* Course Player */}
      {playerOpen && selectedCourse && (
        <CoursePlayer
          isOpen={playerOpen}
          course={selectedCourse}
          onClose={() => setPlayerOpen(false)}
        />
      )}
    </div>
  );
}