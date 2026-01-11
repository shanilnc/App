import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm transition-colors duration-300" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-[#1F2937] rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border-2 border-[#E5E1DC] dark:border-[#374151] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1DC] dark:border-[#374151] bg-[#F6F4F1] dark:bg-[#0F172A] transition-colors duration-300">
          <h2
            id="video-modal-title"
            className="text-2xl font-semibold text-[#1F2933] dark:text-[#E5E7EB] transition-colors duration-300"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            How EduBridge Works
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-[#FFE8D6] dark:hover:bg-[#374151] text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#1F2933] dark:hover:text-[#E5E7EB] transition-all duration-200"
            aria-label="Close video modal"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
          {/* YouTube Embed - Replace VIDEO_ID with actual YouTube video ID */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"}
            title="EduBridge Platform Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Fallback for if you want to use a local video instead */}
          {/* <video
            className="w-full h-full"
            controls
            autoPlay
            src="/path-to-your-demo-video.mp4"
          >
            Your browser does not support the video tag.
          </video> */}
        </div>

        {/* Footer with Info */}
        <div className="px-6 py-4 bg-[#F6F4F1] dark:bg-[#0F172A] border-t border-[#E5E1DC] dark:border-[#374151] transition-colors duration-300">
          <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] text-center transition-colors duration-300">
            Learn how teachers connect with industry experts and students gain real-world skills
          </p>
        </div>
      </div>
    </div>
  );
}