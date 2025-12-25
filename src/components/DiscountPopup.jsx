import React from "react";
import { Gift, X, CheckCircle , Home,BadgeCheck, Clock } from "lucide-react";

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 text-purple-700">
        {icon}
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}

export default function DiscountPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#4B2E4B] bg-white">
          <Gift className="text-[#4B2E4B]" size={34} />
        </div>
        </div>

        {/* Content */}
        <h2 className="mt-6 text-2xl font-bold text-center text-[#0B2B4C]">
          Wait! A gift for your health 🎁
        </h2>

        <p className="mt-2 text-center text-gray-600">
          Get <span className="font-semibold text-purple-700">₹499 OFF</span> on your selected test
        </p>

        {/* Benefits */}
        <div className="mt-5 rounded-xl bg-purple-50 p-4 space-y-3">
          <Feature icon={<Home size={18} />} text="Free home collection" />
          <Feature icon={<BadgeCheck size={18} />} text="NABL certified labs" />
          <Feature icon={<Clock size={18} />} text="Reports in 24–48 hours" />
        </div>

        
        {/* Input */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Enter your phone number (optional)
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
          />
        </div>

        {/* CTA */}
        <button className="mt-6 w-full rounded-xl bg-[#4B2E4B] py-4 text-white font-semibold text-lg hover:bg-[#4B2E4B] transition">
          Apply Discount
        </button>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-gray-400">
          No spam. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
