import React, { lazy, Suspense, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Eagerly loaded components (above the fold)
import Head from './seo/Head';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import FeaturesStrip from './sections/FeaturesStrip';
import StencilsCTA from './sections/StencilsCTA';
import MehndiStencils from './sections/MehndiStencils';

// Lazy loaded components (below the fold)
const About = lazy(() => import('./sections/About'));
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs'));
const OurProducts = lazy(() => import('./sections/OurProducts'));
const OtherProducts = lazy(() => import('./sections/OtherProducts'));
const ExportCountries = lazy(() => import('./sections/ExportCountries'));
const BecomeDistributor = lazy(() => import('./sections/BecomeDistributor'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading fallback for lazy components
const SectionLoader = () => (
  <div className="w-full py-24 flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-[var(--color-secondary)] rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showOtherCategories, setShowOtherCategories] = useState(false);

  const goToStencils = () => setCurrentPage('stencils');
  const goToHome = () => setCurrentPage('home');

  // Mehndi Stencils Page
  if (currentPage === 'stencils') {
    return (
      <HelmetProvider>
        <Head />
        <MehndiStencils onBack={goToHome} />
      </HelmetProvider>
    );
  }

  // Home Page
  return (
    <HelmetProvider>
      <Head />
      <div className="min-h-screen flex flex-col font-['Inter']">
        {/* <Navbar />   */}

        <main className="flex-grow">
          <Hero />
          <FeaturesStrip />

          <Suspense fallback={<SectionLoader />}>
            {/* <About /> */}
            {/* <WhyChooseUs /> */}
            <OurProducts />
            {/* Stencils CTA Button - Before Other Categories */}
            <StencilsCTA onClick={goToStencils} />

            {/* Show More / Less Toggle Button */}
            <div className="w-full bg-[var(--color-accent)] pb-4">
              <div className="container mx-auto flex justify-center">
                <button
                  onClick={() => setShowOtherCategories(!showOtherCategories)}
                  className="px-4 py-1.5 text-sm font-medium rounded border transition-colors duration-200
                 hover:bg-[var(--color-primary)] hover:text-white"
                  style={{
                    color: "var(--color-primary)",
                    borderColor: "var(--color-primary)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showOtherCategories
                    ? "Hide Other Categories"
                    : "Show Other Categories"}
                </button>
              </div>
            </div>

            {/* Other Categories - Conditional Render */}
            {showOtherCategories && <OtherProducts />}

            {/* <ExportCountries /> */}
            {/* <BecomeDistributor /> */}
            <Gallery />
            {/* <Testimonials /> */}
            {/* <FAQ /> */}
            {/* <Contact /> */}
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
