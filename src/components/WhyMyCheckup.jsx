import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FlaskConical,
  Home,
  FileText,
  LayoutGrid,
  Thermometer,
} from "lucide-react";

const features = [
  {
    title: "NABL & ISO Certified Lab",
    desc: "Highest quality standards with government-approved certifications",
    icon: ShieldCheck,
  },
  {
    title: "2500+ Pathology & Radiology Tests",
    desc: "Comprehensive range of diagnostic tests under one roof",
    icon: FlaskConical,
  },
  {
    title: "Free Home Sample Collection",
    desc: "Convenient doorstep service with trained professionals",
    icon: Home,
  },
  {
    title: "24–48 Hour Digital Reports",
    desc: "Fast turnaround time with secure online report access",
    icon: FileText,
  },
  {
    title: "Smart Digital Health Dashboard",
    desc: "Track your health trends and history in one place",
    icon: LayoutGrid,
  },
  {
    title: "Temperature-Controlled Sample Transport",
    desc: "Maintaining sample integrity from collection to lab",
    icon: Thermometer,
  },
];

export default function WhyMyCheckup() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Why MyCheckup is India's Most Trusted Diagnostic Partner
          </h2>
          <p className="text-gray-600 mt-2">
            Committed to accuracy, quality, and your peace of mind
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#EEF7FF] rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
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
