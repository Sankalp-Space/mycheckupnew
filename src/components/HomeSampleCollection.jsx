import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MousePointerClick,
  MapPin,
  Syringe,
  FileCheck,
  ClipboardList,
  Users,
  TestTube,
  MapPinned,
  Building2,
  UserCheck,
  FlaskConical,
} from "lucide-react";

const parseStatValue = (value) => {
  const num = parseFloat(value.replace(/[^\d.]/g, ''));
  const suffix = value.replace(/[\d.]/g, '');
  let multiplier = 1;
  if (suffix.includes('M')) multiplier = 1000000;
  else if (suffix.includes('K')) multiplier = 1000;
  return Math.floor(num * multiplier);
};

export default function HomeSampleCollection() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { value: "5M+", label: "Customers Served", icon: Users },
    { value: "50K+", label: "Tests Processed Everyday", icon: TestTube },
    { value: "500+", label: "Cities Covered", icon: MapPinned },
    { value: "1200+", label: "Collection Centres", icon: Building2 },
    { value: "2000+", label: "Home Collection Experts", icon: UserCheck },
    { value: "25+", label: "In-House Labs", icon: FlaskConical },
  ];

  const targetCounts = stats.map(stat => parseStatValue(stat.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          targetCounts.forEach((target, index) => {
            let current = 0;
            const increment = target / 60; // 60 frames for 1 second
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, 1000 / 60);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated, targetCounts]);

  const formatCount = (count, originalValue) => {
    const suffix = originalValue.replace(/[\d.]/g, '');
    if (suffix.includes('M')) return `${(count / 1000000).toFixed(1)}M+`;
    if (suffix.includes('K')) return `${(count / 1000).toFixed(0)}K+`;
    return `${count}+`;
  };
  return (
    <div className="w-full font-sans">
      {/* Top Section */}
      <section className="bg-[#F4FAFF] py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B2B4C]">
          How Does Home Sample Collection Work?
        </h2>
        <p className="text-center text-gray-500 mt-3">
          Simple, safe, and hassle-free process from booking to reports
        </p>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-blue-600" />
          {[
            {
              step: "Step 1",
              title: "Easy Online Booking",
              desc: "Book your test online or via phone in under 2 minutes",
              icon: MousePointerClick,
            },
            {
              step: "Step 2",
              title: "Live Tracking of Phlebotomist",
              desc: "Real-time updates on our professional arriving at your home",
              icon: MapPin,
            },
            {
              step: "Step 3",
              title: "Safe Sample Collection",
              desc: "Trained experts collect samples following strict hygiene protocols",
              icon: Syringe,
            },
            {
              step: "Step 4",
              title: "Sample Reaches Accredited Lab",
              desc: "Temperature-controlled transport to our NABL certified labs",
              icon: FileCheck,
            },
            {
              step: "Step 5",
              title: "Quick Doctor-Verified Reports",
              desc: "Receive digital reports within 24-48 hours on your dashboard",
              icon: ClipboardList,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center md:w-1/5 relative z-10"
              >
                <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <span className="mt-3 text-sm text-blue-600 font-semibold">{item.step}</span>
                <h4 className="mt-2 font-semibold text-[#0B2B4C]">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1 px-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#0A5AA6] to-[#0D74C9] py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Trusted by Millions Across India
        </h2>
        <p className="text-center text-blue-100 mt-3">
          Your health, backed by numbers that matter
        </p>

        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-14 max-w-7xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg py-10 px-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#0B2B4C]">{formatCount(counts[i], stat.value)}</h3>
                <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
