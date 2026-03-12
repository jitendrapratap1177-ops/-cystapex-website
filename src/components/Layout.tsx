import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-6 left-4 right-4 z-50 flex justify-center pointer-events-none">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl pointer-events-auto border border-white/10">
          <Link to="/" className="flex items-center gap-1.5 shrink-0">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">CYST</span>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-gradient">APEX</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 px-4">
            <Link to="/" className={`text-sm font-bold transition-colors ${currentPath === '/' ? 'text-primary flex items-center gap-1' : 'text-slate-400 hover:text-white flex items-center gap-1'}`}><span className="material-symbols-outlined text-[18px]">home</span>Home</Link>
            <Link to="/services" className={`text-sm font-bold transition-colors ${currentPath === '/services' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}>Services</Link>
            <Link to="/about" className={`text-sm font-bold transition-colors ${currentPath === '/about' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}>About Us</Link>
            <Link to="/results" className={`text-sm font-bold transition-colors ${currentPath === '/results' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}>Results</Link>
            <Link to="/contact" className={`text-sm font-bold transition-colors ${currentPath === '/contact' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}>Contact</Link>
          </div>
          <Link to="/book-free-call" className="bg-gradient-to-r from-primary to-sea-blue shrink-0 px-6 py-3 rounded-full text-xs font-bold text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider border border-white/10">
            Book Free Call
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#030609] py-12 px-8 border-t border-white/5">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black text-white tracking-tighter">CYST</span>
                <span className="text-2xl font-black text-gradient tracking-tighter">APEX</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Engineering hyper-growth for visionary brands through data-driven digital mastery.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services/lead-generation" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Lead Gen</Link></li>
                <li><Link to="/services/website-creation" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Web Design</Link></li>
                <li><Link to="/services/social-media" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Social Strategy</Link></li>
                <li><Link to="/services/seo-mastery" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">SEO Mastery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Support</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Terms of Service</Link></li>
                <li><Link to="/help-centre" className="text-slate-500 hover:text-sea-blue text-sm transition-colors">Help Centre</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
            <div className="text-[10px] text-slate-600 font-black tracking-[0.3em] uppercase">
              © 2026 CYST APEX GROWTH AGENCY. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors tracking-widest uppercase">Twitter</Link>
              <Link to="/" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors tracking-widest uppercase">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
