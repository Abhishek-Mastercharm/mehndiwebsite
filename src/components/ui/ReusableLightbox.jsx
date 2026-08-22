import React from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReusableLightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-999 bg-black/95 flex items-center justify-center p-2 md:p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 md:top-4 md:right-4 text-white text-xl md:text-2xl hover:text-gray-300 z-20"
      >
        <FaTimes />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-2 md:left-4 text-white text-2xl md:text-3xl hover:text-gray-300 z-20"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 text-white text-2xl md:text-3xl hover:text-gray-300 z-20"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Current Image */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          style={{ maxWidth: 'calc(100vw - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}
        />
      </div>
    </div>
  );
};

export default ReusableLightbox;
