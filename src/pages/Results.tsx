import { Link } from 'react-router-dom';

export default function Results() {
  return (
    <>
      {/* Hero */}
      <header className="pt-64 pb-32 px-8">
        <div className="max-w-[720px] mx-auto text-left">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight text-white mb-8">
            Proven Performance.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
            Real outcomes from the brands we've scaled. No fluff, just the data behind our most impactful partnerships.
          </p>
        </div>
      </header>

      {/* Case Studies */}
      <main className="px-8 pb-32">
        <div className="max-w-[720px] mx-auto space-y-32">

          {/* Case Study 1: 340% ROI */}
          <article className="pb-32" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="mb-12">
              <div className="text-[80px] md:text-[120px] font-black text-[#1E90D4] leading-none tracking-tighter mb-4">
                340% ROI
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                How we scaled a SaaS Unicorn to 8-figures.
              </h2>
            </div>
            <div className="space-y-8 text-[18px] md:text-[20px] text-slate-300 leading-relaxed">
              <p>
                The challenge was clear: a high-growth SaaS platform had hit a plateau in customer acquisition costs. Despite a superior product, their funnel was leaking potential users at the final conversion stage. We stepped in to audit the entire user journey, identifying friction points that were invisible to their internal team.
              </p>
              <div className="py-12">
                <div className="h-48 w-full relative bg-white/5 rounded-2xl p-8 overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150" style={{ filter: 'drop-shadow(0 0 8px rgba(30, 144, 212, 0.4))' }}>
                    <path d="M0 130 Q50 120 100 110 T200 80 T300 40 T400 10" fill="none" stroke="#1E90D4" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="400" cy="10" fill="#1E90D4" r="4"></circle>
                  </svg>
                </div>
              </div>
              <p>
                By implementing our proprietary behavioral targeting protocol and rebuilding the funnel architecture from the ground up, we didn't just increase traffic—we increased quality. The result was a compounding growth loop that drove monthly recurring revenue from $120k to $1.1M in just under two quarters.
              </p>
              <p>
                Today, the brand maintains a dominant market position with a customer acquisition cost that is 60% lower than the industry average. This efficiency has allowed them to reinvest into product R&amp;D, further widening their competitive moat.
              </p>
            </div>
          </article>

          {/* Case Study 2: 8x ROAS */}
          <article className="pb-32" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="mb-12">
              <div className="text-[80px] md:text-[120px] font-black text-[#E8C84A] leading-none tracking-tighter mb-4">
                8x ROAS
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Dominating the competitive e-commerce landscape.
              </h2>
            </div>
            <div className="space-y-8 text-[18px] md:text-[20px] text-slate-300 leading-relaxed">
              <p>
                When this luxury lifestyle brand approached us, they were struggling with volatile ad performance. Their return on ad spend fluctuated wildly between 1.5x and 3x, making it impossible to forecast inventory or hire with confidence. They needed stability and scalability.
              </p>
              <div className="py-12">
                <div className="h-48 w-full relative bg-white/5 rounded-2xl p-8 overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150" style={{ filter: 'drop-shadow(0 0 8px rgba(232, 200, 74, 0.4))' }}>
                    <path d="M0 140 L40 135 L80 120 L120 130 L160 100 L200 90 L240 60 L280 70 L320 30 L360 40 L400 10" fill="none" stroke="#E8C84A" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="400" cy="10" fill="#E8C84A" r="4"></circle>
                  </svg>
                </div>
              </div>
              <p>
                We shifted their strategy from broad-match interest targeting to a data-first approach utilizing first-party customer signals. By training their pixel on high-value conversion events rather than just traffic, we were able to find their "perfect buyer" with surgical precision.
              </p>
              <p>
                Within 90 days, we achieved a consistent 8x ROAS while simultaneously tripling their monthly ad spend. This wasn't a temporary spike; it became their new baseline, enabling a complete international expansion that was previously sidelined due to budget constraints.
              </p>
            </div>
          </article>

          {/* Case Study 3: 1,200/mo */}
          <article className="pb-32">
            <div className="mb-12">
              <div className="text-[80px] md:text-[120px] font-black text-[#0D7377] leading-none tracking-tighter mb-4">
                1,200/mo
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Automating high-ticket lead generation.
              </h2>
            </div>
            <div className="space-y-8 text-[18px] md:text-[20px] text-slate-300 leading-relaxed">
              <p>
                A leading real estate investment firm was relying on manual outreach and referrals to fill their pipeline. This approach was not only slow but unpredictable. They were spending more time hunting for leads than closing deals, leading to significant burnout among their senior partners.
              </p>
              <div className="py-12">
                <div className="h-48 w-full relative bg-white/5 rounded-2xl p-8 overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150" style={{ filter: 'drop-shadow(0 0 8px rgba(13, 115, 119, 0.4))' }}>
                    <rect fill="#0D7377" height="40" opacity="0.4" width="30" x="20" y="100"></rect>
                    <rect fill="#0D7377" height="55" opacity="0.5" width="30" x="70" y="85"></rect>
                    <rect fill="#0D7377" height="70" opacity="0.6" width="30" x="120" y="70"></rect>
                    <rect fill="#0D7377" height="85" opacity="0.7" width="30" x="170" y="55"></rect>
                    <rect fill="#0D7377" height="100" opacity="0.8" width="30" x="220" y="40"></rect>
                    <rect fill="#0D7377" height="115" opacity="0.9" width="30" x="270" y="25"></rect>
                    <rect fill="#0D7377" height="130" width="30" x="320" y="10"></rect>
                  </svg>
                </div>
              </div>
              <p>
                We built an automated acquisition engine that qualified prospects through an interactive value-add tool before they ever booked a call. This ensured that every meeting on the firm's calendar was with a highly qualified, intent-driven investor ready to move forward.
              </p>
              <p>
                The system now delivers over 1,200 qualified appointments every month at a cost-per-lead that has remained stable even as we scaled volume across multiple geographic regions.
              </p>
            </div>
          </article>

        </div>
      </main>

      {/* CTA */}
      <section className="py-64 px-8 border-t border-white/5">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">
            Ready for your own success story?
          </h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-16 py-6 bg-white text-[#05080F] rounded-full text-lg font-black uppercase tracking-widest hover:bg-[#1E90D4] hover:text-white transition-all duration-300">
            Grow Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
