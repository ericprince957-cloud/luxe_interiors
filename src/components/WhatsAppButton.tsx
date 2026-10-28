import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hello! I visited your website and would like to enquire about your furniture.'
    );
    window.open(`https://wa.me/${businessConfig.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </button>
  );
}
