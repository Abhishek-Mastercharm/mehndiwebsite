import React from 'react';

const StencilsCTA = ({ onClick }) => {
  return (
    <div className="w-full bg-accent py-4 px-4">
      <div className="container mx-auto flex justify-center">
        <button
          onClick={onClick}
          className="relative px-8 py-3 md:px-12 md:py-4 rounded-lg font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-secondary)',
            border: '2px solid var(--color-secondary)',
            boxShadow: `0 0 0 2px var(--color-primary), 0 0 0 4px var(--color-secondary), 0 4px 20px rgba(184, 134, 11, 0.3)`,
            cursor: "pointer",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Mehndi Stencils Collection
          </span>
          {/* Golden corner accents */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: 'var(--color-secondary)' }}></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: 'var(--color-secondary)' }}></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: 'var(--color-secondary)' }}></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: 'var(--color-secondary)' }}></span>
        </button>
      </div>
    </div>
  );
};

export default StencilsCTA;
