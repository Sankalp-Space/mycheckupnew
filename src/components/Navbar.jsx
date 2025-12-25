import { useState } from "react";
import { Phone } from "lucide-react";
import NavItem from "./NavItem";

const navLinks = [
  "Home",
  "Test Packages",
  "Xrays & Scans",
  "Dental Checkup",
  "Help & Support",
  "More",
];

export default function Navbar() {
  const [active, setActive] = useState("Test Packages");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white">
      {/* Top purple strip */}
      <div className="bg-[#4B2E4B] text-white text-sm w-full">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <span><Phone size={16} className="text-white inline mr-1" /> +91 123-456-7890    |    Available 24/7 for Sample Collection</span>
          <span>Download App | Partner With Us</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-[#4B2E4B] text-white flex items-center justify-center text-xl font-bold
                          transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            M
          </div>
          <div>
            <p className="text-xl font-bold">MYCheckup</p>
            <p className="text-xs text-gray-500">HEALTH AT HOME</p>
          </div>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem
              key={link}
              label={link}
              active={active === link}
              onClick={() => setActive(link)}
            />
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 border border-[#4B2E4B] rounded-full text-[#4B2E4B] hover:bg-[#4B2E4B] hover:text-white transition">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-[#4B2E4B] text-white hover:opacity-90 transition">
            Book Test Now
          </button>
        </div>
      </nav>
    </header>
  );
}
