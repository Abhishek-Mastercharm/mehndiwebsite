import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Eagerly loaded components (above the fold)
import Head from './seo/Head';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import FeaturesStrip from './sections/FeaturesStrip';

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
            <OtherProducts />
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
