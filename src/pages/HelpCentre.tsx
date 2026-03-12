import { Link } from 'react-router-dom';

export default function HelpCentre() {
  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden">
        <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] bg-[#0D7377]/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-[1400px] mx-auto">

          {/* Hero */}
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-[80px] font-extrabold leading-[1] tracking-tighter text-white mb-8">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7377] to-[#22D3EE]">Help?</span>
            </h1>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            <div className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Onboarding</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Getting started with your CYST APEX partnership and system setup.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">receipt_long</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Billing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Manage invoices, payment methods, and subscription details.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">assignment</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service Scope</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Detailed breakdown of deliverables and service level agreements.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#E8C84A]/10 border border-[#E8C84A]/20 flex items-center justify-center text-[#E8C84A] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">manage_accounts</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Account Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Updating profile settings and managing team access levels.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl font-extrabold text-white mb-4 text-center">FAQ</h2>
            <p className="text-slate-500 text-sm font-black uppercase tracking-widest text-center mb-12">Common Questions</p>
          </div>

          {/* Still need help */}
          <div className="max-w-xl mx-auto text-center p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
            <p className="text-slate-400 mb-2">Contact Support: <span className="text-white font-medium">apexcyst@gmail.com</span></p>
            <p className="text-slate-500 text-sm">Typical response time: 2-4 business hours</p>
          </div>

          {/* Footer */}
          <div className="pt-16 text-center">
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">© 2026 CYST APEX GROWTH AGENCY. ALL RIGHTS RESERVED.</p>
          </div>

        </div>
      </main>
    </>
  );
}
