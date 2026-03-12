import { Link } from 'react-router-dom';

export default function ServiceLeadGen() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(30,144,212,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(34,211,238,0.1) 0%, transparent 40%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#1E90D4]/10 text-[#1E90D4] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-[#1E90D4]/20 mb-8">Service Detail</span>
          <h1 className="text-6xl md:text-[90px] font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
            Lead Generation That<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90D4] to-[#22D3EE]">Pays For Itself</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed font-medium">
            We scale your revenue by engineering high-intent automated funnels and multi-channel outreach strategies that convert prospects into partners.
          </p>
        </div>
      </header>

      {/* Strategy Section */}
      <section className="py-32 px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">The Automated Funnel Strategy</h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-20">
            We utilize advanced lead qualification techniques and multi-channel outreach to populate your sales pipeline. Our strategy focuses on high-intent prospects, ensuring that every marketing dollar spent contributes directly to your bottom line.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-8">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Outreach</h3>
              <p className="text-slate-400 leading-relaxed">Targeted engagement across LinkedIn, Email, and Social platforms to capture demand wherever it lives.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] mb-8">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lead Qualification</h3>
              <p className="text-slate-400 leading-relaxed">Strict AI-driven scoring models ensure your sales team only spends time with decision-makers who are ready to buy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-8 bg-[#020408]">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-12 rounded-[3rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 border-l-8 border-l-[#1E90D4] relative">
            <span className="material-symbols-outlined text-6xl text-[#1E90D4]/20 absolute top-8 right-12">format_quote</span>
            <p className="text-2xl text-slate-200 font-medium leading-relaxed mb-8 italic max-w-3xl">
              "Since implementing the CYST APEX lead funnel, our customer acquisition cost dropped by 42% while our average deal size increased by nearly 30%."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1E90D4] to-[#22D3EE]"></div>
              <div>
                <p className="text-white font-bold">Marcus Thorne</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-black">CEO, Nexus Dynamics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Performance */}
      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.5em] mb-16">Growth Performance</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
              <div className="text-6xl font-black text-white mb-2">+124%</div>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-bold mb-6">
                <span className="material-symbols-outlined text-sm">trending_up</span> +24.5% YoY
              </div>
              <div className="h-24 flex items-end gap-2">
                {['Q1','Q2','Q3','Q4'].map((q, i) => (
                  <div key={q} className="flex-1 flex flex-col items-center gap-2">
                    <div className={`w-full bg-[#1E90D4] rounded-t-lg`} style={{ height: `${30 + i * 20}%`, opacity: 0.4 + i * 0.2 }}></div>
                    <span className="text-[10px] font-black text-slate-600">{q}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Inbound MQLs</p>
                  <p className="text-3xl font-black text-white">8,429</p>
                </div>
                <span className="material-symbols-outlined text-[#1E90D4] text-3xl">groups</span>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">SQL Conversion</p>
                  <p className="text-3xl font-black text-white">24.8%</p>
                </div>
                <span className="material-symbols-outlined text-[#10B981] text-3xl">verified</span>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Avg. CAC</p>
                  <p className="text-3xl font-black text-white">$142</p>
                </div>
                <span className="material-symbols-outlined text-[#E8C84A] text-3xl">payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden bg-[#020408]">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Ready to scale your pipeline?</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">Join over 200+ companies using CYST APEX to automate their sales cycles and achieve predictable growth.</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#1E90D4] to-[#22D3EE] px-16 py-6 rounded-full text-xl font-black text-white shadow-[0_0_20px_rgba(30,144,212,0.3)] hover:shadow-[0_0_40px_rgba(30,144,212,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
