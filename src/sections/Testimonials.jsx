import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Grid } from '../layout';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "TIK TOK Mehndi cones give the best colour and our customers love it.",
      country: "Nigeria",
    },
    {
      text: "High quality, best packaging and on time delivery.",
      country: "Ghana",
    },
    {
      text: "Trusted brand in our market. Very satisfied with the products.",
      country: "Kenya",
    }
  ];

  return (
    <Section id="testimonials" background="bg-[var(--color-background)]" title="What Our Clients Say">
      <Grid cols={1} md={3} gap={6}>
        {testimonials.map((test, index) => (
          <Card key={index} variant="testimonial" className="text-left group hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
            <FaQuoteLeft className="text-3xl text-[var(--color-secondary)] mb-4 opacity-50 group-hover:opacity-100" />
            <p className="font-medium text-lg mb-6 leading-relaxed group-hover:text-white/90">
              "{test.text}"
            </p>
            <p className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              - {test.country}
            </p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;
