// React + Tailwind CSS Navbar Component (JS)
// Pixel-aligned to provided MyCheckup navbar

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, HelpCircle, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full border-b bg-white">
      {/* Top Bar */}
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            MC
          </div>
          <div>
            <h1 className="font-semibold text-lg leading-none">My Checkup</h1>
            <p className="text-xs text-slate-500">Your Health, Our Priority</p>
          </div>
        </div>

        {/* City Selector - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
          <button className="flex items-center gap-2 border rounded-xl px-4 py-2 text-sm font-medium">
            <MapPin size={16} className="text-blue-600" />
            Select Your City
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 text-sm">
            <span className="flex items-center gap-1 cursor-pointer text-slate-700">
              <HelpCircle size={16} /> Help & Support
            </span>
            <span className="flex items-center gap-1 cursor-pointer text-slate-700">
              <User size={16} /> Login
            </span>
            <span className="flex items-center gap-1 font-semibold text-blue-600">
              <Phone size={16} /> 1800-123-4567
            </span>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="border-t">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="hidden md:flex flex-wrap gap-8 py-3 text-sm font-medium text-slate-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Tests</li>
            <li className="hover:text-blue-600 cursor-pointer">Packages</li>
            <li className="hover:text-blue-600 cursor-pointer">Locations</li>
            <li className="hover:text-blue-600 cursor-pointer">Health Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">Who We Are</li>
            <li className="hover:text-blue-600 cursor-pointer">Quality Assurance</li>
            <li className="hover:text-blue-600 cursor-pointer">Partnerships</li>
            <li className="hover:text-blue-600 cursor-pointer">Media Coverage</li>
            <li className="hover:text-blue-600 cursor-pointer">X-Rays & Scans</li>
            <li className="hover:text-blue-600 cursor-pointer">Help & Support</li>
          </ul>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={{ height: isMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {/* Mobile City Selector */}
              <button className="flex items-center gap-2 border rounded-xl px-4 py-2 text-sm font-medium w-full justify-center">
                <MapPin size={16} className="text-blue-600" />
                Select Your City
              </button>

              {/* Mobile Navigation Links */}
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Home</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Tests</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Packages</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Locations</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Health Blog</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Who We Are</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Quality Assurance</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Partnerships</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Media Coverage</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">X-Rays & Scans</li>
                <li className="hover:text-blue-600 cursor-pointer py-2 border-b">Help & Support</li>
              </ul>

              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <span className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <HelpCircle size={16} /> Help & Support
                </span>
                <span className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <User size={16} /> Login
                </span>
                <span className="flex items-center gap-2 font-semibold text-blue-600">
                  <Phone size={16} /> 1800-123-4567
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
