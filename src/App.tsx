import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductModal from './components/ProductModal';
import CustomOrder from './components/CustomOrder';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './data/products';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    // Scroll to products section
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleExplore = () => {
    setActiveCategory('all');
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomOrder = () => {
    document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onCategoryClick={handleCategoryClick} />
      
      <Hero onExplore={handleExplore} onCustomOrder={handleCustomOrder} />
      
      <Categories onCategoryClick={handleCategoryClick} />
      
      <div ref={productsRef}>
        <Products
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onProductClick={setSelectedProduct}
        />
      </div>
      
      <CustomOrder />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <Location />
      
      <Footer onCategoryClick={handleCategoryClick} />
      
      <WhatsAppButton />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
