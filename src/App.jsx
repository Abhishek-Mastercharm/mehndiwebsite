import { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Eagerly loaded components (above the fold)
import Head from './seo/Head';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import FeaturesStrip from './sections/FeaturesStrip';
import StencilsCTA from './sections/StencilsCTA';
import MehndiStencils from './sections/MehndiStencils';
import OurBlogs from './sections/OurBlogs';
import BlogDetails from './components/blogs/BlogDetails';

// Lazy loaded components (below the fold) - only existing files
const OurProducts = lazy(() => import('./sections/OurProducts'));
const OtherProducts = lazy(() => import('./sections/OtherProducts'));
const Gallery = lazy(() => import('./sections/Gallery'));

// Loading fallback for lazy components
const SectionLoader = () => (
  <div className="w-full py-24 flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
  </div>
);

// HomePage Component with Show More toggle
const HomePage = () => {
  const navigate = useNavigate();
  const [showOtherCategories, setShowOtherCategories] = useState(false);
  const goToStencils = () => {
    window.scrollTo(0, 0);
    navigate('/mehndi-stencils');
  };

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Head 
        title="TIK TOK Mehndi - Premium Export Quality Henna Cones" 
        description="TIK TOK Mehndi manufactures and exports premium, 100% natural henna mehndi cones. Smooth flow, rich red stain - trusted by bridal mehndi artists, wholesalers and retailers worldwide." 
      />
      <main className="grow">
        <Hero />
        <FeaturesStrip />

        <Suspense fallback={<SectionLoader />}>
          {/* <About /> */}
          {/* <WhyChooseUs /> */}
          <OurProducts />
          {/* Stencils CTA Button - Before Other Categories */}
          <StencilsCTA onClick={goToStencils} />

          {/* Show More / Less Toggle Button */}
          <div className="w-full bg-accent pb-4">
            <div className="container mx-auto flex justify-center">
              <button
                onClick={() => setShowOtherCategories(!showOtherCategories)}
                className="px-4 py-1.5 text-sm font-medium rounded border transition-colors duration-200
                 hover:bg-primary hover:text-white"
                style={{
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                {showOtherCategories
                  ? 'Hide Other Categories'
                  : 'Show Other Categories'}
              </button>
            </div>
          </div>

          {/* Other Categories - Conditional Render */}
          {showOtherCategories && <OtherProducts />}

          {/* <ExportCountries /> */}
          {/* <BecomeDistributor /> */}
          <Gallery />
          {/* <Testimonials /> */}
          {/* <FAQ /> */}
          {/* <Contact /> */}
        </Suspense>
      </main>
    </div>
  );
};

// Stencils Page
const StencilsPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Head 
        title="Easy Mehndi Stencils Designs - TIK TOK Mehndi" 
        description="Explore premium reusable Mehndi stencils by TIK TOK Mehndi. Beautiful patterns, easy to apply, perfect for weddings, Eid, Diwali and quick henna designs." 
      />
      <main className="grow">
        <MehndiStencils />
      </main>
    </div>
  );
};

// Blogs Page
const BlogsPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Head 
        title="Latest Mehndi Blogs & Henna Tips - TIK TOK Mehndi" 
        description="Read our expert tips on how to get dark mehndi color naturally, best festival design ideas, and professional product guides." 
      />
      <main className="grow">
        <OurBlogs />
      </main>
    </div>
  );
};

// Navbar wrapper with router callbacks
const NavbarWithRouter = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      onGoToStencils={() => {
        window.scrollTo(0, 0);
        navigate('/mehndi-stencils');
      }}
      onGoToBlogs={() => {
        window.scrollTo(0, 0);
        navigate('/blogs');
      }}
      onGoToHome={() => {
        window.scrollTo(0, 0);
        navigate('/');
      }}
    />
  );
};

// Blog Details Page wrapper
const BlogDetailsPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <main className="grow">
        <BlogDetails />
      </main>
    </div>
  );
};

// Layout wrapper with Navbar and Footer
const Layout = ({ children }) => {
  return (
    <>
      <NavbarWithRouter />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          {/* Mehndi Stencils */}
          <Route
            path="/mehndi-stencils"
            element={
              <Layout>
                <StencilsPage />
              </Layout>
            }
          />

          {/* Blogs Listing */}
          <Route
            path="/blogs"
            element={
              <Layout>
                <BlogsPage />
              </Layout>
            }
          />

          {/* Blog Details */}
          <Route
            path="/blogs/:slug"
            element={
              <Layout>
                <BlogDetailsPage />
              </Layout>
            }
          />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
