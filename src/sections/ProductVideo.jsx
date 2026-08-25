import { useState, useRef } from 'react';
import { FaPlay, FaTimes, FaExpand } from 'react-icons/fa';
import Section from '../components/ui/Section';

const ProductVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const videoSrc = "/videos/tiktok.mp4";
  const posterSrc = "/images/tiktok-video-poster.png";

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(err => console.log("Video play pending: ", err));
        setIsPlaying(true);
      }
    }
  };

  const openFullscreenModal = () => {
    setIsFullscreen(true);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const closeFullscreenModal = () => {
    setIsFullscreen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  return (
    <Section
      id="product-video"
      title="Product Showcase"
      subtitle="See Our Henna Cones in Action"
      background="bg-accent"
      padding="py-8 md:py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative group rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 bg-red-700 aspect-video flex items-center justify-center">
          {/* HTML5 Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            controls
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Overlay (Shown only when not playing) */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/20 cursor-pointer z-10"
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-secondary">
                <FaPlay className="text-xl md:text-2xl ml-1 text-accent" />
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Full View Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-999 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeFullscreenModal}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-50 p-2 cursor-pointer"
          >
            <FaTimes />
          </button>

          <div className="w-full max-w-5xl aspect-video relative">
            <video
              ref={modalVideoRef}
              src={videoSrc}
              poster={posterSrc}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default ProductVideo;
