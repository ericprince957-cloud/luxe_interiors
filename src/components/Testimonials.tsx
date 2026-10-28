import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adaeze O.',
    review: 'The Chesterfield sofa exceeded all my expectations. The quality of the upholstery is outstanding and it\'s the most comfortable piece of furniture I\'ve ever owned.',
    purchased: 'Chesterfield 3-Seater Sofa',
    rating: 5,
  },
  {
    name: 'Chinedu K.',
    review: 'I ordered a custom dining set and the craftsmanship is impeccable. They matched exactly what I had in mind. Delivery was also smooth and on time.',
    purchased: 'Premium Dining Set',
    rating: 5,
  },
  {
    name: 'Funke A.',
    review: 'My new upholstered bed is absolutely stunning. The fabric quality is premium and the headboard design is exactly what I wanted. Highly recommended!',
    purchased: 'Luxury Upholstered Bed',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Comfortable Spaces. Happy Customers.
          </h2>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto text-lg">
            See what our customers have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-beige/20 hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Quote size={18} className="text-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Review */}
              <p className="text-text/70 leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="border-t border-beige/20 pt-4">
                <div className="font-semibold text-charcoal">{testimonial.name}</div>
                <div className="text-sm text-text/50">Purchased: {testimonial.purchased}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <p className="text-center text-xs text-text/40 mt-8">
          * Demo testimonials — to be replaced with genuine customer reviews
        </p>
      </div>
    </section>
  );
}
