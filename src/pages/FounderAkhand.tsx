import { Link } from 'react-router-dom';

export default function FounderAkhand() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(124,59,237,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(168,85,247,0.1) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#A855F7] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Co-founder & Client Director</span>
          <h1 className="text-7xl md:text-[120px] font-extrabold leading-[0.85] tracking-tighter text-white mb-12">
            AKHAND<br/>PRATAP<br/>
            <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #fff 0%, #7c3bed 60%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SINGH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
            Orchestrating elite client lifecycles and scaling partner portfolios through data-driven relationship management and operational excellence.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(124,59,237,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Expertise Cards */}
      <section className="py-24 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-8">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Partnership</h3>
            <p className="text-slate-400 leading-relaxed">Building long-term, value-driven relationships that evolve beyond transactional agency work into embedded growth partnerships.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/20 flex items-center justify-center text-[#A855F7] mb-8">
              <span className="material-symbols-outlined text-3xl">analytics</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Performance Auditing</h3>
            <p className="text-slate-400 leading-relaxed">Monthly deep-dive analysis sessions that identify untapped potential and optimize active campaign performance to peak levels.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-8">
              <span className="material-symbols-outlined text-3xl">emoji_events</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Client Success</h3>
            <p className="text-slate-400 leading-relaxed">A relentless focus on measurable outcomes. Every partner is a case study in dominance with a dedicated success roadmap.</p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-40 px-8 relative overflow-hidden bg-[#020408]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-extrabold text-white tracking-tighter mb-4">Client Management Impact</h2>
            <div className="w-20 h-1.5 bg-[#7c3bed] mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Retention Rate</p>
                  <h3 className="text-5xl font-black text-white">98%</h3>
                </div>
                <span className="material-symbols-outlined text-[#10B981]">trending_up</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7c3bed] to-[#10B981] w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Avg Rating</p>
                  <h4 className="text-5xl font-black text-white">4.9<span className="text-2xl text-slate-500">/5</span></h4>
                </div>
                <div className="flex text-yellow-500">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Based on 120+ monthly partner audits</p>
            </div>
            <div className="lg:col-span-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">Portfolio Expansion</h4>
                  <p className="text-slate-500 text-sm">Cumulative YoY Growth Rate</p>
                </div>
                <div className="px-4 py-1 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] rounded-full text-lg font-black">450%</div>
              </div>
              <div className="h-32 flex items-end gap-2">
                <div className="flex-1 bg-[#7c3bed]/10 rounded-t-xl h-[10%]"></div>
                <div className="flex-1 bg-[#7c3bed]/20 rounded-t-xl h-[25%]"></div>
                <div className="flex-1 bg-[#7c3bed]/30 rounded-t-xl h-[40%]"></div>
                <div className="flex-1 bg-[#7c3bed]/40 rounded-t-xl h-[55%]"></div>
                <div className="flex-1 bg-[#7c3bed]/60 rounded-t-xl h-[70%]"></div>
                <div className="flex-1 bg-[#7c3bed]/80 rounded-t-xl h-[85%]"></div>
                <div className="flex-1 bg-[#7c3bed] rounded-t-xl h-[100%]"></div>
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-black text-slate-600 tracking-widest">
                <span>Q1 2023</span>
                <span>Q4 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-40 px-8 bg-[#020408]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-20 text-center">Partner Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 border-l-8 border-l-[#7c3bed] relative">
              <span className="material-symbols-outlined text-6xl text-[#7c3bed]/20 absolute top-8 right-12">format_quote</span>
              <p className="text-2xl text-slate-200 font-medium leading-relaxed mb-10 italic">
                "The transition to Akhand's management was the turning point for our scale. His eye for detail and commitment to our long-term vision is unlike anything we've seen in the agency space."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                <div>
                  <p className="text-white font-bold">Marcus Thorne</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">CEO, Nexus Enterprises</p>
                </div>
              </div>
            </div>
            <div className="p-12 rounded-[3rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 border-l-8 border-l-[#A855F7] relative">
              <span className="material-symbols-outlined text-6xl text-[#A855F7]/20 absolute top-8 right-12">format_quote</span>
              <p className="text-2xl text-slate-200 font-medium leading-relaxed mb-10 italic">
                "We didn't just get a manager; we got a strategic partner. Akhand's framework for account scaling helped us hit our 3-year target in just 14 months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                <div>
                  <p className="text-white font-bold">Elena Vance</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">Founder, Astra Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#05080F]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(124,59,237,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(168,85,247,0.1) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-12 leading-[1.1] tracking-tighter">Secure your brand's <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #fff 0%, #7c3bed 60%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>future.</span></h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#7c3bed] to-[#1E90D4] px-16 py-8 rounded-full text-xl font-black text-white shadow-[0_0_20px_rgba(124,59,237,0.3)] hover:shadow-[0_0_40px_rgba(124,59,237,0.6)] hover:scale-[1.05] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
