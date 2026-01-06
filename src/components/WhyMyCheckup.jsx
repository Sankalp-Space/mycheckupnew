import {
  ShieldCheck,
  BadgeCheck,
  TrendingDown,
  Home,
  Clock,
  FileCheck,
} from "lucide-react";

const features = [
  {
    title: "NABL Certified Labs",
    desc: "All tests performed in government certified labs with highest quality standards",
    icon: ShieldCheck,
  },
  {
    title: "Doctor Approved Tests",
    desc: "Every test and package is curated and approved by medical experts",
    icon: BadgeCheck,
  },
  {
    title: "Up to 70% Off",
    desc: "Best prices guaranteed with transparent pricing and no hidden charges",
    icon: TrendingDown,
  },
  {
    title: "Home Sample Collection",
    desc: "Trained phlebotomist visits your home at your convenient time",
    icon: Home,
  },
  {
    title: "Reports in 24–48 Hours",
    desc: "Fast turnaround time with detailed digital reports on email and app",
    icon: Clock,
  },
  {
    title: "Quality Assurance",
    desc: "Double-checked reports with free doctor consultation on results",
    icon: FileCheck,
  },
];

export default function WhyMyCheckup() {
  return (
    <section className="bg-[#D8BFD8] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-800 px-4">
          Why MYCheckup is India's Most Trusted Diagnostic Partner
        </h2>
        <p className="mt-3 text-center text-gray-600 text-sm md:text-base px-4">
          Trusted by millions across India for accurate and affordable health tests
        </p>

        {/* Cards */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-[#4B2E4B]"
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#4B2E4B] flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
