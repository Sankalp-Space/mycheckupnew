import React from "react";
import { Gift, X, CheckCircle } from "lucide-react";

export default function DiscountPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md bg-[#D8BFD8] rounded-3xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full #4B2E4B flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <h2 className="mt-6 text-2xl font-bold text-center text-[#0B2B4C]">
          Wait! Get ₹499 OFF on
          <br />
          your selected test
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Free home collection • NABL certified labs
        </p>

        {/* Benefits */}
        <div className="mt-6 space-y-3">
          {["Free home collection", "NABL certified labs", "Reports in 24-48 hours"].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#4B2E4B]" />
                <span>{item}</span>
              </div>
            )
          )}
        </div>

        {/* Input */}
        <input
          type="tel"
          placeholder="Enter your phone number (optional)"
          className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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
