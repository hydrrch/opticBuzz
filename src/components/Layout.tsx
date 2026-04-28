import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Eye, Menu, X, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '../store/useCartStore';

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <div className="min-h-screen flex flex-col bg-navy-900 text-pearl">
      {/* Top Bar */}
      <div className="bg-gold-500 text-navy-900 text-[10px] uppercase tracking-[.2em] py-2 px-8 flex justify-between items-center font-bold z-50">
        <div className="flex gap-6">
          <span className="flex items-center gap-1">Free Shipping Across Pakistan over Rs. 5,000</span>
          <span className="hidden md:flex items-center gap-1">Cash on Delivery Available</span>
        </div>
        <div className="hidden md:flex gap-4">
          <Link to="/track-order" className="hover:opacity-70 transition-opacity">Track Order</Link>
          <Link to="/find-store" className="hover:opacity-70 transition-opacity">Store Locator</Link>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-8 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-navy-900/90 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-navy-900 rounded-full group-hover:scale-110 transition-transform"></div>
            </div>
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white uppercase">
              Opti <span className="text-gold-500 italic">Buzz</span>
            </span>
          </Link>

          <nav className="hidden lg:flex gap-10 items-center">
            {['Eyeglasses', 'Sunglasses', 'Contact Lenses', 'Prescription'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Prescription' ? '/upload-prescription' : `/shop?category=${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-semibold text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-[0.15em]"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-gold-500 transition-colors">
              <Search size={14} className="text-gray-500" />
              <input type="text" placeholder="Search..." className="bg-transparent text-xs w-24 ml-2 outline-none text-white" />
            </div>
            
            <Link to="/cart" className="relative group text-white hover:text-gold-500 transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-navy-900 text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-black">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gold-500 transition-colors">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-navy-900 z-[70] p-8 shadow-2xl border-r border-white/10"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-display font-bold text-white uppercase tracking-tighter">Opti<span className="text-gold-500">Buzz</span></span>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
              </div>
              <div className="flex flex-col gap-8">
                 {['Eyeglasses', 'Sunglasses', 'Contact Lenses', 'Prescription'].map((item) => (
                  <Link 
                    key={item} 
                    to={item === 'Prescription' ? '/upload-prescription' : `/shop?category=${item.toLowerCase().replace(' ', '-')}`}
                    className="text-xl font-display font-medium text-white uppercase tracking-widest border-b border-white/5 pb-4 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-12 flex flex-col gap-4 text-xs uppercase tracking-widest text-gray-500 font-bold">
                 <Link to="/track-order">Track Your Order</Link>
                 <Link to="/stores">Store Locator</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-950 text-white pt-24 pb-12 px-4 md:px-8 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <span className="text-3xl font-display font-bold tracking-tighter uppercase">
              Opti<span className="text-gold-500 italic">Buzz</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Designing the future of vision in Pakistan. Premium artisan eyewear crafted with high-precision engineering and visionary elegance.
            </p>
            <div className="flex gap-4 grayscale opacity-40">
              <span className="text-[10px] font-black tracking-tighter">VISA</span>
              <span className="text-[10px] font-black tracking-tighter">JAZZCASH</span>
              <span className="text-[10px] font-black tracking-tighter">EASYPAISA</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gold-500 mb-8">Curation</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><Link to="/shop?category=eyeglasses" className="hover:text-gold-500 transition-colors">Eyeglasses</Link></li>
              <li><Link to="/shop?category=sunglasses" className="hover:text-gold-500 transition-colors">Sunglasses</Link></li>
              <li><Link to="/shop?category=contact-lenses" className="hover:text-gold-500 transition-colors">Contact Lenses</Link></li>
              <li><Link to="/upload-prescription" className="hover:text-gold-500 transition-colors">Prescription Guard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gold-500 mb-8">Concierge</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><Link to="/faq" className="hover:text-gold-500 transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-gold-500 transition-colors">Delivery Logistics</Link></li>
              <li><Link to="/track-order" className="hover:text-gold-500 transition-colors">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Support center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gold-500 mb-8">Newsletter</h4>
            <div className="space-y-6">
              <p className="text-xs text-gray-500 font-light leading-relaxed">Join our inner circle for exclusive access to Pakistani limited drops.</p>
              <div className="flex border-b border-white/10 pb-2 focus-within:border-gold-500 transition-all">
                <input 
                  type="email" 
                  placeholder="EMAIL@ADDRESS.COM" 
                  className="bg-transparent text-[10px] w-full outline-none text-white tracking-widest placeholder:text-gray-700"
                />
                <button className="text-gold-500 text-[10px] font-black uppercase tracking-[.2em] pl-4 hover:text-white transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[.3em] text-gray-600 font-bold">
          <p>© 2026 OPTI BUZZ PAKISTAN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
