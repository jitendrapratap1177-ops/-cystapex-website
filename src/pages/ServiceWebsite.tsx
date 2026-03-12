import { Link } from 'react-router-dom';

export default function ServiceWebsite() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(13,115,119,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#0D7377]/10 text-[#0D7377] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-[#0D7377]/20 mb-8">Service Detail</span>
          <h1 className="text-6xl md:text-[90px] font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
            Websites That Work<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7377] to-[#22D3EE]">While You Sleep</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
            Experience UX/UI excellence, performance optimization, and conversion-centric design tailored specifically for your business growth.
          </p>
        </div>
      </header>

      {/* Engineered for Performance */}
      <section className="py-40 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Engineered for Performance</h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-20">
            We build more than just websites; we create digital assets that drive results through strategic design and cutting-edge technology.
          </p>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] mb-8">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UX/UI Excellence</h3>
              <p className="text-slate-400 leading-relaxed">Intuitive interfaces that guide users seamlessly. We focus on visual storytelling and user-first psychology to ensure high engagement.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] mb-8">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Optimized</h3>
              <p className="text-slate-400 leading-relaxed">Lightning-fast load times and smooth interactions. Every line of code is written for speed, ensuring no visitor is lost to slow loading.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-8">
                <span className="material-symbols-outlined text-3xl">conversion_path</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conversion Centric</h3>
              <p className="text-slate-400 leading-relaxed">Designed to turn visitors into loyal customers. Strategic call-to-actions and optimized funnels built into the very core of your site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-32 px-8 bg-[#020408]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-8">
              <span className="material-symbols-outlined text-3xl">dns</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Custom Architecture</h3>
            <p className="text-slate-400 leading-relaxed">Scalable backend structures built for modern web applications.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-[#E8C84A]/10 border border-[#E8C84A]/20 flex items-center justify-center text-[#E8C84A] mb-8">
              <span className="material-symbols-outlined text-3xl">devices</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Responsive Design</h3>
            <p className="text-slate-400 leading-relaxed">Flawless experience across desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-16 tracking-tighter">Ready to transform your digital presence?</h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#0D7377] to-[#22D3EE] px-16 py-6 rounded-full text-xl font-black text-white shadow-[0_0_20px_rgba(13,115,119,0.3)] hover:shadow-[0_0_40px_rgba(13,115,119,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
