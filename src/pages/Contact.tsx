import { Link, useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden">
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3bed]/20 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#E8C84A] text-[#05080F] text-[10px] font-black uppercase tracking-[0.2em] rounded mb-10">Get In Touch</span>
              <h1 className="text-6xl md:text-[72px] font-extrabold leading-[1.1] tracking-tight text-white mb-10">
                Ready to Reach the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#1E90D4]">Apex?</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                Stop guessing your growth. Partner with the agency that turns digital complexity into dominant market share.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#7c3bed]"></span>
                  Book a Strategy Call
                </h3>
                <p className="text-slate-400 max-w-md">Schedule a 30-minute deep dive with our growth architects to map out your dominance protocol.</p>
              </div>
              <div className="grid gap-12">
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Contact Info</h4>
                  <div className="space-y-4">
                    <p className="text-white font-medium flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#7c3bed] text-xl">mail</span>
                      apexcyst@gmail.com
                    </p>
                    <p className="text-white font-medium flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#7c3bed] text-xl mt-1">call</span>
                      <span className="leading-relaxed">+91 8840717459, +91 9140524397,<br/>+91 9451137910</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <a className="w-12 h-12 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="w-12 h-12 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
                <a className="w-12 h-12 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Inquiry Form */}
          <div className="relative">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-2xl relative z-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Inquiry Form</h2>
                <p className="text-slate-400 text-sm">Tell us about your project and we'll get back to you shortly.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/booking-confirmed'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Company Name</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="Acme Corp"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="john@company.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Mobile Number</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="+91 00000 00000"
                      required
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Monthly Budget</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#7c3bed] focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select Range</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10-25k">$10,000 - $25,000</option>
                    <option value="25-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Primary Goal</label>
                  <textarea
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all resize-none"
                    placeholder="Briefly describe your growth objectives..."
                    required
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#7c3bed] to-[#1E90D4] py-5 rounded-xl text-lg font-bold text-white shadow-2xl shadow-[#7c3bed]/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-3" type="submit">
                  Grow Yourself
                  <span className="material-symbols-outlined">bolt</span>
                </button>
              </form>
              <p className="text-center mt-8 text-xs text-slate-500">
                By submitting this form, you agree to our <Link to="/privacy-policy" className="text-[#7c3bed] hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#7c3bed]/20 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#1E90D4]/20 rounded-bl-3xl"></div>
          </div>

        </div>
      </main>
    </>
  );
}
