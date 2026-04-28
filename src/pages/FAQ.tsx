import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your return policy?",
      a: "We offer a 14-day return window for all non-prescription frames. If you are not completely satisfied with your curation, you can return it in its original packaging for a full refund. Custom prescription lenses cannot be refunded once processed."
    },
    {
      q: "How long does shipping take?",
      a: "Our complimentary concierge logistics typically deliver within 2-3 business days in major metropolitan areas (Karachi, Lahore, Islamabad). Rest of Pakistan deliveries may take up to 4-5 business days."
    },
    {
      q: "Do you offer international shipping?",
      a: "Currently, OptiBuzz exclusivity is limited to Pakistan. We are working on expanding our logistics network to international destinations."
    },
    {
      q: "Can I use my own frame for new lenses?",
      a: "Yes, our Master Artisan service allows you to send in your premium frames for lens replacement. Please visit one of our boutiques or contact our support concierge for more details."
    },
    {
      q: "Are the brands authentic?",
      a: "Absolutely. We guarantee 100% authenticity on all products. Every frame comes with its original factory certifications and a Master Artisan warranty."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <header className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <div className="w-12 h-px bg-gold-500/20"></div>
             <span>Inquiries</span> 
             <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none mb-6">
            Frequently <span className="italic font-bold text-gold-500">Asked</span>
          </h1>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-sm font-display uppercase tracking-widest text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-gold-500 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-sm text-gray-400 font-medium leading-relaxed">
                      <div className="w-8 h-px bg-gold-500/20 mb-4"></div>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
