import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Visit Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Visit Our Showroom
          </h2>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto text-lg">
            Come see and feel the quality of our furniture in person
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-beige/20 h-[300px] md:h-[400px]">
            <iframe
              src={businessConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Showroom Location"
              className="w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-cream rounded-xl">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Showroom Address</h4>
                <p className="text-text/60 text-sm">
                  {businessConfig.address.street},<br />
                  {businessConfig.address.city}, {businessConfig.address.state},<br />
                  {businessConfig.address.country}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-cream rounded-xl">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Opening Hours</h4>
                <p className="text-text/60 text-sm">{businessConfig.hours.weekdays}</p>
                <p className="text-text/60 text-sm">{businessConfig.hours.weekends}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-cream rounded-xl">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                <p className="text-text/60 text-sm">{businessConfig.phone.number}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent('Hello, I would like to enquire about your furniture.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={businessConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/80 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
