import React, { useState } from 'react';
import Section from '../components/ui/Section';
import ReusableLightbox from '../components/ui/ReusableLightbox';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/images/gallery/gallery (1).webp", alt: "Gallery 1" },
    { id: 2, src: "/images/gallery/gallery (2).webp", alt: "Gallery 2" },
    { id: 3, src: "/images/gallery/gallery (3).webp", alt: "Gallery 3" },
    { id: 4, src: "/images/gallery/gallery (4).webp", alt: "Gallery 4" },
    { id: 5, src: "/images/gallery/gallery (5).webp", alt: "Gallery 5" },
    { id: 6, src: "/images/gallery/gallery (6).webp", alt: "Gallery 6" },
    { id: 7, src: "/images/gallery/gallery (7).webp", alt: "Gallery 7" },
    { id: 8, src: "/images/gallery/gallery (8).webp", alt: "Gallery 8" },
    { id: 9, src: "/images/gallery/gallery (9).webp", alt: "Gallery 9" },
    { id: 10, src: "/images/gallery/gallery (10).webp", alt: "Gallery 10" },
    { id: 11, src: "/images/gallery/gallery (11).webp", alt: "Gallery 11" },
    { id: 12, src: "/images/gallery/gallery (12).webp", alt: "Gallery 12" },
    { id: 13, src: "/images/gallery/gallery (13).webp", alt: "Gallery 13" },
    { id: 14, src: "/images/gallery/gallery (14).webp", alt: "Gallery 14" },
    { id: 15, src: "/images/gallery/gallery (15).webp", alt: "Gallery 15" },
    { id: 16, src: "/images/gallery/gallery (16).webp", alt: "Gallery 16" },
    { id: 17, src: "/images/gallery/gallery (17).webp", alt: "Gallery 17" },
    { id: 18, src: "/images/gallery/gallery (18).webp", alt: "Gallery 18" },
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
              className="aspect-square bg-background rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
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
