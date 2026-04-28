import { BarChart3, Package, ShoppingCart, Users, Settings, Plus, Bell } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminDashboard() {
  const [view, setView] = useState('overview');

  return (
    <div className="flex min-h-screen bg-navy-900 text-white font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-white/5 space-y-12 flex flex-col pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="px-12">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-2">
             <div className="w-8 h-px bg-gold-500/20"></div>
             <span>Control Center</span>
          </div>
          <h2 className="text-3xl font-display font-light uppercase tracking-tighter text-white">
            System <span className="italic font-bold text-gold-500">Admin</span>
          </h2>
        </div>

        <nav className="flex-grow space-y-2 px-6">
          {[
            { id: 'overview', label: 'Command Overview', icon: BarChart3 },
            { id: 'products', label: 'Master Inventory', icon: Package },
            { id: 'orders', label: 'Procurements', icon: ShoppingCart },
            { id: 'customers', label: 'Resident Data', icon: Users },
            { id: 'settings', label: 'Configuration', icon: Settings },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full group relative flex items-center gap-6 px-6 py-4 text-[10px] font-black uppercase tracking-[.3em] transition-all overflow-hidden rounded-xl border ${
                view === item.id ? 'text-navy-900 border-gold-500' : 'text-gray-500 border-transparent hover:border-white/5 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-6">
                <item.icon size={16} className={view === item.id ? 'text-navy-900' : 'text-gold-500'} /> 
                {item.label}
              </span>
              <div className={`absolute inset-0 bg-gold-500 transition-transform duration-500 ${view === item.id ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0 text-navy-900'}`}></div>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow max-h-screen overflow-y-auto px-12 pt-32 pb-24 relative">
        <header className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
           <div>
              <h1 className="text-5xl font-display uppercase tracking-tighter text-white">
                 {view.charAt(0).toUpperCase() + view.slice(1)}
              </h1>
              <p className="text-[10px] font-black uppercase tracking-[.4em] text-gray-500 mt-4">Module .0{['overview', 'products', 'orders', 'customers', 'settings'].indexOf(view) + 1}</p>
           </div>
           
           <div className="flex items-center gap-8">
              <button className="relative text-gray-400 hover:text-white transition-colors">
                 <Bell size={24} />
                 <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-navy-900 animate-pulse" />
              </button>
              <button className="group relative overflow-hidden bg-gold-500 text-navy-900 px-8 py-4 text-[10px] font-black uppercase tracking-[.4em] transition-all hover:text-white shadow-[0_0_30px_rgba(234,179,8,0.15)] flex items-center gap-3">
                 <span className="relative z-10 flex items-center gap-3"><Plus size={14} /> Init Product</span>
                 <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
           </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
             {/* Stats Board */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { label: 'Total Revenue', value: 'PKR 1.2M', growth: '+12%', color: 'text-emerald-500' },
                  { label: 'Orders Placed', value: '412', growth: '+5%', color: 'text-emerald-500' },
                  { label: 'Active Residences', value: '890', growth: '+18%', color: 'text-emerald-500' },
                  { label: 'AR Telemetry', value: '2.4K', growth: '+24%', color: 'text-emerald-500' },
                ].map((stat, i) => (
                  <div key={i} className="glass-panel bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-gold-500/50 transition-colors">
                     <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold-500/5 rounded-full blur-[40px] group-hover:bg-gold-500/10 transition-colors pointer-events-none"></div>
                     <p className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500 mb-6">{stat.label}</p>
                     <div className="flex justify-between items-end relative z-10">
                        <p className="text-3xl font-display text-white tracking-tighter">{stat.value}</p>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color}`}>{stat.growth}</span>
                     </div>
                  </div>
                ))}
             </div>

             {/* Main Feed/Table */}
             <div className="glass-panel bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
                   <h3 className="text-sm font-display uppercase tracking-widest text-white">System Feed</h3>
                   <button className="text-[9px] font-black uppercase tracking-[.4em] text-gold-500 hover:text-white transition-colors">View Manifold</button>
                </div>
                <div className="p-24 text-center space-y-6 flex flex-col items-center justify-center">
                   <div className="w-24 h-24 bg-navy-800 rounded-full border border-white/5 flex items-center justify-center shadow-inner relative group">
                      <div className="absolute inset-0 rounded-full border border-gold-500/20 scale-[1.2] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
                      <Package size={32} className="text-gray-600" />
                   </div>
                   <div className="space-y-2">
                     <p className="text-xl font-display uppercase tracking-widest text-white">Awaiting Neural Link</p>
                     <p className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Real-time datastream synchronization pending...</p>
                   </div>
                   <button className="bg-white/5 border border-white/10 px-8 py-3 text-[9px] font-black uppercase tracking-[.3em] text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all rounded-full mt-4">
                     Force Sync
                   </button>
                </div>
             </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
