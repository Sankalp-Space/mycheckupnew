import { Sparkles, MapPin, ShieldCheck, Clock, Home, CheckCircle } from "lucide-react";

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
      desc: "Trained experts collect samples using sterile protocols",
      icon: ShieldCheck,
      side: "left",
    },
    {
      id: "04",
      title: "Samples Reach Accredited Lab",
      desc: "Transported securely to NABL certified labs",
      icon: Home,
      side: "right",
    },
    {
      id: "05",
      title: "Quick Doctor-Verified Reports",
      desc: "Receive reports digitally within 24–48 hours",
      icon: Clock,
      side: "left",
    },
  ];

  return (
    <section className="bg-[#D8BFD8] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          How Does Home Sample Collection Work?
        </h2>
        <p className="text-gray-600 mt-2">
          Your health journey in 5 simple steps
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#4B2E4B]/30 -translate-x-1/2" />

        <div className="space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative flex items-center ${
                  step.side === "left"
                    ? "justify-start pr-10"
                    : "justify-end pl-10"
                }`}
              >
                {/* Card */}
                <div
                  className="group relative bg-white w-[420px] rounded-2xl p-8 shadow-lg border border-transparent
                  transition-all duration-300 hover:-translate-y-2 hover:border-[#4B2E4B]"
                >
                  <span
                    className="absolute -top-4 right-6 bg-[#4B2E4B] text-white px-4 py-2 rounded-xl text-sm
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    {step.id}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-theme-primary flex items-center justify-center shadow-md">
                    <Icon className="text-theme-primary" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* CTA */}
        <div className="text-center mt-24">
          <p className="text-gray-700 mb-4">
            Ready to experience hassle-free diagnostics at home?
          </p>
          <button
            className="group inline-flex items-center gap-2 bg-[#4B2E4B] text-white px-6 py-3 rounded-xl
            transition-all duration-300 hover:scale-105"
          >
            Schedule Home Collection
            <Sparkles className="transition-transform duration-300 group-hover:rotate-12" />
          </button>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="bg-[#4B2E4B] mt-24 py-16">
        <h3 className="text-white text-2xl text-center mb-10">
          Trusted by Millions Across India
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
          {["5M+ Users", "50k+ Reviews", "500+ Tests", "1200+ Cities", "25+ Labs"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                <CheckCircle className="mx-auto text-[#4B2E4B] mb-2" />
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
