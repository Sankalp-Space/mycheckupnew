import {
  HeartPulse,
  Activity,
  Droplet,
  FlaskConical,
  Pill,
  Stethoscope,
  Microscope,
  Baby,
  Syringe,
  Dna
} from "lucide-react";

const categories = [
  {
    title: "Heart Health",
    subtitle: "ECG & Cardiac Tests",
    icon: HeartPulse,
  },
  {
    title: "Thyroid",
    subtitle: "Thyroid Function Tests",
    icon: Activity,
  },
  {
    title: "Diabetes",
    subtitle: "Blood Sugar Tests",
    icon: Droplet,
  },
  {
    title: "Liver",
    subtitle: "Liver Function Tests",
    icon: FlaskConical,
  },
  {
    title: "Vitamins",
    subtitle: "Vitamin Deficiency",
    icon: Pill,
  },
  {
    title: "Kidney",
    subtitle: "Renal Function Tests",
    icon: Stethoscope,
  },
  {
    title: "Fertility",
    subtitle: "Fertility Assessment",
    icon: Dna,
  },
  {
    title: "Cancer",
    subtitle: "Cancer Screening",
    icon: Microscope,
  },
  {
    title: "Pregnancy",
    subtitle: "Prenatal Tests",
    icon: Baby,
  },
  {
    title: "Immunity",
    subtitle: "Immune System Tests",
    icon: Syringe,
  },
];

export default function DiagnosticCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Explore 2500+ Diagnostic Tests & Checkup Packages
        </h2>
        <p className="mt-2 text-gray-500">
          Choose from a wide range of NABL certified tests
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`group cursor-pointer rounded-2xl border
                border-gray-200 bg-white p-8 text-center
                transition-all duration-300
                hover:scale-[1.04]
                hover:border-[#4B2E4B]
                hover:bg-[#D8BFD8]/30`}
              >
                <Icon
                  fill="none"
                  className="mx-auto mb-4 h-8 w-8 text-gray-700
                  transition-colors duration-300
                  group-hover:text-[#4B2E4B] group-hover:fill-[#4B2E4B]"
                />

                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.subtitle}
                </p>

                <span
                  className="mt-4 inline-block text-sm font-medium text-[#4B2E4B]
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100"
                >
                  View Tests →
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#4B2E4B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a2337] hover:scale-110 transition-all duration-300">
            View All Tests
          </button>
        </div>
      </div>
    </section>
  );
}
