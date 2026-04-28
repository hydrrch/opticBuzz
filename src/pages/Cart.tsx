import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center space-y-10">
          <div className="w-32 h-32 glass-panel rounded-full flex items-center justify-center mx-auto border border-white/5 bg-white/5">
            <ShoppingBag className="text-gray-400" size={48} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60">
              <div className="w-8 h-px bg-gold-500/20"></div>
              <span>Empty Selection</span>
              <div className="w-8 h-px bg-gold-500/20"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white">Your Curator's <span className="italic font-bold text-gold-500">List.</span></h1>
            <p className="text-gray-500 max-w-sm mx-auto text-sm uppercase tracking-widest leading-relaxed">It seems your collection is currently awaiting its first masterpiece.</p>
          </div>
          <Link to="/shop" className="inline-block relative group overflow-hidden bg-gold-500 text-navy-900 px-16 py-6 text-[10px] font-black uppercase tracking-[.4em] transition-all hover:text-white">
            <span className="relative z-10">Revisit Collections</span>
            <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <span>Review Selection</span> <div className="w-12 h-px bg-gold-500/20"></div> <span>{items.length} Models Selected</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter text-white leading-none">
            The <span className="italic font-bold text-gold-500">Procurement.</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-[1fr,420px] gap-20">
          <div className="space-y-10">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id} 
                  className="flex gap-10 pb-10 border-b border-white/5 group relative"
                >
                  <div className="w-36 h-44 bg-navy-800 rounded-xl overflow-hidden glass-panel border border-white/5">
                    <img src={item.image} className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[9px] font-black text-gold-500 uppercase tracking-[.4em] mb-1">{item.brand}</p>
                        <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight group-hover:text-gold-500 transition-colors">{item.name}</h3>
                        <div className="flex items-center gap-4 mt-3">
                           <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold px-3 py-1 bg-white/5 rounded-full">{item.variant || 'Standard Fit'}</span>
                           {item.prescriptionId && (
                              <div className="flex items-center gap-2 text-[9px] font-black text-gold-500 uppercase tracking-widest border border-gold-500/20 px-3 py-1 rounded-full bg-gold-500/5">
                                 <ShieldCheck size={10} /> Lens Prescription Active
                              </div>
                           )}
                        </div>
                      </div>
                      <p className="text-xl font-black text-white">PKR {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex justify-between items-end mt-8">
                      <div className="flex items-center glass-panel bg-white/5 border border-white/10 rounded-full h-12">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-12 h-full flex items-center justify-center text-gray-400 hover:text-gold-500 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-xs font-black text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-12 h-full flex items-center justify-center text-gray-400 hover:text-gold-500 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.3em] text-gray-500 hover:text-red-500 transition-colors py-2"
                      >
                        <Trash2 size={12} /> Dissolve Selection
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <aside>
            <div className="glass-panel bg-white/5 border border-white/10 p-12 sticky top-40 rounded-3xl space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500 border-b border-white/5 pb-6">Logistics & Value</h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Subtotal Value</span>
                  <span className="text-white">PKR {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Concierge Logistic</span>
                  <span className="text-emerald-500 font-black">COMPLIMENTARY</span>
                </div>
                <div className="pt-10 border-t border-white/5 flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Total Investment</span>
                    <p className="text-4xl font-display font-medium text-white tracking-tighter">PKR {total.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/checkout" className="w-full bg-gold-500 text-navy-900 py-6 text-xs font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-2xl group shadow-gold-500/10">
                  <Lock size={16} /> Secure Finalization
                </Link>
                <p className="text-[9px] text-center text-gray-600 uppercase tracking-[.2em] font-bold">Encrypted End-to-End Precision Transaction</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
