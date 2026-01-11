import React from 'react';
import { Calendar, Star, Eye, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CourseData } from './CoursePreview';

interface WorkshopCardProps {
  workshop: {
    title: string;
    teacher: string;
    rating: number;
    date: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
  };
  onPreview: () => void;
  onEnroll: () => void;
  className?: string;
}

export function WorkshopCard({ workshop, onPreview, onEnroll, className = '' }: WorkshopCardProps) {
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
    <div
      className={`group bg-[#FFF8F3] border-2 border-[#FFE8D6] rounded-xl p-4 hover:border-[#48BB78] hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      onClick={onPreview}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg text-[#2D3748] mb-2 group-hover:text-[#48BB78] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
            {workshop.title}
          </h3>
          <p className="text-sm text-[#718096] mb-2">by {workshop.teacher}</p>
          <div className="flex items-center space-x-3 text-sm text-[#718096]">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {workshop.date}
            </span>
            <span>{workshop.duration}</span>
            <Badge variant="outline" className={getLevelColor(workshop.level)}>
              {workshop.level}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-[#FFA07A] fill-[#FFA07A] mr-1" />
            <span className="text-[#2D3748] font-semibold">{workshop.rating}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            onPreview();
          }}
          className="flex-1 !border-2 !border-[#48BB78] !text-[#48BB78] !bg-transparent hover:!bg-transparent rounded-full transition-all"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onEnroll();
          }}
          className="flex-1 bg-gradient-to-r from-[#48BB78] to-[#38A169] hover:from-[#3EA76A] hover:to-[#2F855A] text-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Enroll
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}