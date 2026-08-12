import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ onGoToStencils, onGoToBlogs, onGoToHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Mehndi Stencils",
      action: () => {
        setMobileMenuOpen(false);
        onGoToStencils?.();
      },
    },
    {
      name: "Our Blogs",
      action: () => {
        setMobileMenuOpen(false);
        onGoToBlogs?.();
      },
    },
  ];

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    onGoToHome?.();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-12 md:h-16 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className={`flex items-center cursor-pointer transition-all duration-300 ${
              isScrolled
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <span className="text-lg md:text-2xl font-bold font-serif tracking-wider text-primary">
              TIK TOK | टिक टोक
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-300 ${
              isScrolled
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="text-text hover:text-secondary font-semibold text-sm md:text-base transition-colors uppercase tracking-wide cursor-pointer bg-transparent border-none p-0"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-primary text-xl bg-transparent border-none cursor-pointer p-1 transition-all duration-300 ${
              isScrolled
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-70 bg-background flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-border">
            <span className="text-lg font-bold font-serif text-primary">
              TIK TOK | टिक टोक
            </span>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl text-primary bg-transparent border-none cursor-pointer"
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="text-lg font-medium text-text text-left border-b border-border pb-3 bg-transparent border-t-0 border-l-0 border-r-0 transition-colors hover:text-secondary"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
