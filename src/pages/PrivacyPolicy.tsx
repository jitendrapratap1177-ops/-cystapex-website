import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#7c3bed]/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto">

          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#E8C84A] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Legal Framework v1.2</span>

          <h1 className="text-6xl md:text-[80px] font-extrabold leading-[1] tracking-tighter text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-16">Last Updated: October 24, 2023</p>

          <p className="text-lg text-slate-300 leading-relaxed mb-16">
            CYST APEX ("we," "us," or "our") is committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information in compliance with the Digital Personal Data Protection (DPDP) Act of India and other applicable international data protection standards.
          </p>

          {/* Information Collection */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#7c3bed]"></span>
              Information Collection
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">We collect personal data that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect may include:</p>
            <div className="space-y-4 pl-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#7c3bed] text-lg mt-0.5">chevron_right</span>
                <p className="text-slate-300"><strong className="text-white">Personal Identifiers:</strong> Name, email address, phone number, and professional designation.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#7c3bed] text-lg mt-0.5">chevron_right</span>
                <p className="text-slate-300"><strong className="text-white">Business Information:</strong> Company name, industry, and scale of operations.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#7c3bed] text-lg mt-0.5">chevron_right</span>
                <p className="text-slate-300"><strong className="text-white">Technical Data:</strong> IP addresses, browser types, and usage patterns through automated tracking technologies.</p>
              </div>
            </div>
          </div>

          {/* DPDP Act Compliance */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#1E90D4]"></span>
              Data Protection (DPDP Act Compliance)
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">In accordance with the Digital Personal Data Protection Act (DPDP Act), we act as a "Data Fiduciary." We implement stringent technical and organizational measures to ensure the security of personal data, including:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'End-to-end encryption for data at rest and in transit.',
                'Strict access control mechanisms based on the principle of least privilege.',
                'Regular security audits and vulnerability assessments.',
                'Appointment of a Data Protection Officer (DPO) to oversee compliance.'
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#10B981] text-lg mt-0.5">shield</span>
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Policy */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#0D7377]"></span>
              Cookie Policy
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic. These are used to:</p>
            <div className="space-y-3 pl-4">
              {[
                'Remember your preferences and settings.',
                'Understand how you navigate our site.',
                'Improve the performance and security of our services.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0D7377] text-lg mt-0.5">cookie</span>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-6">You can instruct your browser to refuse all cookies. However, some portions of our service may not function properly without them.</p>
          </div>

          {/* User Rights */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#E8C84A]"></span>
              User Rights
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">As a "Data Principal" under Indian law, you are entitled to the following rights:</p>
            <div className="space-y-4">
              {[
                { title: 'Right to Access', desc: 'You can request a summary of the personal data being processed by us.' },
                { title: 'Right to Correction', desc: 'You have the right to correct inaccurate or incomplete data.' },
                { title: 'Right to Erasure', desc: 'You may request the deletion of your personal data when it is no longer necessary.' },
                { title: 'Right to Withdraw Consent', desc: 'You may withdraw your consent at any time, subject to legal or contractual restrictions.' },
                { title: 'Right to Grievance Redressal', desc: 'You have the right to register a grievance with our Data Protection Officer.' }
              ].map((right, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#E8C84A]/20 border border-[#E8C84A]/30 flex items-center justify-center text-[#E8C84A] text-xs font-black">{i + 1}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{right.title}</h4>
                    <p className="text-slate-400 text-sm">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="pt-12 border-t border-white/5">
            <Link to="/" className="inline-flex items-center gap-2 text-[#7c3bed] font-bold hover:underline">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Return to Home
            </Link>
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-8">© 2026 CYST APEX GROWTH AGENCY. ALL RIGHTS RESERVED. PROTECTED BY INDIAN DATA LAWS.</p>
          </div>

        </div>
      </main>
    </>
  );
}
