import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { FaArrowLeft } from 'react-icons/fa';
import ReusableLightbox from '../components/ui/ReusableLightbox';

// Edit this array to add/remove/update stencil images
// Just change the number in the filename and extension as needed
const stencilImages = [
  { id: 1, src: "/images/mehndiStencils/stencils (1).webp", alt: "Stencil 1" },
  { id: 2, src: "/images/mehndiStencils/stencils (2).webp", alt: "Stencil 2" },
  { id: 3, src: "/images/mehndiStencils/stencils (3).webp", alt: "Stencil 3" },
  { id: 4, src: "/images/mehndiStencils/stencils (4).webp", alt: "Stencil 4" },
  { id: 5, src: "/images/mehndiStencils/stencils (5).webp", alt: "Stencil 5" },
  { id: 6, src: "/images/mehndiStencils/stencils (6).webp", alt: "Stencil 6" },
  { id: 7, src: "/images/mehndiStencils/stencils (7).webp", alt: "Stencil 7" },
  { id: 8, src: "/images/mehndiStencils/stencils (8).webp", alt: "Stencil 8" },
  { id: 9, src: "/images/mehndiStencils/stencils (9).webp", alt: "Stencil 9" },
  {
    id: 10,
    src: "/images/mehndiStencils/stencils (10).webp",
    alt: "Stencil 10",
  },
  {
    id: 11,
    src: "/images/mehndiStencils/stencils (11).webp",
    alt: "Stencil 11",
  },
  {
    id: 12,
    src: "/images/mehndiStencils/stencils (12).webp",
    alt: "Stencil 12",
  },
  {
    id: 13,
    src: "/images/mehndiStencils/stencils (13).webp",
    alt: "Stencil 13",
  },
  {
    id: 14,
    src: "/images/mehndiStencils/stencils (14).webp",
    alt: "Stencil 14",
  },
  {
    id: 15,
    src: "/images/mehndiStencils/stencils (15).webp",
    alt: "Stencil 15",
  },
  {
    id: 16,
    src: "/images/mehndiStencils/stencils (16).webp",
    alt: "Stencil 16",
  },
  {
    id: 17,
    src: "/images/mehndiStencils/stencils (17).webp",
    alt: "Stencil 17",
  },
];

const MehndiStencils = ({ onBack }) => {
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
      prev === stencilImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? stencilImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="min-h-screen bg-accent">
        {/* Back Button Bar */}
        {/* <div className="w-full bg-primary py-4 px-4 md:px-8 shadow-md">
          <div className="container mx-auto flex items-center">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[var(--color-secondary)] hover:text-white transition-colors font-semibold"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </button>
          </div>
        </div> */}

        {/* Stencils Grid */}
        <Section
          title="Mehndi Stencils"
          subtitle="Premium Collection"
          padding="py-8 md:py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {stencilImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="aspect-square bg-[var(--color-background)] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center shadow-md hover:shadow-lg border border-[var(--color-border)]"
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
      </div>

      {/* Lightbox for full view */}
      {isLightboxOpen && (
        <ReusableLightbox
          images={stencilImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default MehndiStencils;
