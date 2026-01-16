import { Phone, X } from "lucide-react";

export default function CallBackBanner({ onClose }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[92%] max-w-5xl -translate-x-1/2 rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] border border-gray-100 px-4 py-4 md:px-6 md:py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E5F5] text-[#4B2E4B]">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-sm md:text-base font-semibold text-[#4B2E4B]">
              Need help booking your test?
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              No spam. Medical support only.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full md:w-72 rounded-full border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#4B2E4B] focus:ring-2 focus:ring-[#4B2E4B]/20"
          />
          <button className="w-full md:w-auto rounded-full bg-[#4B2E4B] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(75,46,75,0.25)] transition hover:opacity-90">
            Get a Call Back
          </button>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
