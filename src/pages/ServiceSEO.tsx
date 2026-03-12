import { Link } from 'react-router-dom';

export default function ServiceSEO() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(124,59,237,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(168,85,247,0.1) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#7c3bed]/10 text-[#7c3bed] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-[#7c3bed]/20 mb-8">Service Detail</span>
          <h1 className="text-6xl md:text-[90px] font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
            Command Search.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#A855F7]">Capture Intent.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
            Master the art of visibility. We combine on-page architecture, technical precision, and authority engineering to dominate search results and turn intent into growth.
          </p>
        </div>
      </header>

      {/* Keyword Performance */}
      <section className="py-24 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.5em] mb-16">Keyword Performance</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">Visibility</p>
              <div className="text-5xl font-black text-white">98.4%</div>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">Avg. Position</p>
              <div className="text-5xl font-black text-white">#1.2</div>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">CTR Rate</p>
              <div className="text-5xl font-black text-white">12.5%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trinity of SEO Success */}
      <section className="py-40 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-20 tracking-tight text-center">The Trinity of SEO Success</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-8">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Page Architecture</h3>
              <p className="text-slate-400 leading-relaxed mb-6">We don't just write tags; we build logical topical silos that Google loves. Our semantic HTML structures ensure bots understand your value instantly.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Semantic Mapping</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Entity Optimization</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Intent-Matching UX</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Precision</h3>
              <p className="text-slate-400 leading-relaxed mb-6">Speed and crawlability are non-negotiable. We optimize Core Web Vitals and schema deployment to ensure zero friction.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Advanced Schema Markup</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> JS Rendering Optimization</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Crawl Budget Efficiency</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] mb-8">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authority Engineering</h3>
              <p className="text-slate-400 leading-relaxed mb-6">Links are the currency of the web. We build high-impact, editorial-grade backlink profiles that solidify your position.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Digital PR Strategy</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> Link Gap Analysis</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span> E-E-A-T Framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Data */}
      <section className="py-32 px-8 bg-[#020408]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Transparent ROI Through Precise Data</h2>
          <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto">SEO shouldn't be a mystery. We provide real-time dashboarding that tracks every movement in your organic landscape.</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-xl mx-auto">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="text-5xl font-black text-white mb-2">3.2x</div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Average Traffic Lift</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="text-5xl font-black text-white mb-2">210%</div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Ranking Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-16 tracking-tighter">Ready to dominate your industry's search landscape?</h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#7c3bed] to-[#A855F7] px-16 py-6 rounded-full text-xl font-black text-white shadow-[0_0_20px_rgba(124,59,237,0.3)] hover:shadow-[0_0_40px_rgba(124,59,237,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
