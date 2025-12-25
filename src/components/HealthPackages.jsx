import { Heart, Activity, Droplet, Users, ArrowRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Full Body Checkup",
    tests: "75 Tests Included",
    price: "₹1,499",
    oldPrice: "₹2,999",
    off: "50% OFF",
    popular: true,
    icon: <Activity className="w-8 h-8 text-[#4B2E4B]" />,
  },
  {
    id: 2,
    title: "Vital Health Screening",
    tests: "45 Tests Included",
    price: "₹999",
    oldPrice: "₹2,499",
    off: "60% OFF",
    icon: <Heart className="w-8 h-8 text-[#4B2E4B]" />,
  },
  {
    id: 3,
    title: "Diabetes Care Package",
    tests: "20 Tests Included",
    price: "₹599",
    oldPrice: "₹1,299",
    off: "54% OFF",
    icon: <Droplet className="w-8 h-8 text-[#4B2E4B]" />,
  },
  {
    id: 4,
    title: "Family Health Package",
    tests: "90 Tests Included",
    price: "₹2,999",
    oldPrice: "₹7,999",
    off: "63% OFF",
    icon: <Users className="w-8 h-8 text-[#4B2E4B]" />,
  },
];

export default function HealthPackages() {
  return (
    <section className="bg-[#D8BFD8] py-16">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Doctors Curated Health Checkup Packages
      </h2>
      <p className="text-center text-gray-700 mb-10">
        Comprehensive health packages designed by medical experts for complete peace of mind
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {packages.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl p-6 border border-transparent transition-all duration-300 hover:border-2 hover:border-[#4B2E4B] hover:scale-105 hover:shadow-lg"
          >
            {item.popular && (
              <span className="absolute -top-3 left-6 bg-[#4B2E4B] text-white text-xs px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <button className="absolute top-4 right-4 group">
              <Heart className="w-5 h-5 text-gray-300 group-hover:fill-red-500 group-hover:text-red-500 transition" />
            </button>

            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#f3eaf2] flex items-center justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-center mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 text-center mb-4">{item.tests}</p>

            <div className="text-center mb-2">
              <span className="text-2xl font-semibold mr-2">{item.price}</span>
              <span className="text-gray-400 line-through">{item.oldPrice}</span>
            </div>

            <p className="text-green-600 text-sm text-center mb-6">{item.off}</p>

            <button
              className="w-full bg-[#4B2E4B] text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-102"
            >
              Book Now <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
