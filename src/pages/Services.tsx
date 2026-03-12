import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(124, 59, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 115, 119, 0.15) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#E8C84A] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Our Services</span>
          <h1 className="text-6xl md:text-[100px] font-extrabold leading-[0.9] tracking-tighter text-white mb-12">
            The Blueprint for<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#1E90D4]">Digital Dominance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-medium">
            Four specialized sectors. One singular focus: engineering measurable growth for the world's most ambitious brands.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(124,59,237,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Service Cards Grid */}
      <section className="py-40 px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">

          {/* Lead Generation */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#1E90D4]/20 to-transparent hover:from-[#1E90D4]/40 transition-all duration-500">
            <div className="bg-[#0A1628] rounded-[2.3rem] p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">campaign</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Lead Generation</h3>
              <p className="text-slate-400 leading-relaxed mb-10 flex-grow">Proprietary multi-channel outbound systems designed to flood your pipeline with pre-qualified decision makers through surgical precision.</p>
              <Link to="/services/lead-generation" className="group/link flex items-center gap-2 text-sm font-black text-[#1E90D4] tracking-[0.15em] uppercase hover:opacity-80 transition-all">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Website Creation */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#0D7377]/20 to-transparent hover:from-[#0D7377]/40 transition-all duration-500">
            <div className="bg-[#0A1628] rounded-[2.3rem] p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Website Creation</h3>
              <p className="text-slate-400 leading-relaxed mb-10 flex-grow">High-performance digital storefronts built on conversion psychology, lightning-fast infrastructure, and seamless user experiences.</p>
              <Link to="/services/website-creation" className="group/link flex items-center gap-2 text-sm font-black text-[#0D7377] tracking-[0.15em] uppercase hover:opacity-80 transition-all">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Social Media Management */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#E8C84A]/20 to-transparent hover:from-[#E8C84A]/40 transition-all duration-500">
            <div className="bg-[#0A1628] rounded-[2.3rem] p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#E8C84A]/10 border border-[#E8C84A]/20 flex items-center justify-center text-[#E8C84A] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">share</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Social Media Management</h3>
              <p className="text-slate-400 leading-relaxed mb-10 flex-grow">Omnipresent content strategies that build authority and cultivate deep community engagement across all major social platforms.</p>
              <Link to="/services/social-media" className="group/link flex items-center gap-2 text-sm font-black text-[#E8C84A] tracking-[0.15em] uppercase hover:opacity-80 transition-all">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* SEO Mastery */}
          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#7c3bed]/20 to-transparent hover:from-[#7c3bed]/40 transition-all duration-500">
            <div className="bg-[#0A1628] rounded-[2.3rem] p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">search</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">SEO Mastery</h3>
              <p className="text-slate-400 leading-relaxed mb-10 flex-grow">Aggressive organic ranking strategies to capture high-intent search traffic and establish long-term market dominance.</p>
              <Link to="/services/seo-mastery" className="group/link flex items-center gap-2 text-sm font-black text-[#7c3bed] tracking-[0.15em] uppercase hover:opacity-80 transition-all">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#020408]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(124, 59, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 115, 119, 0.15) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-[84px] font-extrabold text-white mb-10 leading-[1] tracking-tighter">Ready to engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#1E90D4]">dominance?</span></h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#7c3bed] to-[#1E90D4] px-20 py-8 rounded-full text-2xl font-black text-white shadow-[0_0_20px_rgba(124,59,237,0.3)] hover:shadow-[0_0_40px_rgba(124,59,237,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
