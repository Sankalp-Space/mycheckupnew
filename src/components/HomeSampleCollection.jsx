import { Sparkles, MapPin, ShieldCheck, TestTube, FileText, CheckCircle, Building2  , FileCheck, Users, Activity, Building, User, FlaskConical,UserRoundCheck     } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HomeSampleCollection() {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);
  const trustedSectionRef = useRef(null);

  const stats = [
    { num: 5000000, display: '5M+', label: 'Customers Served', icon: Users },
    { num: 50000, display: '50K+', label: 'Tests Processed Everyday', icon: TestTube },
    { num: 500, display: '500+', label: 'Cities Covered', icon: MapPin },
    { num: 1200, display: '1200+', label: 'Collection Centres', icon: Building2 },
    { num: 2000, display: '2000+', label: 'Home Collection Experts', icon: UserRoundCheck  },
    { num: 25, display: '25+', label: 'In-House Labs', icon: FlaskConical  },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (trustedSectionRef.current) {
      observer.observe(trustedSectionRef.current);
    }

    return () => {
      if (trustedSectionRef.current) {
        observer.unobserve(trustedSectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const target = stat.num;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
    });
  };

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
    <>
      <section className="home-sample-section py-12 md:py-24 px-4 relative overflow-hidden">
        {/* decorative radial spots to match Figma */}
        <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9d7e7] to-transparent opacity-40 pointer-events-none blur-3xl hidden md:block"></div>
        <div className="absolute right-24 top-48 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#edd6e6] to-transparent opacity-30 pointer-events-none blur-3xl hidden md:block"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            {/* Left Fading Line */}
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#583D58] to-[#583D58]" />

            {/* Center Button/Badge */}
            <div className="mx-2 md:mx-4 px-4 md:px-6 py-2 md:py-3 bg-[#F3E5F5] border border-[#CDB4CD] rounded-full shadow-sm">
              <span className="text-[#4A4A4A] font-small tracking-widest uppercase text-xs md:text-medium">
                Our Process
              </span>
            </div>

            {/* Right Fading Line */}
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#583D58] to-[#583D58]" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-theme-dark mb-2 px-4">How Does Home Sample Collection Work?</h2>
          <p className="text-theme-text text-base md:text-lg px-4">Your health journey in 5 simple steps</p>
        </div>

        {/* Desktop Timeline View */}
        <div className="relative max-w-6xl mx-auto mt-12 md:mt-20 hidden md:block">
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
                  <div className={`group step-card relative bg-white w-[520px] rounded-2xl p-8 shadow-[0_24px_40px_rgba(90,43,77,0.12)] border border-transparent transition-all duration-350 hover:-translate-y-4 hover:border-[#5A2B4D] hover:shadow-none hover:border-2`}>
                    {/* Decorative blob that appears on hover */}
                    <svg
                      className={`decor-blob pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 ${isLeft ? "-right-44" : "-left-44"}`}
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
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
                      <span className="w-2 h-2 rounded-full bg-purple-700" />
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Simple Step-by-Step View */}
        <div className="md:hidden mt-8 space-y-6 max-w-md mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const color = i % 2 === 0 ? '#5A2B4D' : '#D8BFD8';
            return (
              <div key={i} className="relative">
                {/* Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-full bg-[#cdaec0] z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#5A2B4D] transition-all">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm z-10" style={{ backgroundColor: color }}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center mb-4 bg-white mx-auto" style={{ borderColor: color }}>
                    <Icon className="text-[#5A2B4D]" size={28} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#4b2e4b] text-center mb-2">{step.title}</h3>
                  <p className="text-[#6b5a64] text-sm leading-relaxed text-center">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

         <div className="flex justify-center mt-12 md:mt-20 px-4">
            <div className="cta-card bg-white rounded-2xl shadow-[0_18px_40px_rgba(80,40,70,0.08)] p-6 md:p-8 w-full max-w-3xl border border-[#5A2B4D]/10">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <p className="text-theme-dark text-lg md:text-xl font-medium text-center">Ready to experience hassle-free diagnostics at home?</p>
                <button className="group bg-[#4B2E4B] text-white px-8 md:px-10 py-3 md:py-4 rounded-full shadow-[0_10px_30px_rgba(90,43,77,0.28)] inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 text-sm md:text-base">
                  Schedule Your Home Collection 
                  <Sparkles className="group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
      </section>

      {/* Trusted Section */}
      <section ref={trustedSectionRef} className="py-12 md:py-16 w-full trusted-section bg-[#5A2B4D]">
        <h3 className="text-white text-2xl md:text-4xl text-center font-semibold mb-2 md:mb-4 px-4">Trusted by Millions Across India</h3>
        <p className="text-white/80 text-center mb-6 md:mb-8 px-4 text-sm md:text-base">Your health, backed by numbers that matter</p>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-4">
          {stats.map((item, i) => {
            const Icon = item.icon;
            const formatNumber = (num) => {
              if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M+`;
              if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
              return `${num}+`;
            };
            return (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2">
                <div className="mx-auto w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#f3e9ef] flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                  <Icon className="text-[#5A2B4D]" size={20} />
                </div>
                <p className="text-lg md:text-2xl font-semibold text-gray-800">{formatNumber(counters[i])}</p>
                <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
