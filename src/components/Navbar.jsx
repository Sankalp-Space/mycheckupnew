import { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

const navLinks = [
  "Home",
  "Test Packages",
  "Xrays & Scans",
  "Banking Details",
  "Help & Support",
  "More",
];

const moreLinks = [
  "Locations",
  "Health Blog",
  "Quality Assurance",
  "Partnerships",
  "Media Coverage",
  "Press & Media",
  "Careers",
];

export default function Navbar() {
  // const [active, setActive] = useState("Test Packages");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white">
      {/* Top purple strip */}
      <div className="bg-[#4B2E4B] text-white text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
          <span className="text-xs md:text-sm flex items-center">
            <Phone size={16} className="text-white inline mr-1 hidden md:inline" /> 
            <span className="hidden md:inline">+91 123-456-7890 | Available 24/7 for Sample Collection</span>
            <span className="md:hidden">24/7 Support</span>
          </span>
          <span className="text-xs md:text-sm hidden md:inline">Download App | Partner With Us</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#4B2E4B] text-white flex items-center justify-center text-lg md:text-xl font-bold
                          transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            M
          </div>
          <div>
            <p className="text-lg md:text-xl font-bold">MYCheckup</p>
            <p className="text-[10px] md:text-xs text-gray-500">HEALTH AT HOME</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <NavItem
              key={link}
              label={link}
            />
          ))}
          {/* More dropdown */}
          <li className="relative cursor-pointer text-gray-700 hover:text-[#4B2E4B] transition group">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1"
            >
              <span className="pb-2 inline-block">More</span>
              <ChevronDown size={16} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Animated underline */}
            <span
              className={`
                absolute left-0 -bottom-1 h-[3px] w-full rounded-full
                bg-gradient-to-r from-[#4B2E4B] to-transparent
                transform origin-left
                transition-all duration-500
                scale-x-0 opacity-0
                group-hover:scale-x-100 group-hover:opacity-100
              `}
            />

            {isMoreOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                {moreLinks.map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ x: 3, color: "#4B2E4B" }}
                    transition={{ duration: 0.2 }}
                    className="block px-4 py-3 text-gray-700 transition"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 border border-[#4B2E4B] rounded-full text-[#4B2E4B] hover:bg-[#4B2E4B] hover:text-white transition">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-[#4B2E4B] text-white hover:opacity-90 transition">
            Book Test Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.slice(0, -1).map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block py-2 px-4 text-gray-700 hover:bg-[#F3E5F5] hover:text-[#4B2E4B] rounded-lg transition"
                >
                  {link}
                </a>
              ))}
              
              {/* Mobile More Section */}
              <div>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-[#F3E5F5] hover:text-[#4B2E4B] rounded-lg transition"
                >
                  <span>More</span>
                  <ChevronDown size={16} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {moreLinks.map((item) => (
                      <a 
                        key={item}
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-[#F3E5F5] hover:text-[#4B2E4B] rounded-lg transition"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-2 border-t">
                <button className="w-full px-5 py-2 border border-[#4B2E4B] rounded-full text-[#4B2E4B] hover:bg-[#4B2E4B] hover:text-white transition">
                  Login
                </button>
                <button className="w-full px-6 py-2 rounded-full bg-[#4B2E4B] text-white hover:opacity-90 transition">
                  Book Test Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
