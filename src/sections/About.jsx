import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import { Grid } from '../layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" background="bg-[var(--color-background)]">
      <Grid cols={1} md={2} gap={12} className="items-center">
        {/* Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square bg-[var(--color-border)] rounded-2xl flex items-center justify-center relative overflow-hidden"
        >
          <span className="text-[var(--color-primary)] opacity-50 font-medium">About Image Placeholder</span>
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[var(--color-primary)] m-4"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[var(--color-primary)] m-4"></div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[var(--color-primary)] mb-6">
            Legacy of Excellence in Mehndi Export
          </h2>
          <p className="text-[var(--color-text)] opacity-80 mb-4 leading-relaxed text-lg">
            TIK TOK has been a pioneer in manufacturing and exporting premium quality henna products. Our commitment to natural ingredients and international quality standards has made us the trusted choice for professionals worldwide.
          </p>
          <p className="text-[var(--color-text)] opacity-80 mb-8 leading-relaxed">
            Every cone we produce undergoes rigorous quality checks to ensure a rich, dark stain, smooth application, and absolute safety for the skin.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="border-l-2 border-[var(--color-secondary)] pl-4">
              <div className="text-3xl font-bold text-[var(--color-primary)]">20+</div>
              <div className="text-sm font-medium text-[var(--color-muted)]">Years of Experience</div>
            </div>
            <div className="border-l-2 border-[var(--color-secondary)] pl-4">
              <div className="text-3xl font-bold text-[var(--color-primary)]">50+</div>
              <div className="text-sm font-medium text-[var(--color-muted)]">Export Countries</div>
            </div>
          </div>
        </motion.div>
      </Grid>
    </Section>
  );
};

export default About;
