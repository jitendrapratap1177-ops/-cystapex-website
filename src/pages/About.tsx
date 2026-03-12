import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Hero Header */}
      <header className="relative pt-40 lg:pt-48 pb-20 lg:pb-32 px-6 lg:px-8 overflow-hidden" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(124, 59, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 115, 119, 0.15) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(30, 144, 212, 0.1) 0%, transparent 60%)'
      }}>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#22D3EE] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Architecting Supremacy</span>
          <h1 className="text-4xl md:text-8xl lg:text-[110px] font-extrabold leading-[1] lg:leading-[0.9] tracking-tighter text-white mb-10 lg:mb-12">
            <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #fff 0%, #7c3bed 50%, #1E90D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Minds Behind</span> <br className="hidden md:block" />
            <span className="text-white">The Growth.</span>
          </h1>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-transparent to-[#7c3bed]"></div>
            <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 rounded-full bg-[#7c3bed] shadow-[0_0_15px_#7c3bed]"></div>
            <div className="w-16 lg:w-24 h-px bg-gradient-to-l from-transparent to-[#7c3bed]"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(30, 144, 212, 0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Mission & Core Values */}
      <section className="py-24 lg:py-40 px-6 lg:px-8 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 relative z-10 text-left">
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight text-left">Our Mission</h2>
              <div className="w-20 h-1.5 bg-[#22D3EE] rounded-full"></div>
            </div>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light text-left">
              At CYST APEX, we don't believe in "participation trophies" in the digital landscape. We exist to engineer market dominance for brands that refuse to be second best. Our approach combines rigorous data analysis with aggressive creative execution to build untouchable market positions.
            </p>
            <div className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 border-l-4 border-l-[#22D3EE]">
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold text-[#22D3EE] uppercase tracking-widest">Efficiency Benchmark</span>
                <span className="text-2xl font-black text-white">98.4%</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#22D3EE] w-[98.4%] shadow-[0_0_10px_#22d3ee]"></div>
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight text-left">Core Values</h2>
              <div className="w-20 h-1.5 bg-[#7c3bed] rounded-full"></div>
            </div>
            <div className="space-y-8">
              {/* Transparency */}
              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group transition-all hover:bg-white/5">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">visibility</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold text-white">Transparency</h4>
                      <span className="text-xs font-black text-[#7c3bed]">100% RAW DATA</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-[#7c3bed] w-full animate-pulse"></div>
                    </div>
                    <p className="text-slate-400 text-sm">Brutal honesty at every stage. We share the data, the wins, and the pivots with zero filter.</p>
                  </div>
                </div>
              </div>
              {/* Precision */}
              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 group transition-all hover:bg-white/5">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">biotech</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold text-white">Precision</h4>
                      <span className="text-xs font-black text-[#1E90D4]">99.9% ACCURACY</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-[#1E90D4] w-[99.9%]"></div>
                    </div>
                    <p className="text-slate-400 text-sm">Marketing is a science. We operate with surgical accuracy to ensure zero wastage of capital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact in Real-Time */}
      <section className="py-24 lg:py-40 px-6 lg:px-8 relative overflow-hidden bg-[#020408]">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <h2 className="text-[10px] lg:text-sm font-black text-slate-500 uppercase tracking-[0.4em] lg:tracking-[0.5em] mb-16 lg:mb-20">The Impact in Real-Time</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#7c3bed]/10 rounded-full blur-3xl group-hover:bg-[#7c3bed]/20 transition-all"></div>
              <div className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4">$140M+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-6 whitespace-nowrap">Revenue Generated</p>
              <div className="text-[#10B981] text-sm font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +24% vs LY
              </div>
            </div>
            <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-3xl group-hover:bg-[#22D3EE]/20 transition-all"></div>
              <div className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4">8.4x</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-6 whitespace-nowrap">Avg. ROAS Achieved</p>
              <div className="text-[#10B981] text-sm font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> Peak: 12.2x
              </div>
            </div>
            <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0D7377]/10 rounded-full blur-3xl group-hover:bg-[#0D7377]/20 transition-all"></div>
              <div className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4">12M+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-6 whitespace-nowrap">Qualified Leads</p>
              <div className="text-[#10B981] text-sm font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Validated
              </div>
            </div>
            <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#E8C84A]/10 rounded-full blur-3xl group-hover:bg-[#E8C84A]/20 transition-all"></div>
              <div className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4">450%</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-6 whitespace-nowrap">YoY Client Growth</p>
              <div className="text-[#10B981] text-sm font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">speed</span> Accelerated
              </div>
            </div>
          </div>

          {/* Growth Velocity Index Chart */}
          <div className="mt-32 max-w-4xl mx-auto p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h4 className="text-xl font-bold text-white">Growth Velocity Index</h4>
                <p className="text-slate-500 text-sm">Cumulative performance tracking (2020-2024)</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#7c3bed]"></div>
                  <span className="text-xs font-bold text-slate-400">Scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#22D3EE]"></div>
                  <span className="text-xs font-bold text-slate-400">Target</span>
                </div>
              </div>
            </div>
            <div className="h-40 flex items-end gap-2">
              <div className="flex-1 bg-[#7c3bed]/20 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[20%]"></div>
              <div className="flex-1 bg-[#7c3bed]/25 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[35%]"></div>
              <div className="flex-1 bg-[#7c3bed]/30 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[25%]"></div>
              <div className="flex-1 bg-[#7c3bed]/40 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[55%]"></div>
              <div className="flex-1 bg-[#7c3bed]/50 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[45%]"></div>
              <div className="flex-1 bg-[#7c3bed]/60 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[75%]"></div>
              <div className="flex-1 bg-[#7c3bed]/70 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[65%]"></div>
              <div className="flex-1 bg-[#7c3bed]/80 hover:bg-[#7c3bed]/40 transition-all rounded-t-lg h-[95%]"></div>
              <div className="flex-1 bg-[#7c3bed] hover:bg-[#7c3bed]/90 transition-all rounded-t-lg h-[100%]"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(30, 144, 212, 0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Aniket Singh */}
        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#10B981]/20 to-transparent hover:from-[#10B981]/40 transition-all duration-500">
          <div className="bg-[#0A1628] rounded-[2.3rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
            <div className="aspect-[4/5] relative overflow-hidden m-4 rounded-[1.8rem] bg-white/5 border border-white/5 flex flex-col justify-center px-8">
              <span className="inline-block self-start bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">TECH MASTER</span>
              <h4 className="text-4xl font-black text-white mb-6">Aniket Singh</h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-12">Chief Architect of the proprietary CYST growth engine, specializing in scalable infrastructure and advanced data algorithms.</p>
              <Link to="/about/aniket-singh" className="mt-auto group/link flex items-center gap-2 text-xs font-black text-[#10B981] tracking-[0.2em] hover:opacity-80 transition-all cursor-pointer">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#10B981]/5 blur-3xl rounded-full"></div>
          </div>
        </div>
        {/* Shantanu Singh */}
        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#1E90D4]/20 to-transparent hover:from-[#1E90D4]/40 transition-all duration-500">
          <div className="bg-[#0A1628] rounded-[2.3rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
            <div className="aspect-[4/5] relative overflow-hidden m-4 rounded-[1.8rem] bg-white/5 border border-white/5 flex flex-col justify-center px-8">
              <span className="inline-block self-start bg-[#1E90D4]/20 text-[#1E90D4] border border-[#1E90D4]/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">SALES EXPERT</span>
              <h4 className="text-4xl font-black text-white mb-6">Shantanu Singh</h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-12">Leader of high-ticket acquisition and strategic market expansion, driving revenue velocity through psychological sales engineering.</p>
              <Link to="/about/shantanu-singh" className="mt-auto group/link flex items-center gap-2 text-xs font-black text-[#1E90D4] tracking-[0.2em] hover:opacity-80 transition-all cursor-pointer">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1E90D4]/5 blur-3xl rounded-full"></div>
          </div>
        </div>
        {/* Akhand Pratap Singh */}
        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#7c3bed]/20 to-transparent hover:from-[#7c3bed]/40 transition-all duration-500">
          <div className="bg-[#0A1628] rounded-[2.3rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col">
            <div className="aspect-[4/5] relative overflow-hidden m-4 rounded-[1.8rem] bg-white/5 border border-white/5 flex flex-col justify-center px-8">
              <span className="inline-block self-start bg-[#7c3bed]/20 text-[#7c3bed] border border-[#7c3bed]/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">CLIENT MANAGEMENT</span>
              <h4 className="text-4xl font-black text-white mb-6">Akhand Pratap Singh</h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-12">Dedicated to elite partner success and lifecycle excellence, ensuring every client achieves untouchable market dominance.</p>
              <Link to="/about/akhand-pratap-singh" className="mt-auto group/link flex items-center gap-2 text-xs font-black text-[#7c3bed] tracking-[0.2em] hover:opacity-80 transition-all cursor-pointer">
                LEARN MORE <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7c3bed]/5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </div >
      </section >

    {/* CTA Section */ }
    < section className = "py-48 px-8 relative overflow-hidden" >
        <div className="absolute inset-0 bg-[#020408]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(124, 59, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 115, 119, 0.15) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(30, 144, 212, 0.1) 0%, transparent 60%)'
        }}></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-[84px] font-extrabold text-white mb-10 leading-[1] tracking-tighter">Ready to claim your place at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#1E90D4]">summit?</span></h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            We are highly selective. If your brand is engineered for aggressive expansion, the time is now.
          </p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-[#7c3bed] to-[#1E90D4] px-20 py-8 rounded-full text-2xl font-black text-white shadow-[0_0_20px_rgba(124,59,237,0.3)] hover:shadow-[0_0_40px_rgba(124,59,237,0.6)] hover:scale-[1.02] transition-all">
            Grow Yourself
          </Link>
        </div>
      </section >
    </>
  );
}
