// React + Tailwind CSS Navbar Component (JS)
// Pixel-aligned to provided MyCheckup navbar

import React from "react";
import { MapPin, Phone, HelpCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
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

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* City Selector */}
          <button className="flex items-center gap-2 border rounded-xl px-4 py-2 text-sm font-medium">
            <MapPin size={16} className="text-blue-600" />
            Select Your City
          </button>

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
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="border-t">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap gap-8 py-3 text-sm font-medium text-slate-700">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
