// React + Tailwind CSS — Doctors Curated Health Checkup Packages Section
// Pixel-matched to provided design

import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Droplet, Users, ArrowRight } from "lucide-react";

const packages = [
  {
    title: "Full Body Checkup",
    tests: "75 Tests included",
    price: "₹1,499",
    oldPrice: "₹3,999",
    discount: "63% OFF",
    popular: true,
    icon: <Heart className="text-blue-600" />
  },
  {
    title: "Vital Health Screening",
    tests: "45 Tests included",
    price: "₹999",
    oldPrice: "₹2,499",
    discount: "60% OFF",
    icon: <Activity className="text-blue-600" />
  },
  {
    title: "Diabetes Care Package",
    tests: "20 Tests included",
    price: "₹599",
    oldPrice: "₹1,299",
    discount: "54% OFF",
    icon: <Droplet className="text-blue-600" />
  },
  {
    title: "Family Health Package",
    tests: "90 Tests included",
    price: "₹2,999",
    oldPrice: "₹7,999",
    discount: "63% OFF",
    icon: <Users className="text-blue-600" />
  }
];

const HealthPackages = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Doctors Curated Health Checkup Packages
        </h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive health packages designed by medical experts for complete peace of mind
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative border rounded-3xl p-8 text-left shadow-sm hover:shadow-lg transition"
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-6 bg-pink-500 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {pkg.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {pkg.title}
              </h3>
              <p className="text-slate-500 mt-1 text-sm">{pkg.tests}</p>

              <div className="mt-6">
                <span className="text-3xl font-extrabold text-slate-900">
                  {pkg.price}
                </span>
                <span className="ml-3 text-slate-400 line-through">
                  {pkg.oldPrice}
                </span>
              </div>

              <span className="inline-block mt-3 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {pkg.discount}
              </span>

              <motion.button
                className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now <ArrowRight size={18} />
              </motion.button>
            </div>
          ))}
        </div>

        <button className="mt-16 inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition px-10 py-4 rounded-full font-semibold">
          View All Packages
        </button>
      </div>
    </section>
  );
};

export default HealthPackages;
