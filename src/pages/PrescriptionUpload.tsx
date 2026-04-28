import { useState } from 'react';
import { Upload, FileText, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PrescriptionUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <header className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <div className="w-12 h-px bg-gold-500/20"></div>
             <span>Medical Data Integrator</span> 
             <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none mb-6">
            Submit <span className="italic font-bold text-gold-500">Prescription</span>
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm mx-auto">Upload your eye report and let our precision experts take care of the rest.</p>
        </header>

        <div className="grid md:grid-cols-[350px,1fr] gap-16">
          <aside className="space-y-8">
             <div className="glass-panel border border-white/10 p-10 rounded-3xl bg-white/5 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none"></div>
                <h4 className="text-[10px] font-black uppercase tracking-[.4em] text-white border-b border-white/5 pb-6 flex items-center gap-3">
                   <Info size={16} className="text-gold-500" /> Prerequisites
                </h4>
                <ul className="text-xs font-medium text-gray-500 space-y-6 leading-relaxed relative z-10">
                   <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5"></div> Authorized Signature</li>
                   <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5"></div> Issuance Date (within 1 yr)</li>
                   <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5"></div> Patient's Official Name</li>
                   <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5"></div> Clear SPH/CYL/AXIS parameters</li>
                </ul>
             </div>
          </aside>

          <main className="space-y-10">
             {step === 1 && (
               <div 
                 className="relative border-2 border-dashed border-white/10 rounded-3xl p-24 text-center space-y-10 hover:border-gold-500 transition-all cursor-pointer group bg-black/20"
                 onDragOver={(e) => e.preventDefault()}
                 onDrop={(e) => {
                   e.preventDefault();
                   if (e.dataTransfer.files) setFile(e.dataTransfer.files[0]);
                 }}
               >
                  <label className="absolute inset-0 z-10 cursor-pointer hidden">
                    <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                  
                  <div className="w-24 h-24 bg-navy-800 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold-500 group-hover:text-navy-900 transition-all border border-white/5 shadow-2xl relative z-20">
                    <Upload size={32} />
                  </div>
                  <div className="space-y-3 relative z-20">
                     <h3 className="text-2xl font-display uppercase tracking-widest text-white">{file ? file.name : 'Drop Specification File'}</h3>
                     <p className="text-[10px] font-black tracking-[.2em] uppercase text-gray-500">Supports PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                  <button 
                    onClick={(e) => {
                       e.stopPropagation();
                       if(file) setStep(2);
                    }}
                    className={`relative z-20 bg-gold-500 text-navy-900 px-16 py-5 text-[10px] font-black uppercase tracking-[.4em] transition-all hover:bg-white ${file ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    Confirm Transmission
                  </button>
               </div>
             )}

             {step === 2 && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="glass-panel border border-white/10 rounded-3xl text-white py-20 px-8 text-center space-y-12 bg-white/5"
               >
                  <div className="w-24 h-24 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                     <CheckCircle size={48} />
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-4xl font-display font-light uppercase tracking-tighter leading-none">Transmission <span className="font-bold">Secured</span></h2>
                     <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">Our Master Artisans will verify your specified parameters within the next 2-4 business hours.</p>
                  </div>
                  <Link to="/shop" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[.4em] text-gold-500 hover:text-white transition-colors">
                    Explore Collections <ArrowRight size={16} />
                  </Link>
               </motion.div>
             )}
          </main>
        </div>
      </div>
    </div>
  );
}
