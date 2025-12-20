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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1C2D] to-[#081524] text-gray-300">
      {/* Top */}
      <div className="max-w-9xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              MC
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">MY Checkup</h3>
              <p className="text-sm text-gray-400">Your Health, Our Priority</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            India&apos;s most trusted diagnostic partner, committed to delivering
            accurate, timely, and affordable health solutions.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@mycheckup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Tests */}
        <div>
          <h4 className="text-white font-semibold mb-4">Tests</h4>
          <ul className="space-y-3 text-sm">
            <li>Blood Tests</li>
            <li>Health Packages</li>
            <li>Women Health</li>
            <li>Men Health</li>
            <li>Senior Citizen</li>
            <li>COVID-19 Tests</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Quality Assurance</li>
            <li>Certifications</li>
            <li>Media Coverage</li>
            <li>Partnerships</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white font-semibold mb-4">Help Center</h4>
          <ul className="space-y-3 text-sm">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Book a Test</li>
            <li>Track Order</li>
            <li>Download Reports</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="text-white font-semibold mb-4">Top Cities</h4>
          <ul className="space-y-3 text-sm">
            <li>Delhi NCR</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Chennai</li>
            <li>Hyderabad</li>
            <li className="text-blue-400">View All Cities</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Middle */}
      <div className="max-w-9xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 transition flex items-center justify-center"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>

        <div className="text-sm text-right">
          <p className="text-blue-400 font-semibold">NABL Certified</p>
          <p className="text-gray-400">ISO 9001:2015</p>
        </div>

        <div className="text-sm text-right">
          <p className="text-blue-400 font-semibold">ISO Certified</p>
          <p className="text-gray-400">Quality Assured</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-9xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 MY Checkup. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
