import { Hammer, Truck, Palette, Shield } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Quality Craftsmanship',
    description: 'Every piece is carefully crafted with attention to detail, using premium materials and time-tested techniques.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We make it convenient to receive your furniture wherever you are in Nigeria. Safe and reliable delivery.',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Choose your preferred dimensions, fabrics, and colours. We bring your unique vision to life.',
  },
  {
    icon: Shield,
    title: 'Product Warranty',
    description: 'Enjoy peace of mind with our applicable product warranty. We stand behind the quality of our work.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Built on Trust & Quality
          </h2>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto text-lg">
            We're committed to delivering exceptional furniture that exceeds your expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 md:p-8 rounded-2xl bg-cream/50 border border-beige/20 hover:border-gold/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-text/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
