import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';

interface NavbarProps {
  onCategoryClick: (slug: string) => void;
}

export default function Navbar({ onCategoryClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#products' },
    { label: 'Custom Order', href: '#custom' },
    { label: 'About', href: '#why-us' },
    { label: 'Contact', href: '#location' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">L</span>
            </div>
            <span className="font-heading text-xl md:text-2xl font-semibold text-charcoal">
              {businessConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text/70 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${businessConfig.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-charcoal text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gold transition-colors duration-200"
            >
              <Phone size={14} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-beige/30 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-text/80 font-medium hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${businessConfig.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded-full text-sm font-medium mt-4"
            >
              <Phone size={14} />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
