import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Truck, Eye, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, SAMPLE_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-navy-950 text-white">
        {/* Background Visuals */}
        <div className="absolute inset-0">
           <img 
            src="https://images.unsplash.com/photo-1574706196822-1207e4e1f78e?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover opacity-30"
            alt="Hero Background"
          />
           <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-[1.2fr,1fr] gap-20 items-center h-full pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="space-y-2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gold-500 font-bold tracking-[0.3em] text-[10px] uppercase block"
              >
                New Collection 2026
              </motion.span>
              <h1 className="text-7xl md:text-9xl font-display font-light leading-[0.85] tracking-tighter text-white">
                Visionary <br/>
                <span className="font-bold italic text-gold-500">Elegance.</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
              Experience the convergence of artisan engineering and digital innovation. Pakistan's elite destination for luxury eyewear.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/shop" className="group bg-gold-500 text-navy-900 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-2xl">
                Explore Curation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/try-on" className="group glass-panel px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white/10 transition-all">
                Virtual Mirror <div className="w-6 h-6 rounded-full border-2 border-gold-500 flex items-center justify-center group-hover:bg-gold-500 transition-colors"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-20 grid grid-cols-2 gap-12 border-t border-white/5 max-w-lg">
              <div className="flex items-center gap-4">
                <Shield className="text-gold-500" size={24} />
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white">Authentic Guilt</div>
                  <div className="text-[10px] text-gray-500 uppercase font-medium">100% Genuine Brands</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="text-gold-500" size={24} />
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white">Express Delivery</div>
                  <div className="text-[10px] text-gray-500 uppercase font-medium">48hr across Pakistan</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-pulse"></div>
             <div className="relative glass-panel rounded-3xl p-2 w-full max-w-[500px] aspect-[1.4/1] overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 blur-[80px] group-hover:bg-gold-500/20 transition-all"></div>
                <div className="h-full w-full bg-navy-950 flex flex-col items-center justify-center relative overflow-hidden">
                   <div className="text-gold-500/10 text-8xl font-black italic absolute inset-0 flex items-center justify-center pointer-events-none uppercase tracking-tighter">Premium</div>
                   <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800" className="w-[80%] hover:scale-110 transition-transform duration-700" alt="Featured Product" />
                </div>
             </div>
             
             {/* Prescription Float */}
             <div className="absolute bottom-10 -left-10 glass-panel p-6 rounded-2xl shadow-2xl space-y-4 w-56 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <div className="text-[8px] font-black uppercase text-gray-500 tracking-[.2em]">Medical Grade</div>
                <div className="text-sm font-bold uppercase tracking-tight">Prescription Lenses</div>
                <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                   <div className="h-full bg-gold-500 w-1/3"></div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-8 border-y border-pearl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Authentic Brands', desc: '100% Genuine Products' },
            { icon: Truck, title: 'Free Delivery', desc: 'On orders above Rs. 5000' },
            { icon: Eye, title: 'Expert Precision', desc: 'World-class lenses' },
            { icon: Zap, title: 'Fastest Delivery', desc: 'Express shipping option' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <item.icon className="text-gold-500" size={24} strokeWidth={1.5} />
              <h3 className="text-[10px] font-bold uppercase tracking-widest">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em]">Signature Collections</span>
            <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none">The <br/><span className="italic font-bold">Curation</span></h2>
          </div>
          <Link to="/shop" className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-gold-500/40 pb-2 hover:text-gold-500 hover:border-gold-500 transition-all mb-2">View Full Collection</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.id}`}
              className="group relative h-[500px] overflow-hidden rounded-xl border border-white/5"
            >
              <img 
                src={cat.image} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                <span className="text-white text-2xl font-display font-medium uppercase tracking-tighter mb-2 group-hover:text-gold-500 transition-colors">{cat.name}</span>
                <div className="flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="h-px w-8 bg-gold-500"></div>
                   <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em]">Shop Now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modern Interaction Section */}
      <section className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-panel p-16 md:p-24 space-y-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold-500/5 blur-[100px] group-hover:bg-gold-500/10 transition-all"></div>
            <div className="space-y-4">
              <h3 className="text-5xl font-display font-light uppercase tracking-tighter leading-none text-white italic">Virtual <br /> <span className="font-bold text-gold-500 not-italic">Identity</span></h3>
              <p className="text-gray-500 font-light max-w-sm text-sm leading-relaxed">Adopt the digital era with our real-time AR fitting room. Precision fitting from the comfort of your space.</p>
            </div>
            <Link to="/try-on" className="inline-flex group items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-gold-500 transition-colors">
              Access Mirror 
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-navy-900 transition-all shadow-xl">
                 <Eye size={18} />
              </div>
            </Link>
          </div>
          
          <div className="bg-navy-800 p-16 md:p-24 space-y-10 flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-5xl font-display font-light uppercase tracking-tighter leading-none text-white">Lens <br /> <span className="font-bold text-pearl italic">Passport</span></h3>
              <p className="text-gray-400 font-light max-w-sm text-sm leading-relaxed">Integrated prescription management. Securely store and apply your medical vision data to any elite frame.</p>
            </div>
            <Link to="/upload-prescription" className="inline-flex group items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-gold-500 transition-colors relative z-10">
              Update Data 
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-navy-900 transition-all shadow-xl">
                <Upload size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em]">Highly Coveted</span>
            <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white">The <span className="italic font-bold">Standard</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
