import {
  Activity,
  Heart,
  Pill,
  Thermometer,
  Droplet,
  Zap,
  Users,
  AlertCircle,
  Baby,
  Flower,
  Wind,
  Shield,
  Bone,
  CircleDot,
  Stethoscope,
} from "lucide-react";

const categories = [
  { name: "Full Body", icon: Activity },
  { name: "Heart", icon: Heart },
  { name: "Vitamin", icon: Pill },
  { name: "Fever", icon: Thermometer },
  { name: "Diabetes", icon: Droplet },
  { name: "Thyroid", icon: Zap },
  { name: "Hormones", icon: Users },
  { name: "Cancer", icon: AlertCircle },
  { name: "Pregnancy", icon: Baby },
  { name: "Fertility", icon: Flower },
  { name: "Allergy", icon: Wind },
  { name: "STD", icon: Shield },
  { name: "Arthritis", icon: Bone },
  { name: "Anemia", icon: CircleDot },
  { name: "Antenatal", icon: Stethoscope },
];

export default function DiagnosticCategories() {
  return (
    <section className="bg-[#EEF7FF] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore 2500+ Diagnostic Tests & Checkup Packages
          </h2>
          <p className="text-gray-600 mt-2">
            Find the right test for your health needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl h-[170px] flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#E9F4FF] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
