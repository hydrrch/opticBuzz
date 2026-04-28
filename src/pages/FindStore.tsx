import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function FindStore() {
  const stores = [
    {
      id: 1,
      city: 'Karachi',
      name: 'OptiBuzz Flagship',
      address: 'Shop #4, Ground Floor, Dolmen Mall Clifton, Karachi',
      phone: '+92 21 111 222 333',
      timings: 'Mon - Sun: 11:00 AM - 10:00 PM',
      status: 'Open Now'
    },
    {
      id: 2,
      city: 'Lahore',
      name: 'OptiBuzz Boutique',
      address: 'Packages Mall, Walton Road, Lahore',
      phone: '+92 42 111 222 333',
      timings: 'Mon - Sun: 11:00 AM - 10:00 PM',
      status: 'Closing Soon'
    },
    {
      id: 3,
      city: 'Islamabad',
      name: 'OptiBuzz Centaurus',
      address: '2nd Floor, The Centaurus Mall, F-8/4, Islamabad',
      phone: '+92 51 111 222 333',
      timings: 'Mon - Sun: 11:00 AM - 11:00 PM',
      status: 'Open Now'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <div className="w-12 h-px bg-gold-500/20"></div>
             <span>Physical Locations</span> 
             <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none mb-6">
            Store <span className="italic font-bold text-gold-500">Locator</span>
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">Experience our curated collections in person. Visit one of our premium boutiques across Pakistan for bespoke fitting and consultation.</p>
        </header>

        <div className="grid lg:grid-cols-[1fr,400px] gap-12 max-w-6xl mx-auto">
          <div className="bg-navy-800 rounded-3xl overflow-hidden glass-panel border border-white/5 relative h-[500px] lg:h-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0f172a]/80 flex items-center justify-center z-10 backdrop-blur-sm">
               <div className="text-center space-y-4">
                  <MapPin className="text-gold-500 mx-auto" size={48} />
                  <p className="text-white font-display uppercase tracking-widest">Interactive Map Integration Pending</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black text-[10px]">Select a boutique from the list</p>
               </div>
            </div>
             {/* Map placeholder pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>

          <div className="space-y-6">
            {stores.map(store => (
              <div key={store.id} className="glass-panel bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold-500/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <p className="text-[10px] font-black text-gold-500 uppercase tracking-[.4em] mb-1">{store.city}</p>
                      <h3 className="text-xl font-display text-white uppercase tracking-tighter">{store.name}</h3>
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-[.2em] px-3 py-1 rounded-full border ${store.status === 'Open Now' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-amber-500 border-amber-500/20 bg-amber-500/5'}`}>
                     {store.status}
                   </span>
                </div>

                <div className="space-y-4 mb-8">
                   <div className="flex items-start gap-4 text-gray-400">
                     <MapPin size={16} className="shrink-0 mt-0.5 text-white/40" />
                     <p className="text-xs leading-relaxed font-medium">{store.address}</p>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                     <Phone size={16} className="shrink-0 text-white/40" />
                     <p className="text-xs font-black tracking-widest uppercase">{store.phone}</p>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                     <Clock size={16} className="shrink-0 text-white/40" />
                     <p className="text-xs font-black tracking-widest uppercase">{store.timings}</p>
                   </div>
                </div>

                <button className="w-full h-12 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[.3em] text-white flex items-center justify-center gap-3 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-navy-900 transition-all">
                  Get Directions <Navigation size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
