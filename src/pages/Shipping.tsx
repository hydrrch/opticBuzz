export default function Shipping() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-gold-500/60 mb-4">
             <span>Protocols</span> <div className="w-12 h-px bg-gold-500/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tighter text-white leading-none">
            Delivery <span className="italic font-bold text-gold-500">Logistics</span>
          </h1>
        </header>

        <div className="glass-panel border border-white/10 rounded-3xl p-8 md:p-16 bg-white/5 space-y-12 text-gray-300">
          <section className="space-y-6">
            <h2 className="text-xl font-display uppercase tracking-widest text-white border-b border-white/10 pb-4">Complimentary Elite Shipping</h2>
            <p className="text-sm font-medium leading-relaxed">
              We offer complimentary standard shipping on all curations exceeding PKR 5,000. All parcels are dispatched via our premium logistics partners to ensure safe and swift delivery.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-display uppercase tracking-widest text-white border-b border-white/10 pb-4">Estimated Timelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy-800 p-6 rounded-xl border border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[.3em] text-gold-500 mb-2">Metropolitan Area</h3>
                <p className="text-sm">Karachi, Lahore, Islamabad</p>
                <div className="mt-4 pt-4 border-t border-white/5 text-xl font-display text-white">2-3 Business Days</div>
              </div>
              <div className="bg-navy-800 p-6 rounded-xl border border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[.3em] text-gold-500 mb-2">Rest of Pakistan</h3>
                <p className="text-sm">Other cities and rural localities</p>
                <div className="mt-4 pt-4 border-t border-white/5 text-xl font-display text-white">4-5 Business Days</div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-display uppercase tracking-widest text-white border-b border-white/10 pb-4">Prescription Processing</h2>
            <p className="text-sm font-medium leading-relaxed">
              Please note that curations requiring custom prescription lenses necessitate an additional 24-48 hours for our Master Artisans to craft and verify the optical integrity before dispatch.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
