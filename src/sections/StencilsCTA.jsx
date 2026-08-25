const StencilsCTA = ({ onClick }) => {
  return (
    <div className="w-full bg-accent py-3 px-4">
      <div className="container mx-auto flex justify-center">
        <button
          onClick={onClick}
          className="relative px-5 py-2.5 md:px-6 md:py-3 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-secondary)",
            border: "2px solid var(--color-secondary)",
            boxShadow:
              "0 0 0 2px var(--color-primary), 0 0 0 4px var(--color-secondary), 0 4px 16px rgba(184, 134, 11, 0.25)",
            cursor: "pointer",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>

            <span>Mehndi Stencils Collection</span>
          </span>

          {/* Golden corner accents */}
          <span
            className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2"
            style={{ borderColor: "var(--color-secondary)" }}
          />
          <span
            className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2"
            style={{ borderColor: "var(--color-secondary)" }}
          />
          <span
            className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2"
            style={{ borderColor: "var(--color-secondary)" }}
          />
          <span
            className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2"
            style={{ borderColor: "var(--color-secondary)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default StencilsCTA;
