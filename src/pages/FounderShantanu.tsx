import { Link } from 'react-router-dom';

export default function FounderShantanu() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(30,144,212,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(5,8,15,1) 0%, transparent 100%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#22D3EE] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Co-founder & Sales Expert</span>
          <h1 className="text-5xl md:text-[140px] font-extrabold leading-[1.1] md:leading-[0.85] tracking-tighter text-white mb-12">
            SHANTANU<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90D4] to-[#22D3EE]"> SINGH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed px-4">
            Architecting multi-million dollar revenue streams through psychological sales engineering and aggressive market dominance strategies.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(30,144,212,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Expertise Cards */}
      <section className="py-24 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Psychological Sales Engineering</h3>
            <p className="text-slate-400 leading-relaxed">Deconstructing buyer behavior to create friction-less acquisition paths. We don't just sell; we engineer the decision-making process.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
              <span className="material-symbols-outlined text-3xl">language</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Market Dominance</h3>
            <p className="text-slate-400 leading-relaxed">Strategic positioning that makes competition irrelevant. We focus on high-ticket acquisition that captures the peak of the market pyramid.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
              <span className="material-symbols-outlined text-3xl">speed</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Revenue Velocity</h3>
            <p className="text-slate-400 leading-relaxed">Accelerating the cash-conversion cycle through optimized sales funnels and high-performance closing frameworks.</p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-40 px-8 relative overflow-hidden bg-[#020408]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-extrabold text-white tracking-tighter mb-4">The Metric of Success</h2>
            <div className="w-20 h-1.5 bg-[#1E90D4] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="8"></circle>
                  <circle className="text-[#1E90D4] stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeLinecap="round" strokeWidth="8" style={{ strokeDasharray: 264, strokeDashoffset: 20, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#1E90D4]">payments</span>
                </div>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">$140M+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="8"></circle>
                  <circle className="text-[#22D3EE] stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeLinecap="round" strokeWidth="8" style={{ strokeDasharray: 264, strokeDashoffset: 40, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#22D3EE]">trending_up</span>
                </div>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">8.4x</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Avg. ROAS</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="8"></circle>
                  <circle className="text-[#10B981] stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeLinecap="round" strokeWidth="8" style={{ strokeDasharray: 264, strokeDashoffset: 60, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#10B981]">verified</span>
                </div>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">200+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">High-Ticket Closures</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(30,144,212,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Mentorship & Quote */}
      <section className="py-40 px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[#1E90D4] font-black tracking-widest text-xs uppercase">The Leadership Framework</span>
              <h2 className="text-5xl font-extrabold text-white tracking-tight">Mentorship & Team Building</h2>
              <div className="w-20 h-1.5 bg-[#1E90D4] rounded-full"></div>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Scaling a brand requires more than just a founder; it requires a world-class sales force. Shantanu specializes in building high-performance sales cultures, training elite closers who operate with the same surgical precision and psychological edge that he brought to the first $100M.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Closers Trained</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Sales Teams Built</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 flex flex-col justify-center border-l-8 border-l-[#1E90D4]">
              <span className="material-symbols-outlined text-8xl text-[#1E90D4]/20 absolute -top-10 -right-10 rotate-12">format_quote</span>
              <p className="text-3xl font-medium text-white italic leading-tight mb-8">
                "Sales is not about convincing people to buy. It's about engineering an environment where the value is so absolute that saying 'no' is an act of irrationality."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1E90D4] to-[#22D3EE]"></div>
                <div>
                  <div className="font-bold text-white">Shantanu Singh</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-black">Sales Architect</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#1E90D4]/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#020408]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(30,144,212,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-[84px] font-extrabold text-white mb-16 leading-[1] tracking-tighter">Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90D4] to-[#22D3EE]">revenue?</span></h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#1E90D4] to-[#22D3EE] px-24 py-10 rounded-full text-3xl font-black text-white shadow-[0_0_30px_rgba(30,144,212,0.4)] hover:shadow-[0_0_60px_rgba(30,144,212,0.7)] hover:scale-[1.05] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
