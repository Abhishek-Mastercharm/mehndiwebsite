import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Grid } from '../layout';
import { FaLeaf, FaGlobe, FaShieldAlt, FaTruck } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaLeaf className="text-4xl text-[var(--color-secondary)] mb-4" />,
      title: "100% Natural",
      description: "Made from the finest quality herbs with zero harmful chemicals."
    },
    {
      icon: <FaGlobe className="text-4xl text-[var(--color-secondary)] mb-4" />,
      title: "International Standards",
      description: "Manufactured in a state-of-the-art facility meeting global export norms."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[var(--color-secondary)] mb-4" />,
      title: "Leak-Proof Packaging",
      description: "Premium packaging ensuring safe transit and extended shelf life."
    },
    {
      icon: <FaTruck className="text-4xl text-[var(--color-secondary)] mb-4" />,
      title: "Bulk Supply & Logistics",
      description: "Efficient global supply chain ensuring on-time delivery anywhere."
    }
  ];

  return (
    <Section 
      id="why-choose-us" 
      background="bg-[var(--color-primary)]" 
      className="text-[var(--color-accent)]"
      title="Why Partner With Us"
      subtitle="The TIK TOK Advantage"
    >
      <Grid cols={1} md={2} lg={4} gap={6}>
        {reasons.map((reason, index) => (
          <Card key={index} variant="feature" className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-colors">
            {reason.icon}
            <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
            <p className="text-white/70 text-sm">{reason.description}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default WhyChooseUs;
