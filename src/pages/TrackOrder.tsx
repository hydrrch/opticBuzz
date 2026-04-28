import { useState } from 'react';
import { Package, Truck, CheckCircle, Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrackOrder() {
  const [orderTracking, setOrderTracking] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderTracking) setIsTracking(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <div className="w-12 h-px bg-gold-500/20"></div>
             <span>Logistics Tracking</span> 
             <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none">
            Track <span className="italic font-bold text-gold-500">Order</span>
          </h1>
        </header>

        <form onSubmit={handleTrack} className="bg-white/5 glass-panel border border-white/10 rounded-2xl p-8 mb-16 flex flex-col md:flex-row gap-6 items-end relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div className="flex-grow w-full space-y-3 relative z-10">
            <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Order ID or Tracking Number</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                value={orderTracking}
                onChange={(e) => setOrderTracking(e.target.value)}
                placeholder="Ex. OB-90412" 
                className="w-full bg-navy-800 border border-white/10 rounded-xl pl-12 pr-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full md:w-auto h-14 px-10 bg-gold-500 text-navy-900 text-[10px] font-black uppercase tracking-[.3em] hover:bg-white transition-all rounded-xl relative z-10 flex items-center justify-center gap-3">
            Track Shipment <ArrowRight size={16} />
          </button>
        </form>

        {isTracking && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="bg-white/5 glass-panel border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-8 gap-6 mb-12">
                 <div>
                    <p className="text-[10px] font-black text-gold-500 uppercase tracking-[.4em] mb-2">Order {orderTracking}</p>
                    <h3 className="text-2xl font-display text-white uppercase tracking-tighter">In Transit</h3>
                 </div>
                 <div className="text-left md:text-right">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[.4em] mb-2">Estimated Arrival</p>
                    <p className="text-xl font-display text-white">May 02, 2026</p>
                 </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
                
                <div className="space-y-12 relative">
                  {[
                    { id: 1, status: 'Order Confirmed', date: 'April 28, 2026 - 10:45 AM', icon: CheckCircle, active: true, desc: 'Your order details have been received and verified.' },
                    { id: 2, status: 'Artisan Preparation', date: 'April 29, 2026 - 02:15 PM', icon: Package, active: true, desc: 'Your eyewear is being carefully packaged in our vault.' },
                    { id: 3, status: 'In Transit', date: 'April 30, 2026 - 09:30 AM', icon: Truck, active: true, desc: 'Dispatched via premium logistics network.' },
                    { id: 4, status: 'Out for Delivery', date: 'Pending', icon: Search, active: false, desc: 'Courier will contact you shortly before arrival.' },
                  ].map((step, idx) => (
                    <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                      <div className={`order-2 md:order-1 flex-1 text-left md:text-right ${step.active ? 'opacity-100' : 'opacity-40'}`}>
                         <h4 className={`text-sm tracking-widest uppercase font-black ${step.id === 3 ? 'text-gold-500' : 'text-white'}`}>{step.status}</h4>
                         <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mt-2 leading-relaxed max-w-xs md:ml-auto">{step.desc}</p>
                      </div>
                      
                      <div className={`order-1 md:order-2 w-12 h-12 rounded-full border-4 border-navy-900  flex items-center justify-center relative z-10 shrink-0 ${step.active ? 'bg-gold-500 text-navy-900' : 'bg-navy-800 border-white/10 text-gray-500'}`}>
                         <step.icon size={18} strokeWidth={step.active ? 3 : 2} />
                      </div>
                      
                      <div className={`order-3 flex-1 ${step.active ? 'opacity-100' : 'opacity-40'}`}>
                         <span className="inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase text-gray-400">
                           {step.date}
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
