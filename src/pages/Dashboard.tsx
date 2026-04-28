import { User, Package, FileText, Heart, MapPin, LogOut, ChevronRight, Settings, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'profile', label: 'Account Data', icon: Settings },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <span>Resident Access</span> <div className="w-12 h-px bg-gold-500/20"></div> <span>Member ID: #OB-1024</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter text-white leading-none">
            The <span className="italic font-bold text-gold-500">Concierge.</span>
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-12">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
               <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center text-white font-display font-light text-2xl relative">
                     <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center text-[10px] text-navy-900 border-4 border-navy-900">
                        <ShieldCheck size={12} strokeWidth={3} />
                     </div>
                     H
                  </div>
                  <div>
                     <h3 className="text-lg font-display font-medium text-white uppercase tracking-tight">Hyder Ali</h3>
                     <p className="text-[9px] text-gray-500 uppercase tracking-[.3em] font-black mt-1">Founding Member</p>
                  </div>
               </div>
            </div>

            <nav className="space-y-4">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full group relative flex items-center gap-6 px-8 py-5 text-[10px] font-black uppercase tracking-[.3em] transition-all overflow-hidden rounded-2xl border ${
                    activeTab === tab.id ? 'text-navy-900 border-gold-500' : 'text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-6">
                     <tab.icon size={16} className={activeTab === tab.id ? 'text-navy-900' : 'text-gold-500'} /> 
                     {tab.label}
                  </span>
                  <div className={`absolute inset-0 bg-gold-500 transition-transform duration-500 ${activeTab === tab.id ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}></div>
                </button>
              ))}
              <button className="w-full flex items-center gap-6 px-8 py-5 text-[10px] font-black uppercase tracking-[.3em] text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all mt-10 border-t border-white/5 pt-10 group justify-between">
                <div className="flex items-center gap-6">
                   <LogOut size={16} /> Termination Session
                </div>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-grow">
            <header className="mb-12 flex justify-between items-end border-b border-white/5 pb-8">
               <h2 className="text-3xl font-display font-medium text-white uppercase tracking-tighter">{tabs.find(t => t.id === activeTab)?.label}</h2>
               <div className="text-[10px] font-black text-gray-600 uppercase tracking-[.4em]">Section.0{tabs.findIndex(t => t.id === activeTab) + 1}</div>
            </header>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="min-h-[500px]"
              >
                {activeTab === 'orders' && (
                  <div className="space-y-8">
                    {[1, 2].map(id => (
                      <div key={id} className="glass-panel p-10 border border-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-10 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gold-500/10 group-hover:bg-gold-500 transition-colors"></div>
                        <div className="flex gap-10">
                          <div className="w-24 h-32 bg-navy-800 rounded-xl glass-panel border border-white/5 flex items-center justify-center overflow-hidden">
                             <img src="/placeholder-eyewear.png" className="w-full h-full object-contain p-4 opacity-40 group-hover:opacity-100 transition-opacity" alt="Product" />
                          </div>
                          <div className="space-y-4 py-2">
                             <div>
                                <p className="text-[9px] font-black text-gold-500 uppercase tracking-[.4em] mb-1">Order #OB-90412-{id}</p>
                                <h4 className="text-2xl font-display font-medium text-white uppercase group-hover:text-gold-500 transition-colors">Aviator Gold Masterpiece</h4>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-black px-3 py-1 bg-white/5 rounded-full">April 28, 2026</span>
                                <span className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-emerald-500 font-black px-3 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10">
                                   <div className="w-1 h-1 bg-emerald-500 rounded-full"></div> In Logistics
                                </span>
                             </div>
                          </div>
                        </div>
                        <div className="text-center md:text-right space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-[.4em] text-gray-500">Procurement Value</p>
                          <p className="text-2xl font-display font-medium text-white">PKR 21,000</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {(activeTab === 'prescriptions' || activeTab === 'wishlist' || activeTab === 'addresses' || activeTab === 'profile') && (
                  <div className="glass-panel p-24 border border-white/5 rounded-3xl border-dashed flex flex-col items-center justify-center text-center space-y-8">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-gray-700">
                      {(() => {
                        const TabIcon = tabs.find(t => t.id === activeTab)?.icon;
                        return TabIcon ? <TabIcon size={40} strokeWidth={1} /> : null;
                      })()}
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-xl font-display uppercase tracking-widest text-white/40">Vault Entry Pending</h3>
                       <p className="text-xs text-gray-600 uppercase tracking-widest leading-relaxed max-w-xs mx-auto">This section is awaiting its first data verification. Secure sync in progress.</p>
                    </div>
                    <button className="bg-white/5 border border-white/10 px-12 py-4 text-[10px] font-black uppercase tracking-[.4em] text-white hover:bg-gold-500 hover:text-navy-900 transition-all rounded-full">Initialize Sync</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
