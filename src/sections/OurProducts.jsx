import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const OurProducts = () => {
  const products = [
    {
      name: "Red Cone",
      description: "Fast colour & dark stain",
      image: "/images/product1.png"
    },
    {
      name: "Black Cone",
      description: "Deep black colour",
      image: "/images/product2.png"
    },
    {
      name: "Bridal Cone",
      description: "Rich & long lasting",
      image: "/images/product3.png"
    },
    {
      name: "Herbal Cone",
      description: "100% herbal natural",
      image: "/images/product4.png"
    },
  ];

  return (
    <Section 
      id="products" 
      title="Our Premium Products" 
      subtitle="Discover Perfection"
      background="bg-[var(--color-accent)]"
      padding="py-8 md:py-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3">
        {products.map((product, index) => (
          <Card key={index} variant="product" className="group p-2">
            <div className="w-full bg-[var(--color-background)] rounded-lg mb-2 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-sm font-bold font-['Playfair_Display'] text-[var(--color-primary)] mb-1 uppercase text-center">
              {product.name}
            </h3>
            <p className="text-[var(--color-muted)] text-xs text-center">
              {product.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default OurProducts;
