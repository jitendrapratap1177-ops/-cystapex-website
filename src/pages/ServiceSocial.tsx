import { Link } from 'react-router-dom';

export default function ServiceSocial() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(232,200,74,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(124,59,237,0.1) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#E8C84A]/10 text-[#E8C84A] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-[#E8C84A]/20 mb-8">Service Detail</span>
          <h1 className="text-6xl md:text-[90px] font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
            A Social Presence That<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C84A] to-[#F59E0B]">Commands</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
            Elevate your brand with expert content architecture, community building, and unmatched brand authority. We don't just post; we build legacies.
          </p>
        </div>
      </header>

      {/* Strategic Pillars */}
      <section className="py-40 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Our Strategic Pillars</h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-20">
            We build foundations that last. Our methodology focuses on the three core components that define digital dominance.
          </p>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#E8C84A]/10 border border-[#E8C84A]/20 flex items-center justify-center text-[#E8C84A] mb-8">
                <span className="material-symbols-outlined text-3xl">article</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Architecture</h3>
              <p className="text-slate-400 leading-relaxed">Strategic mapping of your brand's digital voice and content pillars to ensure consistent, high-value output.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-8">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Building</h3>
              <p className="text-slate-400 leading-relaxed">Fostering genuine connections and active engagement with your audience through meaningful interaction.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
                <span className="material-symbols-outlined text-3xl">military_tech</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Brand Authority</h3>
              <p className="text-slate-400 leading-relaxed">Establishing your brand as a leader in your specific industry niche through thought leadership content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engaged Communities */}
      <section className="py-32 px-8 bg-[#020408]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Engaged Communities in Action</h2>
          <p className="text-xl text-slate-400 mb-20">Sneak peek into the feeds we manage for top-tier brands.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Street Aesthetics', stat: '240% Growth YOY', color: '#E8C84A' },
              { name: 'Luxe Living', stat: '15.2k Daily Interactions', color: '#7c3bed' },
              { name: 'Tech Insights', stat: 'Industry Leader Status', color: '#1E90D4' },
              { name: 'Studio Zero', stat: 'Creative Dominance', color: '#0D7377' },
            ].map((brand) => (
              <div key={brand.name} className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group hover:bg-white/5 transition-all">
                <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/5 mb-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl" style={{ color: brand.color }}>image</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{brand.name}</h4>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: brand.color }}>{brand.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Ready to take command of your social future?</h2>
          <p className="text-lg text-slate-400 mb-16">Limited availability for Q3/Q4 partners</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#E8C84A] to-[#F59E0B] px-16 py-6 rounded-full text-xl font-black text-[#05080F] shadow-[0_0_20px_rgba(232,200,74,0.3)] hover:shadow-[0_0_40px_rgba(232,200,74,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
