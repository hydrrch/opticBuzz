import { useState } from 'react';
import { Upload, FileText, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrescriptionUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl uppercase tracking-tighter">Submit <span className="text-gold-500">Prescription</span></h1>
        <p className="text-gray-500 max-w-sm mx-auto text-sm">Upload your eye report and let our precision experts take care of the rest.</p>
      </div>

      <div className="grid md:grid-cols-[300px,1fr] gap-12">
        <aside className="space-y-8">
           <div className="bg-pearl p-8 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy-900 border-b border-navy-900/10 pb-4 flex items-center gap-2">
                 <Info size={14} className="text-gold-500" /> Requirements
              </h4>
              <ul className="text-[10px] font-medium text-gray-600 space-y-4 uppercase tracking-widest leading-relaxed">
                 <li>• Doctor's Signature</li>
                 <li>• Issuance Date (within 1 year)</li>
                 <li>• Patient's Full Name</li>
                 <li>• Clearly visible SPH/CYL/AXIS values</li>
              </ul>
           </div>
        </aside>

        <main className="space-y-10">
           {step === 1 && (
             <div 
               className="border-2 border-dashed border-pearl rounded-lg p-20 text-center space-y-6 hover:border-gold-500 transition-all cursor-pointer group"
               onDragOver={(e) => e.preventDefault()}
               onDrop={(e) => {
                 e.preventDefault();
                 if (e.dataTransfer.files) setFile(e.dataTransfer.files[0]);
               }}
             >
                <div className="w-20 h-20 bg-pearl rounded-full flex items-center justify-center mx-auto group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Upload size={32} />
                </div>
                <div className="space-y-2">
                   <h3 className="text-lg font-display uppercase tracking-widest">{file ? file.name : 'Drop Prescription Here'}</h3>
                   <p className="text-xs text-gray-500">Supports PDF, JPG, PNG (Max 5MB)</p>
                </div>
                <button 
                  onClick={() => file && setStep(2)}
                  className={`bg-navy-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all ${file ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  Confirm Upload
                </button>
             </div>
           )}

           {step === 2 && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-navy-900 text-white p-12 text-center space-y-8"
             >
                <div className="w-20 h-20 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                   <CheckCircle size={40} />
                </div>
                <div className="space-y-3">
                   <h2 className="text-3xl font-display uppercase tracking-tighter">Receipt Acknowledged</h2>
                   <p className="text-pearl/60 text-sm max-w-sm mx-auto">Our optometrists will verify your prescription within the next 2-4 business hours.</p>
                </div>
                <button className="flex items-center gap-3 mx-auto text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-white transition-colors">
                  Continue to Shop <ArrowRight size={16} />
                </button>
             </motion.div>
           )}
        </main>
      </div>
    </div>
  );
}
