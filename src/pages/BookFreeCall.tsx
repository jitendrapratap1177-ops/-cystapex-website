import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BookFreeCall() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking-confirmed');
  };

  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#7c3bed]/15 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#1E90D4]/10 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">

          {/* Left Column — Info */}
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="text-6xl md:text-[80px] font-extrabold leading-[1.05] tracking-tight text-white mb-10">
                Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-[#1E90D4]">Growth.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                Schedule your strategy session with our growth experts. We'll analyze your current trajectory and identify your fastest path to market dominance.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">15-min discovery call</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Brief assessment of your goals and current challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#1E90D4]/10 border border-[#1E90D4]/20 flex items-center justify-center text-[#1E90D4] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">route</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tailored growth strategy</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">A customized roadmap built specifically for your niche.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">No-obligation audit</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Free performance audit of your existing digital assets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Booking Form */}
          <div className="relative">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-2xl relative z-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Book Your Session</h2>
                <p className="text-slate-400 text-sm">Fill in the details below to secure your spot.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="John Doe"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Email</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="john@company.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Phone</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="+91 00000 00000"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Company</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      placeholder="Acme Corp"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Preferred Date</label>
                    <input
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:border-[#7c3bed] focus:outline-none transition-all"
                      required
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Preferred Time</label>
                    <select
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#7c3bed] focus:outline-none transition-all appearance-none cursor-pointer"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Select Time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#7c3bed] to-[#1E90D4] py-5 rounded-xl text-lg font-bold text-white shadow-2xl shadow-[#7c3bed]/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-3 mt-4" type="submit">
                  Confirm Booking
                  <span className="material-symbols-outlined">event_available</span>
                </button>
              </form>
              <p className="text-center mt-8 text-xs text-slate-500 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[#0D7377] text-sm">lock</span>
                Instant Confirmation • Guaranteed Confidentiality
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
