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
    <section className="bg-[#D8BFD8] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          Why MYCheckup is India's Most Trusted Diagnostic Partner
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Trusted by millions across India for accurate and affordable health tests
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-[#4B2E4B]"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#4B2E4B] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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
