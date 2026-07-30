import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Grid } from '../layout';
import { FaHandshake, FaChartLine, FaBoxOpen, FaHeadset } from 'react-icons/fa';

const BecomeDistributor = () => {
  const benefits = [
    { title: "Exclusive Territory", icon: <FaHandshake /> },
    { title: "Marketing Support", icon: <FaChartLine /> },
    { title: "Attractive Margins", icon: <FaBoxOpen /> },
    { title: "24/7 Support", icon: <FaHeadset /> },
  ];

  return (
    <Section id="distributor">
      <div className="bg-[var(--color-accent)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--color-border)]">
        <Grid cols={1} md={2} gap={8} className="items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[var(--color-primary)] mb-4">
              Become Our Distributor
            </h2>
            <p className="text-[var(--color-text)] opacity-80 mb-8 leading-relaxed">
              Grow your business with TIK TOK Mehndi. We provide the best quality products, comprehensive marketing support, and attractive margins for our global partners.
            </p>
            <Button size="lg">Apply Now</Button>
          </div>
          <div>
            <Grid cols={2} gap={4}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[var(--color-border)]">
                  <div className="text-3xl text-[var(--color-secondary)] mb-3">
                    {benefit.icon}
                  </div>
                  <span className="font-semibold text-[var(--color-text)] text-sm">{benefit.title}</span>
                </div>
              ))}
            </Grid>
          </div>
        </Grid>
      </div>
    </Section>
  );
};

export default BecomeDistributor;
