import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1C2D] to-[#081524] text-gray-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#4B2E4B] flex items-center justify-center text-white font-bold text-sm md:text-base">
              MC
            </div>
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">MY Checkup</h3>
              <p className="text-xs md:text-sm text-gray-400">Your Health, Our Priority</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            India&apos;s most trusted diagnostic partner, committed to delivering
            accurate, timely, and affordable health solutions.
          </p>

          <div className="space-y-2 text-sm">
            {/* <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567</span>
            </div> */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@mycheckup.co.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Gurugram, Haryana, India</span>
            </div>
          </div>
        </div>

        {/* Tests */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Home</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Tests</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Packages</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Health Blog</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>About Us</motion.li>
            {/* <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>COVID-19 Tests</motion.li> */}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            {/* <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>About Us</motion.li> */}
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Quality Assurance</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Partnerships</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Careers</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Press & Media</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Contact Us</motion.li>
          </ul>
        </div>
        {/* Cities */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Home Sample Collection</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Health Checkups</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Doctor Consultation</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Lab Tests</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Radiology</motion.li>
            {/* <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }} className="text-blue-400">View All Cities</motion.li> */}
          </ul>
        </div>
     {/* Help */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Support</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>FAQs</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Help Center</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Privacy Policy</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Terms & Conditions</motion.li>
            <motion.li whileHover={{ x: 3, color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Refund Policy</motion.li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Middle */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex gap-3 md:gap-4">
          {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 hover:bg-[#4B2E4B] transition flex items-center justify-center"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          ))}
        </div>

        <div className="text-xs md:text-sm text-center md:text-right">
          <p className="text-[#4B2E4B] font-semibold">Performed by NABL Certified Lab</p>
          {/* <p className="text-white ">ISO 9001:2015</p> */}
        </div>

        {/* <div className="text-sm text-right">
          <p className="text-[#4B2E4B] font-semibold">ISO Certified</p>
          <p className="text-white">Quality Assured</p>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm">
          <p>© 2025 MY Checkup. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <motion.span whileHover={{ color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Privacy Policy</motion.span>
            <motion.span whileHover={{ color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Terms of Service</motion.span>
            <motion.span whileHover={{ color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Cookie Policy</motion.span>
            <motion.span whileHover={{ color: "#4B2E4B" }} transition={{ duration: 0.2 }}>Disclaimer</motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
