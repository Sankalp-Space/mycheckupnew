import { Sparkles, MapPin, ShieldCheck, TestTube, FileText, CheckCircle, Building2  , FileCheck   } from "lucide-react";

export default function HomeSampleCollection() {
  const steps = [
    {
      id: "01",
      title: "Easy Online Booking",
      desc: "Book your test online or via phone in under 2 minutes",
      icon: Sparkles,
      side: "left",
    },
    {
      id: "02",
      title: "Live Tracking of Phlebotomist",
      desc: "Real-time updates on our professional arriving at your home",
      icon: MapPin,
      side: "right",
    },
    {
      id: "03",
      title: "Safe Sample Collection",
      desc: "Trained experts collect samples following strict hygiene protocols",
      icon: TestTube,
      side: "left",
    },
    {
      id: "04",
      title: "Sample Reaches Accredited Lab",
      desc: "Temperature-controlled transport to our NABL certified labs",
      icon: Building2,
      side: "right",
    },
    {
      id: "05",
      title: "Quick Doctor-Verified Reports",
      desc: "Receive digital reports within 24-48 hours on your dashboard",
      icon: FileCheck,
      side: "left",
    },
  ];

  return (
    <section className="home-sample-section py-24 px-4 relative overflow-hidden">
      {/* decorative radial spots to match Figma */}
      <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9d7e7] to-transparent opacity-40 pointer-events-none blur-3xl"></div>
      <div className="absolute right-24 top-48 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#edd6e6] to-transparent opacity-30 pointer-events-none blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-4 mb-6">
          <span className="px-4 py-1 rounded-full bg-white/20 text-sm text-white tracking-wider border border-white/10">OUR PROCESS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-theme-dark mb-2">How Does Home Sample Collection Work?</h2>
        <p className="text-theme-text text-lg">Your health journey in 5 simple steps</p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-20">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 flex flex-col items-center">
          <div className="w-1 bg-[#cdaec0] h-full rounded" />
        </div>

        <div className="space-y-28">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = step.side === "left";
            const color = i % 2 === 0 ? '#5A2B4D' : '#D8BFD8';
            return (
              <div key={i} className={`relative flex items-center ${isLeft ? "justify-start pr-20" : "justify-end pl-20"}`}>
                {/* Card */}
                <div className={`group step-card relative bg-white w-[520px] rounded-2xl p-8 shadow-[0_24px_40px_rgba(90,43,77,0.12)] border border-transparent transition-all duration-350 hover:-translate-y-4 hover:border-[#5A2B4D] hover:shadow-none`}>
                  {/* Decorative blob that appears on hover */}
                  <svg
                    className={`decor-blob pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 ${isLeft ? "-right-44" : "-left-44"}`}
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    {/* <defs>
                      <radialGradient id={`rb${i}`} cx="50%" cy="50%">
                        <stop offset="0" stopColor="#FFF5FB" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#EDD6E6" stopOpacity="0.9" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="60" cy="60" rx="55" ry="35" fill={`url(#rb${i})`} /> */}
                  </svg>

                  <span className={`step-badge absolute -top-4 ${isLeft ? 'right-6' : 'left-6'}`} style={{ backgroundColor: color }}>{step.id}</span>

                  <h3 className="text-2xl font-semibold text-[#4b2e4b]">{step.title}</h3>
                  <p className="text-[#6b5a64] mt-4 leading-relaxed">{step.desc}</p>
                </div>

                {/* Center icon marker */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="timeline-icon w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center" style={{ borderColor: color }}>
                    <Icon className="text-[#5A2B4D]" size={36} />
                  </div>

                  <div className="mt-3 flex flex-col items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D6B9CB]" />
                    <span className="w-2 h-2 rounded-full bg-[#D6B9CB]" />
                    <span className="w-2 h-2 rounded-full bg-[#D6B9CB]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA card centered */}
       

      </div>
       <div className="flex justify-center mt-20">
          <div className="cta-card bg-white rounded-2xl shadow-[0_18px_40px_rgba(80,40,70,0.08)] p-10 w-full max-w-5xl border border-[#5A2B4D]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-theme-dark text-xl font-medium">Ready to experience hassle-free diagnostics at home?</p>
              <button className="bg-theme-primary text-white px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(90,43,77,0.28)] inline-flex items-center gap-3 hover:scale-105 transition-all duration-300">Schedule Your Home Collection <Sparkles /></button>
            </div>
          </div>
        </div>

      {/* Trusted Section */}
      <div className="mt-24 py-16 trusted-section">
        <h3 className="text-white text-4xl text-center font-semibold mb-4">Trusted by Millions Across India</h3>
        <p className="text-white/80 text-center mb-8">Your health, backed by numbers that matter</p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-4">
          {[
            { num: '5M+', label: 'Customers Served' },
            { num: '50K+', label: 'Tests Processed Everyday' },
            { num: '500+', label: 'Cities Covered' },
            { num: '1200+', label: 'Collection Centres' },
            { num: '2000+', label: 'Home Collection Experts' },
            { num: '25+', label: 'In-House Labs' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto w-14 h-14 rounded-xl bg-[#f3e9ef] flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle className="text-[#5A2B4D]" />
              </div>
              <p className="text-2xl font-semibold text-gray-800">{item.num}</p>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
