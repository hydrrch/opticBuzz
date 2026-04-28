import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <div className="w-12 h-px bg-gold-500/20"></div>
             <span>Concierge Desk</span> 
             <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none mb-6">
            Support <span className="italic font-bold text-gold-500">Center</span>
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">Our elite support agents are prepared to assist you with style curation, prescription routing, and post-purchase care.</p>
        </header>

        <div className="grid lg:grid-cols-[400px,1fr] gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-panel border border-white/10 rounded-2xl p-8 bg-white/5 space-y-8 h-full relative overflow-hidden group">
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-500/5 rounded-full blur-[60px] group-hover:bg-gold-500/10 transition-colors pointer-events-none"></div>
               
               <div>
                 <h3 className="text-xl font-display uppercase tracking-widest text-white mb-8">Direct Lines</h3>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4 text-gray-400">
                     <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                       <Mail size={16} className="text-gold-500" />
                     </div>
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Electronic Mail</p>
                       <p className="text-sm">concierge@optibuzz.pk</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4 text-gray-400">
                     <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                       <Phone size={16} className="text-gold-500" />
                     </div>
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Telephone</p>
                       <p className="text-sm">+92 21 111 OPTI (6784)</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4 text-gray-400">
                     <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                       <MapPin size={16} className="text-gold-500" />
                     </div>
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Headquarters</p>
                       <p className="text-sm leading-relaxed">Level 4, Corporate Tower,<br/>Clifton, Karachi, Pakistan</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <form className="glass-panel border border-white/10 rounded-2xl p-8 md:p-12 bg-white/5 space-y-8">
            <h3 className="text-xl font-display uppercase tracking-widest text-white">Initiate Secure Frequency</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Legal Name</label>
                <input type="text" className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="Ex. Hyder Ali" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="mail@address.com" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subject</label>
              <input type="text" className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium" placeholder="Brief Summary" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={5} className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500 transition-all text-white font-medium resize-none" placeholder="Provide details..."></textarea>
            </div>

            <button type="button" className="group relative overflow-hidden bg-gold-500 text-navy-900 px-12 py-5 text-[10px] font-black uppercase tracking-[.3em] transition-all hover:text-white shadow-2xl flex items-center gap-4">
               <span className="relative z-10 flex items-center gap-3">Transmit <Send size={14} className="group-hover:translate-x-1 transition-transform" /></span>
               <div className="absolute inset-0 bg-navy-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
