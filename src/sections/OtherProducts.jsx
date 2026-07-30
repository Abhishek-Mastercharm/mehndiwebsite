import React, { useState, useEffect } from "react";
import Section from "../components/ui/Section";
import ReusableLightbox from "../components/ui/ReusableLightbox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OtherProducts = () => {
  const sliderImages = [
    {
      id: 1,
      src: "/images/slider/silder (1).png",
      alt: "Hair Dye & Hair Care",
    },
    { id: 2, src: "/images/slider/silder (2).png", alt: "Beauty & Cosmatics" },
    {
      id: 3,
      src: "/images/slider/silder (3).png",
      alt: "Traditional Beauty Products",
    },
    { id: 4, src: "/images/slider/silder (4).png", alt: "Accessories" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <Section
        id="other-products"
        title="Other Categories"
        subtitle="Beyond Cones"
        padding="py-2 md:py-4"
        background="bg-active-sections"
      >
        <div className="relative py-0.5 overflow-hidden">
          {/* Slider Area */}
          <div
            className="relative flex items-center justify-center h-[320px] md:h-[430px] lg:h-[520px]"
            style={{ perspective: "1400px" }}
          >
            {sliderImages.map((image, index) => {
              let offset = index - currentSlide;

              if (offset < -Math.floor(sliderImages.length / 2))
                offset += sliderImages.length;

              if (offset > Math.floor(sliderImages.length / 2))
                offset -= sliderImages.length;

              const isActive = offset === 0;

              const translateX = offset * (isMobile ? 140 : 340);

              const scale = isActive ? 1.05 : 0.82;

              const rotateY = offset * -15;

              const opacity = isActive ? 1 : 0.45;

              return (
                <div
                  key={image.id}
                  onClick={() => {
                    setLightboxIndex(index);
                    setIsLightboxOpen(true);
                  }}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-2xl bg-white border border-[var(--color-border)] shadow-xl
                    ${
                      isActive
                        ? "w-[320px] md:w-[520px] lg:w-[700px]"
                        : "w-[220px] md:w-[360px] lg:w-[460px]"
                    }
                    aspect-[16/10]`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-[var(--color-secondary)] transition"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-[var(--color-secondary)] transition"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-1 gap-3">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-3 bg-[var(--color-secondary)]"
                    : "w-3 h-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {isLightboxOpen && (
        <ReusableLightbox
          images={sliderImages}
          currentIndex={lightboxIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === sliderImages.length - 1 ? 0 : prev + 1,
            )
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === 0 ? sliderImages.length - 1 : prev - 1,
            )
          }
        />
      )}
    </>
  );
};

export default OtherProducts;
