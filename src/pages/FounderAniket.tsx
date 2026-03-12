import { Link } from 'react-router-dom';

export default function FounderAniket() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(13,115,119,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(5,8,15,1) 0%, transparent 100%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#10B981] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Co-founder & Tech Architect</span>
          <h1 className="text-5xl md:text-[140px] font-extrabold leading-[1.1] md:leading-[0.85] tracking-tighter text-white mb-12">
            ANIKET<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7377] to-[#22D3EE]"> SINGH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed px-4">
            Engineering the proprietary systems and scalable infrastructure behind CYST APEX's dominant growth engine. Specializing in advanced data pipelines, predictive modelling, and high-availability architecture.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(13,115,119,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Expertise Cards */}
      <section className="py-24 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] mb-8">
              <span className="material-symbols-outlined text-3xl">developer_board</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Systems Architecture</h3>
            <p className="text-slate-400 leading-relaxed">Building fault-tolerant, horizontally scalable infrastructure that adapts to exponential traffic demands without breaking a sweat.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] mb-8">
              <span className="material-symbols-outlined text-3xl">query_stats</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Data Engineering</h3>
            <p className="text-slate-400 leading-relaxed">Advanced ETL pipelines and real-time analytics dashboards that transform raw data into actionable competitive intelligence.</p>
          </div>
          <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-8">
              <span className="material-symbols-outlined text-3xl">shield</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Security & Compliance</h3>
            <p className="text-slate-400 leading-relaxed">Implementing enterprise-grade encryption and compliance frameworks to safeguard global brand data.</p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-40 px-8 relative overflow-hidden bg-[#020408]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-extrabold text-white tracking-tighter mb-4">The Metric of Impact</h2>
            <div className="w-20 h-1.5 bg-[#0D7377] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl border-l-4 border-l-[#22D3EE]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Uptime Reliability</p>
                  <h3 className="text-5xl font-black text-white">99.9%</h3>
                </div>
                <span className="material-symbols-outlined text-[#22D3EE]">cloud_done</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                <div className="flex-1 bg-[#22D3EE]/20 h-[70%]"></div>
                <div className="flex-1 bg-[#22D3EE]/20 h-[80%]"></div>
                <div className="flex-1 bg-[#22D3EE]/20 h-[75%]"></div>
                <div className="flex-1 bg-[#22D3EE]/20 h-[90%]"></div>
                <div className="flex-1 bg-[#22D3EE]/20 h-[95%]"></div>
                <div className="flex-1 bg-[#22D3EE] h-[99%] shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl border-l-4 border-l-[#0D7377]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Code Efficiency</p>
                  <h3 className="text-5xl font-black text-white">+40%</h3>
                </div>
                <span className="material-symbols-outlined text-[#0D7377]">bolt</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                <div className="flex-1 bg-[#0D7377]/20 h-[40%]"></div>
                <div className="flex-1 bg-[#0D7377]/20 h-[50%]"></div>
                <div className="flex-1 bg-[#0D7377]/20 h-[65%]"></div>
                <div className="flex-1 bg-[#0D7377]/20 h-[55%]"></div>
                <div className="flex-1 bg-[#0D7377]/20 h-[80%]"></div>
                <div className="flex-1 bg-[#0D7377] h-[100%] shadow-[0_0_15px_rgba(13,115,119,0.5)]"></div>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl border-l-4 border-l-[#10B981]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Infrastructure Scale</p>
                  <h3 className="text-5xl font-black text-white">100x</h3>
                </div>
                <span className="material-symbols-outlined text-[#10B981]">rocket_launch</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                <div className="flex-1 bg-[#10B981]/20 h-[20%]"></div>
                <div className="flex-1 bg-[#10B981]/20 h-[40%]"></div>
                <div className="flex-1 bg-[#10B981]/20 h-[60%]"></div>
                <div className="flex-1 bg-[#10B981]/20 h-[80%]"></div>
                <div className="flex-1 bg-[#10B981]/20 h-[90%]"></div>
                <div className="flex-1 bg-[#10B981] h-[100%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(13,115,119,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Technical Milestones */}
      <section className="py-40 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-20 text-center tracking-tight">Technical Milestones</h2>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/10"></div>
            <div className="mb-16 relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0D7377] shadow-[0_0_10px_#0D7377]"></div>
              <span className="text-xs font-black text-[#0D7377] uppercase tracking-widest mb-2 block">2024</span>
              <h4 className="text-xl font-bold text-white mb-2">Proprietary Growth Engine V3</h4>
              <p className="text-slate-400">Deployed the most advanced iteration of CYST's technical core, integrating deep learning for lead scoring.</p>
            </div>
            <div className="mb-16 relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20"></div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 block">2022</span>
              <h4 className="text-xl font-bold text-white mb-2">Global Infrastructure Expansion</h4>
              <p className="text-slate-400">Successfully scaled client systems to handle 10M+ concurrent data points across multiple territories.</p>
            </div>
            <div className="mb-16 relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20"></div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 block">2020</span>
              <h4 className="text-xl font-bold text-white mb-2">Foundation of CYST APEX</h4>
              <p className="text-slate-400">Co-founded the agency with a vision to automate and engineer market dominance through superior tech stack.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20"></div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 block">Pre-2020</span>
              <h4 className="text-xl font-bold text-white mb-2">Engineering Background</h4>
              <p className="text-slate-400">Years of deep-level systems engineering and software development for high-performance enterprise applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#05080F]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(13,115,119,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] tracking-tighter">Ready to engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7377] to-[#22D3EE]">dominance?</span></h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">Aniket's technical roadmap for your brand starts with a single high-impact strategy session.</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#0D7377] to-[#22D3EE] px-12 py-6 rounded-2xl text-xl font-black text-white shadow-[0_0_20px_rgba(13,115,119,0.3)] hover:shadow-[0_0_40px_rgba(13,115,119,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
