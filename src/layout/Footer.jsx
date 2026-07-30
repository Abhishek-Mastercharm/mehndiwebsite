import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white">
      {/* Contact Strip */}
      <div className="w-full border-b border-[var(--color-secondary)]/30">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
          {/* Always horizontal layout on all screens with a balanced gap */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16">
            {/* Phone Number */}
            <a
              href="tel:+919501311070"
              className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-white transition-colors group"
            >
              {/* Added scale-x-[-1] to flip the phone icon horizontally */}
              <span className="bg-[var(--color-secondary)]/20 p-2 rounded-full group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                <FaPhone className="w-5 h-5 md:w-6 md:h-6 scale-x-[-1]" />
              </span>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-80">
                  Call Us
                </div>
                <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                  +91 9501311070
                </div>
              </div>
            </a>

            {/* Email Address */}
            <a
              href="mailto:aditya.marsexim@gmail.com"
              className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-white transition-colors group"
            >
              <span className="bg-[var(--color-secondary)]/20 p-2 rounded-full group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-80">
                  Email Us
                </div>
                <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                  aditya.marsexim@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="text-center">
            <p className="text-xs md:text-sm opacity-80">
              © {new Date().getFullYear()} TIK TOK | टिक टोक. All Rights
              Reserved.
            </p>
            <p className="text-[10px] md:text-xs opacity-60 mt-1">
              Premium Export Quality Mehndi Products
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
