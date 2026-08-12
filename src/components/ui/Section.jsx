import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  title,
  subtitle,
  description,
  children,
  background = 'bg-background',
  padding = 'py-16 md:py-24',
  alignment = 'center',
  className = '',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <section id={id} className={`${background} ${padding} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {(title || subtitle || description) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl mb-6 md:mb-8 ${alignments[alignment]}`}
          >
            {subtitle && (
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 font-serif">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted text-lg md:text-xl">
                {description}
              </p>
            )}
            {/* Decorative divider for center alignment */}
            {alignment === 'center' && title && (
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-12 bg-border"></div>
                <div className="w-2 h-2 rounded-full bg-secondary mx-2"></div>
                <div className="h-px w-12 bg-border"></div>
              </div>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;
