import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

interface CategoriesProps {
  onCategoryClick: (slug: string) => void;
}

export default function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section id="categories" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Browse By Category</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Shop Our Collection
          </h2>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto text-lg">
            Find the perfect piece for every room in your home
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryClick(category.slug)}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-white/70 text-xs md:text-sm mb-3 hidden sm:block">
                  {category.subtitle}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Browse Collection</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
