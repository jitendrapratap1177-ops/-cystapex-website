import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <>
      <main className="relative min-h-screen pt-48 pb-40 px-8 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#1E90D4]/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto">

          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-[#E8C84A] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10 mb-8">Legal Framework</span>

          <h1 className="text-6xl md:text-[80px] font-extrabold leading-[1] tracking-tighter text-white mb-6">Terms of Service</h1>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-16">Last Updated: October 24, 2023</p>

          {/* 01. Service Agreement */}
          <div className="mb-16 p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-extrabold text-white mb-6">
              <span className="text-[#7c3bed] mr-3">01.</span>Service Agreement
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              This Service Agreement governs the relationship between CYST APEX (hereinafter referred to as "the Agency") and the Client. The Agency provides digital growth, client management, and brand scaling services as outlined in specific project SOWs (Statements of Work).
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              By commissioning our services, the Client acknowledges that digital growth is subject to market variables. While we employ data-driven dominance strategies, the Agency makes no guarantees regarding specific platform algorithm behaviors beyond our direct control.
            </p>
            <div className="space-y-3 pl-4">
              {[
                'Provision of accurate brand data by the Client is mandatory for service execution.',
                'Communication will be conducted through official Agency channels only.',
                'Project timelines are estimates based on standard operational cycles.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#7c3bed] text-lg mt-0.5">chevron_right</span>
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 02. Payment & Refund */}
          <div className="mb-16 p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-extrabold text-white mb-6">
              <span className="text-[#1E90D4] mr-3">02.</span>Payment & Refund Policies
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              All financial transactions are processed in accordance with Indian financial regulations. Fees for services are billed as per the schedule defined in the Client's specific service tier.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">Our refund policy is structured to reflect the resource-intensive nature of high-end client management:</p>
            <div className="space-y-3 pl-4">
              {[
                'Retainer fees are non-refundable once the onboarding process has commenced.',
                'Performance-based bonuses, where applicable, are calculated at the end of each billing cycle.',
                'GST (Goods and Services Tax) of 18% is applicable to all domestic transactions within India.',
                'Delayed payments exceeding 15 days will result in a temporary suspension of service infrastructure.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1E90D4] text-lg mt-0.5">chevron_right</span>
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 03. Intellectual Property */}
          <div className="mb-16 p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-extrabold text-white mb-6">
              <span className="text-[#0D7377] mr-3">03.</span>Intellectual Property
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              All methodologies, frameworks, "CYST Ecosystem" architectures, and internal scaling scripts used by the Agency remain the exclusive intellectual property of CYST APEX.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Upon full payment of all outstanding invoices, the Client is granted a non-exclusive, perpetual license to use the final deliverables created specifically for their brand. This license does not extend to the Agency's proprietary toolsets or internal strategic playbooks.
            </p>
          </div>

          {/* 04. Limitation of Liability */}
          <div className="mb-16 p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-extrabold text-white mb-6">
              <span className="text-[#E8C84A] mr-3">04.</span>Limitation of Liability
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              To the maximum extent permitted by applicable Indian law, CYST APEX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The total liability of the Agency for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by the Client to the Agency during the three (3) months preceding the event giving rise to the claim.
            </p>
          </div>

          {/* 05. Jurisdiction */}
          <div className="mb-16 p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-extrabold text-white mb-6">
              <span className="text-[#7c3bed] mr-3">05.</span>Jurisdiction (New Delhi, India)
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>
            <p className="text-slate-400 leading-relaxed">
              In the event of a dispute, both parties agree to first attempt resolution through formal mediation before seeking judicial intervention.
            </p>
          </div>

          {/* Back to Home */}
          <div className="pt-12 border-t border-white/5">
            <Link to="/" className="inline-flex items-center gap-2 text-[#7c3bed] font-bold hover:underline">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Return to Home
            </Link>
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-8">© 2026 CYST APEX GROWTH AGENCY. ALL RIGHTS RESERVED.</p>
          </div>

        </div>
      </main>
    </>
  );
}
