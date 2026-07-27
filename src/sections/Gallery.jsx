import React, { useState } from 'react';
import Section from '../components/ui/Section';
import ReusableLightbox from '../components/ui/ReusableLightbox';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/gallery/sample (1).jpeg', alt: 'Gallery 1' },
    { id: 2, src: '/images/gallery/sample (2).jpeg', alt: 'Gallery 2' },
    { id: 3, src: '/images/gallery/sample (3).jpeg', alt: 'Gallery 3' },
    { id: 4, src: '/images/gallery/sample (4).jpeg', alt: 'Gallery 4' },
    { id: 5, src: '/images/gallery/sample (5).png', alt: 'Gallery 5' },
    { id: 6, src: '/images/gallery/sample (6).png', alt: 'Gallery 6' },
    { id: 7, src: '/images/gallery/sample (7).png', alt: 'Gallery 7' },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Section
        id="gallery"
        title="Gallery"
        subtitle="Behind The Scenes"
        padding="py-8 md:py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="aspect-square bg-[var(--color-background)] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Reusable Lightbox */}
      {isLightboxOpen && (
        <ReusableLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default Gallery;
