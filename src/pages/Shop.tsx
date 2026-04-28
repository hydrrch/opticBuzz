import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, List } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    shape: [] as string[],
    material: [] as string[],
    gender: [] as string[],
    priceRange: [0, 50000]
  });

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(p => {
      if (categoryParam && p.category !== categoryParam) return false;
      if (activeFilters.gender.length && !activeFilters.gender.includes(p.gender)) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [categoryParam, sortBy, activeFilters]);

  return (
    <div className="pt-32 pb-24 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60">
              <span>Collection</span> <div className="w-8 h-px bg-gold-500/20"></div> <span>{categoryParam || 'All Models'}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter text-white leading-[0.85]">
              The <span className="italic font-bold text-gold-500">Curation.</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <div className="relative group">
              <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 text-[10px] font-black uppercase tracking-[.2em] text-white hover:border-gold-500 transition-all">
                Sort By: <span className="text-gold-500">{sortBy.replace('-', ' ')}</span> <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-navy-800 shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 backdrop-blur-xl">
                {['Featured', 'Best Selling', 'Newest', 'Price-Low', 'Price-High', 'Rating'].map(option => (
                  <button 
                    key={option} 
                    onClick={() => setSortBy(option.toLowerCase())}
                    className="w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-[.2em] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-20">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block space-y-16">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500 mb-8 border-b border-white/5 pb-4">Optimum Fit</h4>
              <div className="space-y-4">
                {['Aviator', 'Round', 'Rectangular', 'Square', 'Cat-Eye'].map(shape => (
                   <label key={shape} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-4 h-4 border border-white/10 group-hover:border-gold-500 transition-colors flex items-center justify-center">
                         <div className="w-2 h-2 bg-gold-500 scale-0 group-hover:scale-100 transition-transform"></div>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white font-medium transition-colors">{shape}</span>
                   </label>
                ))}
              </div>
            </div>

            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500 mb-8 border-b border-white/5 pb-4">Material Choice</h4>
               <div className="space-y-4">
                {['Metal', 'Acetate', 'Titanium', 'TR90'].map(mat => (
                   <label key={mat} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-4 h-4 border border-white/10 group-hover:border-gold-500 transition-colors flex items-center justify-center">
                         <div className="w-2 h-2 bg-gold-500 scale-0 group-hover:scale-100 transition-transform"></div>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white font-medium transition-colors">{mat}</span>
                   </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-40 border border-dashed border-white/10 rounded-2xl">
                 <h3 className="text-2xl font-display uppercase tracking-widest text-gray-600">No models found</h3>
                 <p className="text-xs text-gray-700 mt-2 uppercase tracking-widest">Try adjusting your style parameters</p>
              </div>
            )}
            
            <div className="mt-32 flex justify-center">
               <button className="group relative overflow-hidden bg-white/5 border border-white/10 px-16 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-navy-900 transition-colors">
                 <span className="relative z-10">Load More Models</span>
                 <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform"></div>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
