import React from 'react';
import Section from '../components/ui/Section';
import { FaArrowLeft } from 'react-icons/fa';

const OurBlogs = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[var(--color-accent)]">
      {/* Back Button Bar */}
      {/* <div className="w-full bg-[var(--color-primary)] py-4 px-4 md:px-8 shadow-md">
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

      {/* Page Content - Empty for now, will design later */}
      <Section
        title="Our Blogs"
        subtitle="Latest Articles & Updates"
        padding="py-8 md:py-12"
      >
        <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-primary)]/10 mb-6">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-3">
              Blogs Coming Soon
            </h3>
            <p className="text-[var(--color-muted)] max-w-md mx-auto">
              We are working on creating amazing content for you. Check back soon!
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OurBlogs;
