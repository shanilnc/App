import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Calendar, Award, BookOpen, ChevronDown, ChevronUp, Heart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';

export interface CourseData {
  id?: string;
  title: string;
  teacher: string;
  teacherTitle: string;
  teacherBio?: string;
  rating: number;
  date: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  originalPrice?: string;
  discount?: string;
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  learningOutcomes?: string[];
  topics?: string[];
  studentsEnrolled?: number;
}

interface CoursePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseData | null;
  onEnroll?: (course: CourseData) => void;
  onWishlist?: (course: CourseData) => void;
}

export function CoursePreview({ isOpen, onClose, course, onEnroll, onWishlist }: CoursePreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (onWishlist) onWishlist(course);
  };

  const handleEnroll = () => {
    if (onEnroll) onEnroll(course);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-gradient-to-r from-[#48BB78]/10 to-[#38A169]/10 text-[#48BB78] border-[#48BB78]';
      case 'Intermediate':
        return 'bg-gradient-to-r from-[#ED8936]/10 to-[#DD6B20]/10 text-[#ED8936] border-[#ED8936]';
      case 'Advanced':
        return 'bg-gradient-to-r from-[#9F7AEA]/10 to-[#805AD5]/10 text-[#9F7AEA] border-[#9F7AEA]';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Preview Panel - Desktop: Slide-in Right, Mobile: Bottom Sheet */}
      <div
        className="fixed inset-y-0 right-0 w-full sm:w-[600px] lg:w-[700px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out overflow-hidden flex flex-col
        max-sm:top-auto max-sm:bottom-0 max-sm:h-[90vh] max-sm:rounded-t-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Handle */}
        <div className="sm:hidden flex justify-center py-2 bg-[#FFF8F3]">
          <div className="w-12 h-1.5 bg-[#CBD5E0] rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Close preview"
        >
          <X className="w-5 h-5 text-[#2D3748]" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Course Cover Image */}
          <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#FFE8D6] to-[#FFD4BF]">
            <img
              src={course.coverImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {course.title}
              </h1>
              <p className="text-white/90 text-lg">
                {course.teacher}
                {course.teacherTitle && (
                  <span className="text-white/70 text-base ml-2">• {course.teacherTitle}</span>
                )}
              </p>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={`w-5 h-5 transition-all ${
                  isWishlisted ? 'fill-[#FF6B6B] text-[#FF6B6B]' : 'text-[#2D3748]'
                }`}
              />
            </button>
          </div>

          {/* Course Meta Info */}
          <div className="px-6 py-4 bg-[#FFF8F3] border-b-2 border-[#FFE8D6]">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center text-[#2D3748]">
                <Star className="w-5 h-5 text-[#FFA07A] fill-[#FFA07A] mr-1.5" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-[#718096] ml-1">rating</span>
              </div>
              <div className="w-px h-5 bg-[#CBD5E0]" />
              <div className="flex items-center text-[#718096]">
                <Clock className="w-4 h-4 mr-1.5" />
                {course.duration}
              </div>
              <div className="w-px h-5 bg-[#CBD5E0]" />
              <div className="flex items-center text-[#718096]">
                <Calendar className="w-4 h-4 mr-1.5" />
                {course.date}
              </div>
              <div className="w-px h-5 bg-[#CBD5E0]" />
              <Badge variant="outline" className={getLevelColor(course.level)}>
                <Award className="w-3 h-3 mr-1" />
                {course.level}
              </Badge>
            </div>
            {course.studentsEnrolled && (
              <div className="mt-3 text-sm text-[#718096] flex items-center">
                <User className="w-4 h-4 mr-1.5" />
                {course.studentsEnrolled.toLocaleString()} students enrolled
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            {/* Short Description */}
            <div>
              <h2 className="text-xl font-semibold text-[#2D3748] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                About this Workshop
              </h2>
              <p className="text-[#4A5568] leading-relaxed">
                {course.shortDescription}
              </p>
            </div>

            {/* Full Description - Expandable */}
            <div>
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="space-y-4 text-[#4A5568] leading-relaxed">
                  <p>{course.fullDescription}</p>
                  
                  {course.topics && course.topics.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-2">Topics Covered:</h3>
                      <ul className="space-y-2">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="w-4 h-4 text-[#48BB78] mr-2 mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-2">What You'll Learn:</h3>
                      <ul className="space-y-2">
                        {course.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-[#48BB78]/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-[#48BB78]" />
                            </div>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center text-[#48BB78] hover:text-[#38A169] font-medium mt-3 transition-colors"
              >
                {isExpanded ? (
                  <>
                    <span>Read less</span>
                    <ChevronUp className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

            {/* Instructor Card */}
            <div className="bg-gradient-to-br from-[#FFF8F3] to-[#FFE8D6] border-2 border-[#FFE8D6] rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-[#2D3748] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Your Instructor
              </h3>
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16 border-2 border-white shadow-md">
                  <AvatarFallback className="bg-gradient-to-br from-[#48BB78] to-[#38A169] text-white text-xl">
                    {course.teacher.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D3748] text-lg">{course.teacher}</h4>
                  {course.teacherTitle && (
                    <p className="text-[#718096] text-sm mb-2">{course.teacherTitle}</p>
                  )}
                  {course.teacherBio && (
                    <p className="text-[#4A5568] text-sm leading-relaxed">{course.teacherBio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Extra spacing for sticky footer */}
            <div className="h-32" />
          </div>
        </div>

        {/* Sticky Footer - Price & CTA */}
        <div className="border-t-2 border-[#FFE8D6] bg-white shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-[#2D3748]" style={{ fontFamily: 'var(--font-display)' }}>
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-lg text-[#A0AEC0] line-through">
                    {course.originalPrice}
                  </span>
                )}
              </div>
              {course.discount && (
                <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white border-0 mt-1">
                  {course.discount} OFF
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={handleEnroll}
              className="flex-1 bg-gradient-to-r from-[#48BB78] to-[#38A169] hover:from-[#3EA76A] hover:to-[#2F855A] text-white rounded-full h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now
            </Button>
            <Button
              onClick={handleWishlist}
              variant="outline"
              className={`rounded-full h-12 px-6 border-2 transition-all ${
                isWishlisted
                  ? 'border-[#FF6B6B] text-[#FF6B6B] bg-[#FF6B6B]/5'
                  : 'border-[#CBD5E0] text-[#4A5568] hover:border-[#FF6B6B] hover:text-[#FF6B6B]'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
