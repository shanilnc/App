import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, Maximize, ChevronDown, ChevronRight, Lock, PlayCircle, CheckCircle2, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { CourseData } from './CoursePreview';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  locked: boolean;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CoursePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseData;
}

// Generate course sections based on course data
const generateCourseSections = (course: CourseData): Section[] => {
  return [
    {
      id: 'section-1',
      title: 'Introduction',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Welcome to the Course',
          duration: '5:32',
          videoUrl: '',
          completed: false,
          locked: false,
        },
        {
          id: 'lesson-1-2',
          title: 'Course Overview & Expectations',
          duration: '8:15',
          videoUrl: '',
          completed: false,
          locked: false,
        },
        {
          id: 'lesson-1-3',
          title: 'Setup & Prerequisites',
          duration: '12:45',
          videoUrl: '',
          completed: false,
          locked: false,
        },
      ],
    },
    {
      id: 'section-2',
      title: 'Core Concepts',
      lessons: course.topics.slice(0, 3).map((topic, index) => ({
        id: `lesson-2-${index + 1}`,
        title: topic,
        duration: `${15 + index * 5}:${20 + index * 10}`,
        videoUrl: '',
        completed: false,
        locked: false,
      })),
    },
    {
      id: 'section-3',
      title: 'Hands-on Workshop',
      lessons: course.topics.slice(3).map((topic, index) => ({
        id: `lesson-3-${index + 1}`,
        title: topic,
        duration: `${25 + index * 8}:${10 + index * 15}`,
        videoUrl: '',
        completed: false,
        locked: false,
      })),
    },
    {
      id: 'section-4',
      title: 'Final Project & Wrap-up',
      lessons: [
        {
          id: 'lesson-4-1',
          title: 'Final Project Assignment',
          duration: '10:30',
          videoUrl: '',
          completed: false,
          locked: false,
        },
        {
          id: 'lesson-4-2',
          title: 'Course Summary & Next Steps',
          duration: '7:20',
          videoUrl: '',
          completed: false,
          locked: false,
        },
      ],
    },
  ];
};

export function CoursePlayer({ isOpen, onClose, course }: CoursePlayerProps) {
  const sections = generateCourseSections(course);
  const [currentLessonId, setCurrentLessonId] = useState<string>(sections[0]?.lessons[0]?.id || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([sections[0]?.id || '']);
  const [playlistOpen, setPlaylistOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const currentLesson = sections
    .flatMap(s => s.lessons)
    .find(l => l.id === currentLessonId);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.locked) return;
    setCurrentLessonId(lesson.id);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 animate-in fade-in duration-200">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 py-3 flex items-center justify-between z-10">
        <div className="flex-1">
          <h1 className="text-white font-semibold text-lg truncate">{course.title}</h1>
          <p className="text-gray-400 text-sm truncate">{currentLesson?.title}</p>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          className="text-white hover:bg-white/10 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex h-full pt-16">
        {/* Main Video Area */}
        <div className={`flex-1 flex flex-col bg-black transition-all duration-300 ${playlistOpen ? 'lg:mr-[400px]' : ''}`}>
          {/* Video Player */}
          <div className="flex-1 flex items-center justify-center relative group">
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              {/* Video Placeholder */}
              <div className="text-center">
                <PlayCircle className="w-24 h-24 text-white/30 mx-auto mb-4" />
                <p className="text-white/50 text-lg">Video Player Placeholder</p>
                <p className="text-white/30 text-sm mt-2">{currentLesson?.title}</p>
              </div>

              {/* Play/Pause Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={togglePlayPause}
              >
                <div className="bg-black/50 rounded-full p-6">
                  {isPlaying ? (
                    <Pause className="w-16 h-16 text-white" />
                  ) : (
                    <Play className="w-16 h-16 text-white" />
                  )}
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div className="mb-3">
                  <Progress value={progress} className="h-1 bg-white/20" />
                  <div className="flex justify-between text-xs text-white/70 mt-1">
                    <span>0:00</span>
                    <span>{currentLesson?.duration || '0:00'}</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-[#48BB78] transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button className="text-white hover:text-[#48BB78] transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <span className="text-white text-sm">0:00 / {currentLesson?.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-white hover:text-[#48BB78] transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="text-white hover:text-[#48BB78] transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Below Video Info (Mobile) */}
          <div className="lg:hidden bg-gray-900 border-t border-gray-800 p-4">
            <h2 className="text-white font-semibold text-lg mb-2">{currentLesson?.title}</h2>
            <Button
              onClick={() => setPlaylistOpen(!playlistOpen)}
              className="w-full bg-[#48BB78] hover:bg-[#3EA76A] text-white"
            >
              {playlistOpen ? 'Hide' : 'Show'} Playlist
            </Button>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div
          className={`fixed lg:fixed top-16 right-0 bottom-0 w-full lg:w-[400px] bg-gray-900 border-l border-gray-800 overflow-y-auto transition-transform duration-300 ${
            playlistOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Playlist Header */}
          <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between z-10">
            <h3 className="text-white font-semibold">Course Content</h3>
            <button
              onClick={() => setPlaylistOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sections & Lessons */}
          <div className="p-2">
            {sections.map((section, sectionIndex) => (
              <div key={section.id} className="mb-2">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-white font-medium text-sm">
                      Section {sectionIndex + 1}: {section.title}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">
                    {section.lessons.length} lessons
                  </span>
                </button>

                {/* Lessons List */}
                {expandedSections.includes(section.id) && (
                  <div className="mt-1 space-y-1">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonClick(lesson)}
                        disabled={lesson.locked}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all ${
                          currentLessonId === lesson.id
                            ? 'bg-[#48BB78]/20 border-l-4 border-[#48BB78]'
                            : lesson.locked
                            ? 'bg-gray-800/50 cursor-not-allowed opacity-50'
                            : 'bg-gray-800/30 hover:bg-gray-800 cursor-pointer'
                        }`}
                      >
                        {/* Lesson Icon */}
                        <div className="flex-shrink-0 mt-0.5">
                          {lesson.locked ? (
                            <Lock className="w-4 h-4 text-gray-500" />
                          ) : lesson.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-[#48BB78]" />
                          ) : currentLessonId === lesson.id ? (
                            <Play className="w-4 h-4 text-[#48BB78]" />
                          ) : (
                            <PlayCircle className="w-4 h-4 text-gray-400" />
                          )}
                        </div>

                        {/* Lesson Info */}
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-500 text-xs">
                              {sectionIndex + 1}.{lessonIndex + 1}
                            </span>
                            {currentLessonId === lesson.id && (
                              <span className="bg-[#48BB78] text-white text-xs px-2 py-0.5 rounded-full">
                                Now Playing
                              </span>
                            )}
                          </div>
                          <p className={`text-sm font-medium mb-1 ${
                            currentLessonId === lesson.id ? 'text-[#48BB78]' : 'text-white'
                          }`}>
                            {lesson.title}
                          </p>
                          <span className="text-gray-400 text-xs">{lesson.duration}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Playlist Button (Desktop) */}
      {!playlistOpen && (
        <button
          onClick={() => setPlaylistOpen(true)}
          className="hidden lg:block fixed right-4 top-24 bg-[#48BB78] hover:bg-[#3EA76A] text-white px-4 py-2 rounded-lg shadow-lg transition-colors z-20"
        >
          Show Playlist
        </button>
      )}
    </div>
  );
}