import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="relative pt-40 lg:pt-72 pb-24 lg:pb-56 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-golden text-base-dark text-[10px] font-black uppercase tracking-[0.2em] rounded mb-8 lg:mb-10">Digital Growth Agency</span>
              <h1 className="text-5xl md:text-6xl lg:text-[84px] font-extrabold leading-[1.1] lg:leading-[1.05] tracking-tight text-white mb-10 lg:mb-14">
                We Don't Just Market Your Brand. <span className="text-gradient">We Make It Impossible to Ignore.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                Transforming high-potential brands into market leaders through strategic digital dominance and data-backed conversion systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 lg:pt-0">
              <Link to="/contact" className="w-full sm:w-auto text-center bg-gradient-primary px-10 lg:px-12 py-5 lg:py-6 rounded-lg text-lg font-bold text-white shadow-2xl shadow-primary/40 hover:scale-[1.02] transition-transform inline-block">
                Grow Yourself
              </Link>
            </div>
          </div>
          <div className="relative lg:pl-24 mt-16 lg:mt-0">
            <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-8 lg:translate-x-12">
              <div className="bg-card-dark p-6 lg:p-10 rounded-2xl border border-white/10 shadow-2xl translate-y-6 lg:translate-y-12">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <span className="material-symbols-outlined text-sea-green lg:scale-110">trending_up</span>
                  <span className="text-[10px] lg:text-[11px] text-sea-green font-black bg-sea-green/10 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">+87%</span>
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white">42.8k</div>
                <div className="text-[9px] lg:text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">Monthly Traffic</div>
              </div>
              <div className="bg-card-dark p-6 lg:p-10 rounded-2xl border border-white/10 shadow-2xl lg:-translate-y-8">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <span className="material-symbols-outlined text-primary lg:scale-110">groups</span>
                  <span className="text-[10px] lg:text-[11px] text-primary font-black bg-primary/10 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">Live</span>
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white">340+</div>
                <div className="text-[9px] lg:text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">Qualified Leads</div>
              </div>
              <div className="col-span-2 bg-card-dark p-8 lg:p-12 rounded-2xl border border-white/10 shadow-2xl mt-4">
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                  <div className="text-sm lg:text-base font-bold text-white">Conversion Performance</div>
                  <span className="material-symbols-outlined text-slate-600">more_horiz</span>
                </div>
                <div className="flex items-end gap-2 lg:gap-3 h-32 lg:h-40">
                  <div className="flex-1 bg-primary/20 rounded-t-lg h-12 lg:h-16"></div>
                  <div className="flex-1 bg-primary/40 rounded-t-lg h-20 lg:h-24"></div>
                  <div className="flex-1 bg-primary/60 rounded-t-lg h-28 lg:h-36"></div>
                  <div className="flex-1 bg-primary rounded-t-lg h-32 lg:h-40"></div>
                  <div className="flex-1 bg-sea-blue rounded-t-lg h-24 lg:h-32"></div>
                  <div className="flex-1 bg-sea-blue/60 rounded-t-lg h-16 lg:h-20"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/10 lg:bg-primary/20 blur-[80px] lg:blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sea-blue/20 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </header>
      <section className="py-24 lg:py-40 px-6 lg:px-8 border-y border-white/5 bg-card-dark/30">
        <div className="max-w-8xl mx-auto flex flex-wrap justify-between items-center gap-12 lg:gap-32">
          <div className="flex-1 min-w-[140px] flex flex-col items-center">
            <div className="text-4xl lg:text-5xl font-black text-sea-green leading-none">50+</div>
            <div className="text-[9px] lg:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mt-4 text-center">Active Brands</div>
          </div>
          <div className="flex-1 min-w-[140px] flex flex-col items-center">
            <div className="text-4xl lg:text-5xl font-black text-golden leading-none">3x</div>
            <div className="text-[9px] lg:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mt-4 text-center">Average ROI</div>
          </div>
          <div className="flex-1 min-w-[140px] flex flex-col items-center">
            <div className="text-4xl lg:text-5xl font-black text-sea-blue leading-none">200+</div>
            <div className="text-[9px] lg:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mt-4 text-center">Campaigns Run</div>
          </div>
          <div className="flex-1 min-w-[140px] flex flex-col items-center">
            <div className="text-4xl lg:text-5xl font-black text-primary leading-none">98%</div>
            <div className="text-[9px] lg:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mt-4 text-center">Retention Rate</div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-40 px-6 lg:px-8 bg-alt-dark">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Premium Growth Services</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">We deploy surgical-precision marketing tactics tailored to your unique market positioning and business objectives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            <div className="bg-card-dark p-10 rounded-2xl border-t-4 border-sea-green hover:translate-y-[-12px] transition-all duration-300 shadow-2xl flex flex-col">
              <div className="w-16 h-16 bg-sea-green/10 rounded-xl flex items-center justify-center text-sea-green mb-10">
                <span className="material-symbols-outlined scale-125">ads_click</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Lead Generation</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">Automated multi-channel acquisition funnels that deliver highly qualified prospects directly to your CRM with predictive lead scoring.</p>
              <Link className="text-sea-green text-sm font-black uppercase tracking-widest flex items-center gap-3 group" to="/services">
                Learn More
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-card-dark p-10 rounded-2xl border-t-4 border-sea-blue hover:translate-y-[-12px] transition-all duration-300 shadow-2xl flex flex-col">
              <div className="w-16 h-16 bg-sea-blue/10 rounded-xl flex items-center justify-center text-sea-blue mb-10">
                <span className="material-symbols-outlined scale-125">web_stories</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Website Creation</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">High-performance digital experiences designed to convert casual visitors into lifelong brand advocates through behavioral science.</p>
              <Link className="text-sea-blue text-sm font-black uppercase tracking-widest flex items-center gap-3 group" to="/services">
                Learn More
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-card-dark p-10 rounded-2xl border-t-4 border-primary hover:translate-y-[-12px] transition-all duration-300 shadow-2xl flex flex-col">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-10">
                <span className="material-symbols-outlined scale-125">hub</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">Dominant social strategy that builds authority, fosters community, and drives viral brand awareness across all relevant platforms.</p>
              <Link className="text-primary text-sm font-black uppercase tracking-widest flex items-center gap-3 group" to="/services">
                Learn More
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-card-dark p-10 rounded-2xl border-t-4 border-golden hover:translate-y-[-12px] transition-all duration-300 shadow-2xl flex flex-col">
              <div className="w-16 h-16 bg-golden/10 rounded-xl flex items-center justify-center text-golden mb-10 shadow-[0_0_15px_rgba(232,200,74,0.3)]">
                <span className="material-symbols-outlined scale-125">search</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">SEO Mastery</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">Command the search engines and capture intent-driven traffic with surgical SEO precision and high-authority backlink architecture.</p>
              <Link className="text-golden text-sm font-black uppercase tracking-widest flex items-center gap-3 group" to="/services">
                LEARN MORE
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-40 px-6 lg:px-8 relative dot-grid overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-24 lg:mb-36">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">The Apex Protocol</h2>
            <p className="text-slate-400 text-base lg:text-lg">Our systematic 3-step approach to scaling your brand to the summit.</p>
          </div>
          <div className="relative flex flex-col md:flex-row gap-16 lg:gap-48 items-center justify-between px-6 lg:px-12">
            <div className="hidden md:block absolute top-[40px] left-24 right-24 h-0.5 bg-white/10 -z-10"></div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-base-dark border-4 border-primary rounded-full flex items-center justify-center text-white text-2xl font-black mb-8 relative">
                01
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Discovery</h4>
              <p className="text-slate-400 text-base max-w-[280px] leading-relaxed">Deep dive into your metrics, competition, and untapped growth opportunities to build your roadmap.</p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-base-dark border-4 border-sea-blue rounded-full flex items-center justify-center text-white text-2xl font-black mb-8">
                02
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Build</h4>
              <p className="text-slate-400 text-base max-w-[280px] leading-relaxed">Rapid deployment of high-converting assets, automated funnels, and precision ad campaigns.</p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-base-dark border-4 border-sea-green rounded-full flex items-center justify-center text-white text-2xl font-black mb-8">
                03
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Scale</h4>
              <p className="text-slate-400 text-base max-w-[280px] leading-relaxed">Aggressive daily optimization and budget scaling to achieve absolute market dominance.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-40 px-6 lg:px-8 bg-base-dark">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20 lg:mb-32">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 text-center">Trusted by Market Leaders</h2>
            <p className="text-slate-400 text-base lg:text-lg text-center">Real results from brands that demanded more than just average marketing.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/50 to-transparent">
              <div className="bg-card-dark p-10 lg:p-14 rounded-2xl h-full flex flex-col">
                <div className="text-golden flex gap-1 mb-8 lg:mb-10">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-300 italic mb-10 lg:mb-12 leading-relaxed text-lg lg:text-xl">"CYST APEX completely overhauled our lead gen system. Within 3 months, our cost per lead dropped by 45% while volume tripled."</p>
                <div className="mt-auto flex items-center gap-5">
                  <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full bg-slate-800 border-2 border-primary/20"></div>
                  <div>
                    <div className="text-base font-bold text-white">James Sterling</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">CEO, Velocity Labs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-sea-blue/50 to-transparent">
              <div className="bg-card-dark p-10 lg:p-14 rounded-2xl h-full flex flex-col">
                <div className="text-golden flex gap-1 mb-8 lg:mb-10">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-300 italic mb-10 lg:mb-12 leading-relaxed text-lg lg:text-xl">"Their web creation team is world-class. Our site speed and mobile conversion rates are now at an all-time high."</p>
                <div className="mt-auto flex items-center gap-5">
                  <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full bg-slate-800 border-2 border-sea-blue/20"></div>
                  <div>
                    <div className="text-base font-bold text-white">Sarah Chen</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Founder, Aura Digital</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-sea-green/50 to-transparent">
              <div className="bg-card-dark p-10 lg:p-14 rounded-2xl h-full flex flex-col">
                <div className="text-golden flex gap-1 mb-8 lg:mb-10">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-300 italic mb-10 lg:mb-12 leading-relaxed text-lg lg:text-xl">"The ROI we've seen on our social ad spend has been staggering. CYST APEX knows exactly where the attention is."</p>
                <div className="mt-auto flex items-center gap-5">
                  <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full bg-slate-800 border-2 border-sea-green/20"></div>
                  <div>
                    <div className="text-base font-bold text-white">Marcus Thorne</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">CMO, Peak Fitness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
