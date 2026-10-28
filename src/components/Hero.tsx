import { ArrowRight, Palette } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onCustomOrder: () => void;
}

export default function Hero({ onExplore, onCustomOrder }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&crop=center"
          alt="Premium furniture showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-white/90 text-sm font-medium">Premium Furniture Collection</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Furniture Designed for{' '}
            <span className="text-gold">Comfort.</span>
            <br />
            Crafted to Last.
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
            Discover beautifully crafted sofas, beds, dining sets, and custom furniture designed to transform your space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExplore}
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Explore Collection
              <ArrowRight size={20} />
            </button>
            <button
              onClick={onCustomOrder}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-200"
            >
              <Palette size={20} />
              Request Custom Furniture
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Furniture Designs</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">5★</div>
              <div className="text-sm text-white/60">Quality Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
