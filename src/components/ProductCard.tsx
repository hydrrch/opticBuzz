import { Product } from '../types';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCartStore } from '../store/useCartStore';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-800 mb-6 rounded-xl border border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
        />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-gold-500 text-navy-900 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm shadow-xl">Masterpiece</span>
          )}
          {product.isNewArrival && (
            <span className="bg-white text-navy-900 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm shadow-xl">New Drop</span>
          )}
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button 
            onClick={() => addItem({ ...product, quantity: 1, productId: product.id } as any)}
            className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all hover:scale-110"
          >
            <ShoppingCart size={18} />
          </button>
          <button className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all hover:scale-110">
            <Eye size={18} />
          </button>
          <button className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all hover:scale-110">
            <Heart size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{product.brand}</span>
          <div className="flex items-center gap-1.5 text-gold-500">
            <Star size={10} className="fill-gold-500" />
            <span className="text-[10px] font-bold tracking-widest">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-display font-medium text-white uppercase tracking-tighter group-hover:text-gold-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-pearl/60 font-bold tracking-widest">PKR {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
