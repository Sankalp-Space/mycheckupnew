// React + Tailwind CSS Home Hero Section (JS)
// Designed to visually match the provided MyCheckup home section

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Tag, Clock, Home, BadgeCheck, ArrowRight } from "lucide-react";

const HomeHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate search functionality
    const mockResults = [
      "Blood Test",
      "Diabetes Package",
      "Full Body Checkup",
      "Thyroid Test"
    ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(mockResults);
  };

  return (
    <motion.section
      className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900">
            Affordable Health <br /> Tests at Home
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            NABL certified labs • Free home collection • Reports in 24–48 hours
          </p>

          {/* Search Bar */}
          <motion.div
            className="mt-8 flex items-center bg-white rounded-full shadow-lg px-5 py-3 max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search tests, health packages & profiles"
              className="flex-1 px-4 outline-none text-slate-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.button
              className="bg-slate-400 hover:bg-slate-500 transition text-white rounded-full px-8 py-2 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
            >
              Search
            </motion.button>
          </motion.div>
          {searchResults.length > 0 && (
            <motion.div
              className="mt-4 bg-white rounded-lg shadow-lg p-4 max-w-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Search Results:</h4>
              <ul className="space-y-1">
                {searchResults.map((result, index) => (
                  <li key={index} className="text-slate-700">{result}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Feature Pills */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Pill icon={<Tag size={16} />} text="₹500 off on first test" />
            <Pill icon={<Clock size={16} />} text="6-hour sample collection" />
            <Pill icon={<Home size={16} />} text="Free home collection" />
            <Pill icon={<BadgeCheck size={16} />} text="NABL certified labs" />
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-6">
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white px-10 py-4 rounded-xl font-semibold">
              Lab Tests <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition px-10 py-4 rounded-xl font-semibold">
              Health Checkups <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
              alt="Doctor"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold">Premium Quality Standards</h3>
              <p className="text-sm mt-1 opacity-90">
                State-of-the-art labs with certified professionals
              </p>
              {/* <div className="mt-4 flex justify-center gap-2">
                <span className="w-6 h-1 rounded-full bg-white"></span>
                <span className="w-2 h-1 rounded-full bg-white/50"></span>
                <span className="w-2 h-1 rounded-full bg-white/50"></span>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-blue-600 bg-blue-50 text-sm font-medium">
    {icon} {text}
  </div>
);

export default HomeHero;
