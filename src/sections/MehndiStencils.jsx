import { useState } from 'react';
import Section from '../components/ui/Section';
import ReusableLightbox from '../components/ui/ReusableLightbox';

// Edit this array to add/remove/update stencil images
// Just change the number in the filename and extension as needed
const stencilImages = [
  { id: 1, src: "/images/mehndiStencils/stencils (1).webp", alt: "Reusable bridal mehndi stencil full hand design - easy apply premium TIK TOK Mehndi henna stencil for weddings and bridal artists" },
  { id: 2, src: "/images/mehndiStencils/stencils (2).webp", alt: "Arabic mehndi stencil pattern - quick henna design template ready to use professional mehndi stencil collection India" },
  { id: 3, src: "/images/mehndiStencils/stencils (3).webp", alt: "Simple easy mehndi stencil for beginners - floral hand design reusable henna sticker stencil for girls and festival" },
  { id: 4, src: "/images/mehndiStencils/stencils (4).webp", alt: "Indian traditional bridal mehndi stencil back hand - premium quality henna stencil designs for mehndi artist salon" },
  { id: 5, src: "/images/mehndiStencils/stencils (5).webp", alt: "Eid special mehndi stencil design - fast apply henna template stencil for festival celebration TIK TOK Mehndi products" },
  { id: 6, src: "/images/mehndiStencils/stencils (6).webp", alt: "Gol tikki mandala mehndi stencil pattern - reusable easy henna stencil for Diwali Karva Chauth traditional occasion" },
  { id: 7, src: "/images/mehndiStencils/stencils (7).webp", alt: "Peacock border mehndi stencil full hand - bridal wedding henna design stencil professional artist supply premium" },
  { id: 8, src: "/images/mehndiStencils/stencils (8).webp", alt: "Bracelet band style mehndi stencil - cute simple henna template for girls parties and small function quick apply" },
  { id: 9, src: "/images/mehndiStencils/stencils (9).webp", alt: "Heart engagement mehndi stencil design - romantic henna pattern stencil for wedding party couple function mehndi" },
  { id: 10, src: "/images/mehndiStencils/stencils (10).webp", alt: "Finger mehndi stencil set mix match designs - modern stylish henna stencil collection easy apply for beginners ladies" },
  { id: 11, src: "/images/mehndiStencils/stencils (11).webp", alt: "Full front hand bridal mehndi stencil - heavy work premium export quality henna design template for professional studio" },
  { id: 12, src: "/images/mehndiStencils/stencils (12).webp", alt: "Half hand simple mehndi stencil - Diwali quick henna design reusable stencil safe natural mehndi pattern template" },
  { id: 13, src: "/images/mehndiStencils/stencils (13).webp", alt: "Back hand floral mehndi stencil Eid collection - beautiful pattern henna stencil wholesale retail online India" },
  { id: 14, src: "/images/mehndiStencils/stencils (14).webp", alt: "Traditional heavy bridal mehndi stencil both hand - premium TIK TOK Mehndi stencils bulk order best price wholesale" },
  { id: 15, src: "/images/mehndiStencils/stencils (15).webp", alt: "Simple festival mehndi stencil quick apply - smooth design henna template for kids and ladies easy mehndi at home" },
  { id: 16, src: "/images/mehndiStencils/stencils (16).webp", alt: "Latest 2026 mehndi stencil bridal collection - premium henna stencil designs supplier mehndi artist salon reusable pack" },
  { id: 17, src: "/images/mehndiStencils/stencils (17).webp", alt: "Premium bridal mehndi stencil set - wedding special henna patterns TIK TOK Mehndi stencils official products online India" },
];

const MehndiStencils = () => {
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
                className="aspect-square bg-background rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center shadow-md hover:shadow-lg border border-border"
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
