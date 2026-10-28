import { X, MessageCircle, Ruler, Palette, Check, Clock, Package } from 'lucide-react';
import { Product } from '../data/products';
import { businessConfig } from '../config/business';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello, I'm interested in the ${product.name} listed on your website for ${formatPrice(product.price)}. Is it currently available?`
    );
    window.open(`https://wa.me/${businessConfig.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors shadow-md"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-cream">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium ${
              product.status === 'Available'
                ? 'bg-green-100 text-green-800'
                : product.status === 'Made to Order'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.status === 'Available' && <Check size={12} className="inline mr-1" />}
              {product.status === 'Made to Order' && <Clock size={12} className="inline mr-1" />}
              {product.status}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
              {product.category}
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-3">
              {product.name}
            </h2>
            <div className="text-3xl font-bold text-charcoal mb-6">
              {formatPrice(product.price)}
            </div>

            <p className="text-text/70 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Details Grid */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ruler size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">Dimensions</div>
                  <div className="text-sm text-text/60">{product.dimensions}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">Materials</div>
                  <div className="text-sm text-text/60">{product.materials}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">Available Colors</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.colors.map((color) => (
                      <span key={color} className="text-xs bg-cream px-2 py-1 rounded-full text-text/70">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">Fabric Options</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.fabrics.map((fabric) => (
                      <span key={fabric} className="text-xs bg-cream px-2 py-1 rounded-full text-text/70">
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Note */}
            <div className="bg-cream rounded-xl p-4 mb-6">
              <p className="text-sm text-text/70 italic">
                💡 Need a different size, fabric, or colour? Contact us for customization.
              </p>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-200"
            >
              <MessageCircle size={20} />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
