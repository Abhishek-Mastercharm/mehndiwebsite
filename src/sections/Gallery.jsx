import { useState } from 'react';
import Section from '../components/ui/Section';
import ReusableLightbox from '../components/ui/ReusableLightbox';
import Button from '../components/ui/Button';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/images/gallery/gallery (1).webp", alt: "Bridal mehndi design on hand - premium TIK TOK Mehndi henna cone rich red stain result for wedding and Karva Chauth" },
    { id: 2, src: "/images/gallery/gallery (2).webp", alt: "Arabic mehndi design full hand - professional export quality henna cone for bridal artists and festival celebration" },
    { id: 3, src: "/images/gallery/gallery (3).webp", alt: "Simple easy mehndi design for beginners - natural TIK TOK Mehndi cone smooth flow dark colour development" },
    { id: 4, src: "/images/gallery/gallery (4).webp", alt: "Indian traditional bridal mehndi back hand design - long lasting stain from premium export quality natural henna cones" },
    { id: 5, src: "/images/gallery/gallery (5).webp", alt: "Floral motif mehndi design for Eid festival - fresh ready to use TIK TOK Mehndi red cone fast colour result" },
    { id: 6, src: "/images/gallery/gallery (6).webp", alt: "Gol tikki leafy filling mehndi pattern - high quality herbal henna cone professional mehndi artist work India" },
    { id: 7, src: "/images/gallery/gallery (7).webp", alt: "Peacock feather border mehndi design for Diwali and wedding - bridal cone rich dark brown stain 48 hour result" },
    { id: 8, src: "/images/gallery/gallery (8).webp", alt: "Bracelet style band mehndi design for small gathering - quick apply ready made mehndi cone for girls and ladies" },
    { id: 9, src: "/images/gallery/gallery (9).webp", alt: "Mandala heart mehndi design engagement party - best mehndi cone wholesale supplier manufacturer export quality India" },
    { id: 10, src: "/images/gallery/gallery (10).webp", alt: "Modern mix match finger mehndi design - TIK TOK Mehndi black cone deep colour stylish Arabic pattern" },
    { id: 11, src: "/images/gallery/gallery (11).webp", alt: "Full bridal front hand mehndi - premium red cone export quality professional mehndi artist gallery portfolio" },
    { id: 12, src: "/images/gallery/gallery (12).webp", alt: "Half hand easy mehndi design for Diwali - natural henna cone safe for skin long lasting fade even not patchy" },
    { id: 13, src: "/images/gallery/gallery (13).webp", alt: "Festive back hand mehndi pattern - ready to use mehndi cone for Eid celebration TIK TOK Mehndi official product" },
    { id: 14, src: "/images/gallery/gallery (14).webp", alt: "Traditional bridal mehndi heavy work design - TIK TOK Mehndi bridal cone wholesale bulk order best price India" },
    { id: 15, src: "/images/gallery/gallery (15).webp", alt: "Simple festival mehndi design quick apply - smooth paste flow no clogs no breaks high quality natural mehndi cone" },
    { id: 16, src: "/images/gallery/gallery (16).webp", alt: "Latest mehndi design bridal collection 2026 - premium export henna cones supplier for mehndi artist studio salon" },
    { id: 17, src: "/images/gallery/gallery (17).webp", alt: "Bridal mehndi both hands full design - TIK TOK Mehndi website premium products gallery natural herbal henna stain" },
    { id: 18, src: "/images/gallery/gallery (18).webp", alt: "Professional mehndi artist work gallery - best rated export quality mehndi cone manufacturer India wholesale retail online" },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // From here we are displaying the images (Max images shwon more button)
  // If showAll is true, we display all images
  // If showAll is false, we display only the first 13 images
  // We are using slice method to get the first 13 images
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, -6);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayedImages.length - 1 : prev - 1
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
          {displayedImages.map((image, index) => (
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

        <div className="flex justify-center mt-6">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="md"
          >
            {showAll ? 'Show Less' : 'Show More Images'}
          </Button>
        </div>
      </Section>

      {/* Reusable Lightbox */}
      {isLightboxOpen && (
        <ReusableLightbox
          images={displayedImages}
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
