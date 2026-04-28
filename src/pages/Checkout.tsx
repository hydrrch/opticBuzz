import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { PAKISTAN_CITIES } from '../constants';
import { ChevronRight, CreditCard, Truck, MapPin, Smartphone, ReceiptText, ShieldCheck, Lock, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';

const checkoutSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(3),
  phone: z.string().min(10),
  address: z.string().min(10),
  city: z.string().min(1),
  province: z.string().min(1),
});

export default function Checkout() {
  const [step, setStep] = useState(1);
  const { items, total } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(checkoutSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setStep(2);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <span>Checkout Sequence</span> <div className="w-12 h-px bg-gold-500/20"></div> <span>Phase.0{step} of .03</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter text-white leading-none">
            The <span className="italic font-bold text-gold-500">Validation.</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-[1fr,450px] gap-24">
          <div className="space-y-16">
            {/* Steps Navigation */}
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[.3em]">
              <span className={`transition-colors h-10 flex items-center border-b-2 ${step >= 1 ? "text-gold-500 border-gold-500" : "text-gray-600 border-transparent"}`}>01 Logistics</span>
              <ChevronRight size={14} className="text-white/10" />
              <span className={`transition-colors h-10 flex items-center border-b-2 ${step >= 2 ? "text-gold-500 border-gold-500" : "text-gray-600 border-transparent"}`}>02 Settlement</span>
              <ChevronRight size={14} className="text-white/10" />
              <span className={`transition-colors h-10 flex items-center border-b-2 ${step >= 3 ? "text-gold-500 border-gold-500" : "text-gray-600 border-transparent"}`}>03 Manifest</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-12"
                >
                  <div className="space-y-8">
                    <h2 className="text-3xl font-display uppercase tracking-tight text-white flex items-center gap-4">
                       <MapPin className="text-gold-500" size={28} /> Courier Logistics
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Direct Contact Email</label>
                        <input {...register('email')} className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="Ex: hyder@ateliervault.pk" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Secure Phone Link</label>
                        <input {...register('phone')} className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="+92 3XX XXXXXXX" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Recipient Identity</label>
                      <input {...register('fullName')} className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="Legal Full Name" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Logistics Destination</label>
                      <input {...register('address')} className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="Building, Street, Sector" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Metropolis</label>
                        <select {...register('city')} className="w-full bg-navy-800 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium appearance-none">
                           {PAKISTAN_CITIES.map(city => <option key={city} value={city} className="bg-navy-800">{city}</option>)}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500">Territory</label>
                        <select {...register('province')} className="w-full bg-navy-800 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium appearance-none">
                           {['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Gilgit Baltistan', 'AJK'].map(p => <option key={p} value={p} className="bg-navy-800">{p}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="group relative overflow-hidden bg-gold-500 text-navy-900 px-16 py-6 text-[10px] font-black uppercase tracking-[.4em] transition-all hover:text-white shadow-2xl shadow-gold-500/10">
                    <span className="relative z-10">Advance to Settlement</span>
                    <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </motion.form>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h2 className="text-3xl font-display uppercase tracking-tight text-white flex items-center gap-4">
                     <CreditCard className="text-gold-500" size={28} /> Financial Settlement
                  </h2>

                  <div className="grid gap-4">
                    {[
                      { id: 'cod', title: 'Curated Delivery (COD)', icon: Truck, meta: 'Pay upon precision arrival' },
                      { id: 'card', title: 'Encrypted Credit / Debit', icon: CreditCard, meta: 'Secure end-to-end processing' },
                      { id: 'jazzcash', title: 'JazzCash Wallet', icon: Smartphone, meta: 'Instant mobile verification' },
                      { id: 'easypaisa', title: 'Easypaisa Vault', icon: Smartphone, meta: 'Seamless digital settlement' }
                    ].map(method => (
                      <button 
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex items-center justify-between p-8 border transition-all rounded-2xl group text-left relative overflow-hidden ${
                          paymentMethod === method.id ? 'border-gold-500 bg-gold-500/5' : 'border-white/5 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-6 relative z-10">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${paymentMethod === method.id ? 'bg-gold-500 text-navy-900' : 'bg-white/5 text-gray-500'}`}>
                             <method.icon size={24} />
                          </div>
                          <div>
                             <span className={`text-xs font-black uppercase tracking-[.2em] block mb-1 ${paymentMethod === method.id ? 'text-gold-500' : 'text-white'}`}>{method.title}</span>
                             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{method.meta}</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${paymentMethod === method.id ? 'border-gold-500 bg-gold-500' : 'border-white/10'}`}>
                             {paymentMethod === method.id && <Check size={12} className="text-navy-900" strokeWidth={4} />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-6 items-center">
                    <button onClick={() => setStep(1)} className="px-8 py-5 text-[10px] font-black uppercase tracking-[.3em] text-gray-500 hover:text-white transition-colors">Adjust Logistics</button>
                    <button onClick={() => setStep(3)} className="group relative overflow-hidden bg-gold-500 text-navy-900 px-16 py-6 text-[10px] font-black uppercase tracking-[.4em] transition-all hover:text-white shadow-2xl">
                       <span className="relative z-10">Proceed to Manifest</span>
                       <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                 <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                 >
                   <h2 className="text-3xl font-display uppercase tracking-tight text-white flex items-center gap-4">
                     <ReceiptText className="text-gold-500" size={28} /> Final Manifest
                   </h2>
                   <div className="glass-panel p-12 border border-white/5 rounded-3xl space-y-10 bg-white/5">
                      <div className="flex items-center gap-6 text-gray-400">
                         <ShieldCheck size={40} className="text-gold-500" />
                         <p className="text-sm leading-relaxed font-medium">By authorizing this manifest, you acknowledge our protocols of precision. Concierge delivery in Pakistan is typically finalized within <span className="text-white">72-96 hours</span>.</p>
                      </div>
                      <button className="w-full group relative overflow-hidden bg-gold-500 text-navy-900 py-6 text-xs font-black uppercase tracking-[.5em] transition-all hover:text-white shadow-2xl shadow-gold-500/20">
                        <span className="relative z-10 flex items-center justify-center gap-4"><Lock size={16} /> Finalize Procurement</span>
                        <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      </button>
                   </div>
                   <button onClick={() => setStep(2)} className="text-[10px] font-black uppercase tracking-[.3em] text-gray-500 hover:text-white transition-colors">Revision Settlement</button>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <aside>
             <div className="glass-panel p-12 bg-white/5 border border-white/10 rounded-3xl sticky top-40 space-y-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 "></div>
                
                <h4 className="text-[10px] font-black uppercase tracking-[.4em] border-b border-white/5 pb-6 text-gold-500">Procurement Summary</h4>
                <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
                  {items.map(item => (
                     <div key={item.id} className="flex gap-6 group">
                        <div className="w-20 h-24 bg-navy-800 p-4 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden flex-shrink-0">
                           <img src={item.image} className="w-full h-full object-contain transition-transform group-hover:scale-110" alt={item.name} />
                        </div>
                        <div className="flex-grow py-1 flex flex-col justify-between">
                           <div>
                              <h5 className="text-[11px] font-black uppercase tracking-widest text-white leading-tight">{item.name}</h5>
                              <p className="text-[9px] text-gray-500 mt-1 font-bold uppercase tracking-widest">{item.variant}</p>
                           </div>
                           <p className="text-xs font-black text-gold-500">PKR {item.price.toLocaleString()}</p>
                        </div>
                     </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/5">
                   <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      <span>Selection Value</span>
                      <span className="text-white">PKR {total.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      <span>Concierge Logistic</span>
                      <span className="text-emerald-500 font-black">COMPLIMENTARY</span>
                   </div>
                   <div className="flex justify-between items-end pt-6">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-[.4em] text-gray-600">Total Investment</span>
                        <p className="text-3xl font-display font-medium text-white tracking-widest leading-none">PKR {total.toLocaleString()}</p>
                      </div>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
