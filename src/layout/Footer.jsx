import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      {/* Hidden SEO keywords section - Google crawls, not visible to users */}
      <div className="sr-only">
        <h2>TIK TOK Mehndi — India&apos;s Trusted Mehndi Cone Manufacturer and Exporter</h2>
        <p>
          TIK TOK Mehndi official website India. TikTok Mehndi cones, TikTok Mehndi products, TikTok Mehndi henna,
          TikTok Mehndi official, TikTok Mehndi website, TikTok Mehndi India.
          Premium mehndi cones, henna cones, mehndi cone, henna cone. Ready made mehndi cones, ready to use mehndi cones.
          Professional mehndi cones, bridal mehndi cones for artists. Natural mehndi cones, high quality mehndi cones,
          fresh mehndi cones. Best mehndi cones, buy mehndi cones, buy henna cones online. Mehndi cones online,
          henna cones online, mehndi cone price, mehndi products online. Mehndi cone supplier, mehndi cone manufacturer,
          mehndi cone wholesale, henna cone wholesale, export quality mehndi cones India.
          Discover premium mehndi cones, henna cones, and bridal mehndi stencils by TIK TOK Mehndi.
          We manufacture and export 100 percent natural henna, red cone mehndi, black cone mehndi, bridal cones,
          and herbal mehndi cones. Smooth paste flow, rich dark long lasting stain, perfect for wedding mehndi,
          Eid mehndi, Diwali mehndi, bridal mehndi artists, mehndi cone wholesalers and mehndi retailers.
          Buy ready made mehndi cones online at best wholesale price directly from the official mehndi cone
          manufacturer and supplier in India. Export Quality Natural Henna, Bridal Special Mehndi, Wholesale Ready,
          Worldwide Shipping, Made in India.
        </p>
        <h3>How to mehndi guides and application tips</h3>
        <p>
          How to apply mehndi cone, how to use mehndi cone, how to get dark mehndi color, how to make mehndi darker,
          how to store mehndi cones, how to preserve mehndi cones, how long does mehndi take to develop,
          mehndi cone storage, mehndi application tips, mehndi tips for beginners, bridal mehndi tips, natural henna tips.
        </p>
        <h3>Mehndi designs, henna designs and stencils</h3>
        <p>
          Mehndi designs, henna designs, bridal mehndi designs, simple mehndi designs, easy mehndi designs,
          Indian mehndi designs, Arabic mehndi designs. Mehndi stencil, mehndi stencils, henna stencil designs,
          reusable mehndi stencils, bridal mehndi stencil set, ready to apply henna sticker designs.
        </p>
      </div>

      {/* Contact Strip */}
      <div className="w-full border-b border-secondary/30">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
          {/* Always horizontal layout on all screens with a balanced gap */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16">
            {/* Phone Number */}
            <a
              href="tel:+971588853984"
              className="flex items-center gap-3 text-secondary hover:text-white transition-colors group"
            >
              {/* Added scale-x-[-1] to flip the phone icon horizontally */}
              <span className="bg-secondary/20 p-2 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                <FaPhone className="w-5 h-5 md:w-6 md:h-6 scale-x-[-1]" />
              </span>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-80">
                  Call Us
                </div>
                <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                  +971-588853984
                </div>
              </div>
            </a>

            {/* Email Address */}
            <a
              href="mailto:me.overseas.llc@gmail.com"
              className="flex items-center gap-3 text-secondary hover:text-white transition-colors group"
            >
              <span className="bg-secondary/20 p-2 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-80">
                  Email Us
                </div>
                <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                  me.overseas.llc@gmail.com
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
