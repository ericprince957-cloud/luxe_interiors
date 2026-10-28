import { useState } from 'react';
import { MessageCircle, Ruler, Check, Clock } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import { businessConfig } from '../config/business';

interface ProductsProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
  onProductClick: (product: Product) => void;
}

export default function Products({ activeCategory, onCategoryChange, onProductClick }: ProductsProps) {
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categorySlug === activeCategory);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Hello, I'm interested in the ${product.name} listed on your website for ${formatPrice(product.price)}. Is it currently available?`
    );
    window.open(`https://wa.me/${businessConfig.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Featured Collection
          </h2>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto text-lg">
            Each piece is crafted with premium materials and meticulous attention to detail
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-charcoal text-white shadow-md'
                : 'bg-cream text-text/70 hover:bg-beige/50'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onCategoryChange(cat.slug)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.slug
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-cream text-text/70 hover:bg-beige/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden border border-beige/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div
                className="relative aspect-square overflow-hidden cursor-pointer bg-cream"
                onClick={() => onProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === 'Available'
                    ? 'bg-green-100 text-green-800'
                    : product.status === 'Made to Order'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.status === 'Available' && <Check size={10} className="inline mr-1" />}
                  {product.status === 'Made to Order' && <Clock size={10} className="inline mr-1" />}
                  {product.status}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 md:p-6">
                <h3
                  className="font-heading text-lg md:text-xl font-semibold text-charcoal cursor-pointer hover:text-gold transition-colors"
                  onClick={() => onProductClick(product)}
                >
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-text/50 text-sm">
                  <Ruler size={14} />
                  <span>{product.dimensions}</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-charcoal">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(product)}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-200"
                >
                  <MessageCircle size={18} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text/50 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
