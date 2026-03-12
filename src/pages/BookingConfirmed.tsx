import { Link } from 'react-router-dom';

export default function BookingConfirmed() {
  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D7377]/15 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-[#7c3bed]/10 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Success Icon */}
          <div className="w-32 h-32 mx-auto mb-12 rounded-full bg-[#0D7377]/10 border-2 border-[#0D7377]/30 flex items-center justify-center shadow-[0_0_40px_rgba(13,115,119,0.2)]">
            <span className="material-symbols-outlined text-6xl text-[#0D7377]">check_circle</span>
          </div>

          <h1 className="text-6xl md:text-[80px] font-extrabold leading-[1.05] tracking-tight text-white mb-8">
            Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7377] to-[#1E90D4]">Confirmed.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed font-medium mb-16">
            Your strategy session is secured. Check your inbox for the calendar invite and next steps.
          </p>

          {/* Confirmation Details Card */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-2xl mb-16 text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0D7377]/10 border border-[#0D7377]/20 flex items-center justify-center text-[#0D7377]">
                <span className="material-symbols-outlined">event</span>
              </div>
              <div>
                <h3 className="text-white font-bold">What's Next?</h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-black">Your Roadmap</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#0D7377]/20 border border-[#0D7377]/30 flex items-center justify-center text-[#0D7377] text-xs font-black">1</div>
                <div>
                  <h4 className="text-white font-bold text-sm">Check your email</h4>
                  <p className="text-slate-400 text-sm">You'll receive a calendar invite with the meeting link and preparation notes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#1E90D4]/20 border border-[#1E90D4]/30 flex items-center justify-center text-[#1E90D4] text-xs font-black">2</div>
                <div>
                  <h4 className="text-white font-bold text-sm">Prepare your data</h4>
                  <p className="text-slate-400 text-sm">Have your current analytics and KPIs ready for a more productive session.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#7c3bed]/20 border border-[#7c3bed]/30 flex items-center justify-center text-[#7c3bed] text-xs font-black">3</div>
                <div>
                  <h4 className="text-white font-bold text-sm">Join on time</h4>
                  <p className="text-slate-400 text-sm">Our growth architect will be ready to deep-dive into your market opportunities.</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center justify-center px-16 py-6 bg-white text-[#05080F] rounded-full text-lg font-black uppercase tracking-widest hover:bg-[#0D7377] hover:text-white transition-all duration-300 gap-3">
            <span className="material-symbols-outlined">home</span>
            Return to Home
          </Link>
        </div>
      </main>
    </>
  );
}
