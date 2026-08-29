import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const OurProducts = () => {
  const products = [
    {
      name: "Red Cone",
      description: "Fast colour & dark stain",
      image: "/images/product1.webp",
      seoAlt: "TIK TOK Red Cone mehndi - fast colour dark stain premium export quality natural henna cone for bridal and professional mehndi artists"
    },
    {
      name: "Black Cone",
      description: "Deep black colour",
      image: "/images/product2.webp",
      seoAlt: "TIK TOK Black Cone henna - deep black colour high quality ready to use mehndi cone for stylish festival and Arabic designs"
    },
    {
      name: "Bridal Cone",
      description: "Rich & long lasting",
      image: "/images/product3.webp",
      seoAlt: "TIK TOK Bridal Cone mehndi - rich long lasting stain professional bridal mehndi cone for weddings, Karva Chauth and special occasions"
    },
    {
      name: "Herbal Cone",
      description: "100% herbal natural",
      image: "/images/product4.webp",
      seoAlt: "TIK TOK Herbal Cone - 100% herbal natural henna cone safe fresh mehndi for sensitive skin, kids and traditional Indian mehndi designs"
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
            <div className="w-full bg-background rounded-lg mb-2 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.seoAlt} 
                title={`${product.name} - ${product.description} - TIK TOK Mehndi premium export quality henna cones`}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-sm font-bold font-serif text-primary mb-1 uppercase text-center">
              {product.name}
            </h3>
            <p className="text-muted text-xs text-center">
              {product.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default OurProducts;
