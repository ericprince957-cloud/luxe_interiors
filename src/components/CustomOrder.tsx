import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    furnitureType: '',
    dimensions: '',
    fabric: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = encodeURIComponent(
      `*Custom Furniture Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Furniture Type:* ${formData.furnitureType}\n` +
      `*Preferred Dimensions:* ${formData.dimensions}\n` +
      `*Preferred Fabric/Colour:* ${formData.fabric}\n` +
      `*Additional Details:* ${formData.description}\n\n` +
      `Sent from the website custom order form.`
    );
    
    window.open(`https://wa.me/${businessConfig.whatsapp.number}?text=${message}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="custom" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Custom Furniture</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-6">
              Your Vision.{' '}
              <span className="text-gold">Our Craftsmanship.</span>
            </h2>
            <p className="text-text/70 text-lg leading-relaxed mb-8">
              Have something specific in mind? We create custom furniture tailored to your space, style, and comfort. 
              Choose your preferred dimensions, fabrics, and colours — we'll bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-gold" />
                </div>
                <span className="text-text/70">Choose any dimensions that fit your space</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-gold" />
                </div>
                <span className="text-text/70">Select from premium fabrics and colours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-gold" />
                </div>
                <span className="text-text/70">Get expert advice on design and materials</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige/20">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">Request Sent!</h3>
                <p className="text-text/60">We'll get back to you shortly via WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Request a Custom Design
                </h3>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                    placeholder="+234..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">Furniture Type *</label>
                  <select
                    name="furnitureType"
                    required
                    value={formData.furnitureType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                  >
                    <option value="">Select furniture type</option>
                    <option value="Sofa/Couch">Sofa / Couch</option>
                    <option value="Bed/Headboard">Bed / Headboard</option>
                    <option value="Dining Set">Dining Set</option>
                    <option value="Office Chair">Office Chair</option>
                    <option value="Custom Piece">Custom Piece</option>
                    <option value="Upholstery Service">Upholstery Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">Preferred Dimensions</label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                    placeholder="e.g., 2.5m × 1.2m or King Size"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">Preferred Fabric/Colour</label>
                  <input
                    type="text"
                    name="fabric"
                    value={formData.fabric}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm"
                    placeholder="e.g., Navy blue velvet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-1.5">Additional Description</label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/40 bg-cream/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-sm resize-none"
                    placeholder="Describe your ideal piece..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white py-3.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Send size={16} />
                  <span>Send Request via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
