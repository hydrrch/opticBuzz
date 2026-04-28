import { useParams, Link } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../constants';
import { Star, Truck, Shield, RotateCcw, ShoppingBag, Eye, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useCartStore } from '../store/useCartStore';

export default function ProductDetails() {
  const { id } = useParams();
  const product = SAMPLE_PRODUCTS.find(p => p.id === id) || SAMPLE_PRODUCTS[0];
  const addItem = useCartStore((state) => state.addItem);
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [lensType, setLensType] = useState('frame-only');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedColor}`,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      variant: selectedColor
    });
  };

  return (
    <div className="pt-32 pb-24 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gray-500 mb-16">
          <Link to="/" className="hover:text-gold-500 transition-colors">Atelier</Link> 
          <ChevronRight size={12} className="opacity-30" /> 
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Collections</Link> 
          <ChevronRight size={12} className="opacity-30" /> 
          <span className="text-gold-500">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr,500px] gap-24">
          {/* Product Images */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] bg-navy-800 rounded-3xl overflow-hidden glass-panel border border-white/5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/40 via-transparent to-white/5 pointer-events-none"></div>
              <img src={product.images[0]} className="w-full h-full object-contain p-12" alt={product.name} />
              
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                 <span className="bg-gold-500 text-navy-900 px-4 py-1 text-[9px] font-black uppercase tracking-[0.3em] rounded-full">Iconic Design</span>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square bg-navy-800 rounded-2xl border border-white/5 hover:border-gold-500 cursor-pointer transition-all glass-panel overflow-hidden">
                   <img src={product.images[0]} className="w-full h-full object-contain opacity-40 hover:opacity-100 transition-opacity p-4" alt="Thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-[11px] font-black text-gold-500 uppercase tracking-[0.5em] mb-2">{product.brand}</p>
                  <h1 className="text-5xl md:text-6xl font-display font-light uppercase tracking-tighter text-white leading-[0.9]">{product.name}</h1>
                </div>
                <div className="flex flex-col items-end gap-2 isolate pt-2">
                   <div className="flex items-center gap-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} className={i <= Math.floor(product.rating) ? "fill-gold-500 text-gold-500" : "text-white/10"} />)}
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{product.reviewsCount} Verfied Reviews</span>
                </div>
              </div>
              <p className="text-3xl font-display font-medium text-white tracking-widest">PKR {product.price.toLocaleString()}</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg font-medium">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Composition & Finish</h4>
               <div className="flex gap-4">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative h-12 px-8 text-[10px] font-black uppercase tracking-[.2em] transition-all overflow-hidden ${
                        selectedColor === color ? 'text-navy-900' : 'text-white glass-panel border border-white/10'
                      }`}
                    >
                      <span className="relative z-10">{color}</span>
                      <div className={`absolute inset-0 bg-gold-500 transition-transform duration-500 ${selectedColor === color ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0 text-navy-900'}`}></div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Lens Type Selection */}
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Visual Enhancement</h4>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'frame-only', title: 'Curated Frame Only', desc: 'Demo filtration lenses included' },
                    { id: 'single-vision', title: 'Precision Single Vision', desc: 'Distance or Reading correction (+ PKR 2,500)' },
                    { id: 'progressive', title: 'Advanced Progressive', desc: 'Seamless multi-focal integration (+ PKR 4,500)' }
                  ].map(type => (
                    <button 
                      key={type.id}
                      onClick={() => setLensType(type.id)}
                      className={`flex justify-between items-center p-6 border transition-all text-left group rounded-2xl relative overflow-hidden ${
                        lensType === type.id ? 'border-gold-500 bg-gold-500/5' : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                       <div className="space-y-1">
                          <p className={`text-[12px] font-black uppercase tracking-[0.2em] ${lensType === type.id ? 'text-gold-500' : 'text-white'}`}>{type.title}</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{type.desc}</p>
                       </div>
                       <div className={`w-6 h-6 border-2 transition-all rounded-full flex items-center justify-center ${lensType === type.id ? 'border-gold-500 bg-gold-500' : 'border-white/10 group-hover:border-white/30'}`}>
                          {lensType === type.id && <Check size={14} className="text-navy-900" strokeWidth={3} />}
                       </div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-[1fr,auto] gap-6 pt-10">
              <button 
                onClick={handleAddToCart}
                className="group relative overflow-hidden bg-gold-500 text-navy-900 h-20 text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4 transition-all hover:text-white"
              >
                <span className="relative z-10">Add to Procurement</span>
                <ShoppingBag size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <Link to="/try-on" className="w-20 h-20 glass-panel border border-white/10 flex items-center justify-center text-white hover:text-gold-500 hover:border-gold-500 transition-all rounded-2xl bg-white/5">
                <Eye size={24} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
               <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 glass-panel border border-white/5 flex items-center justify-center text-gold-500 rounded-xl bg-white/5">
                     <Truck size={20} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Concierge Shipping</span>
               </div>
               <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 glass-panel border border-white/5 flex items-center justify-center text-gold-500 rounded-xl bg-white/5">
                     <Shield size={20} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Master Artisan Warranty</span>
               </div>
               <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 glass-panel border border-white/5 flex items-center justify-center text-gold-500 rounded-xl bg-white/5">
                     <RotateCcw size={20} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Satisfaction Guard</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
