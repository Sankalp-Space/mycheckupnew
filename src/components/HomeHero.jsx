export default function HeroSection() {
  return (
    <section className="bg-[#D8BFD8] py-14 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="p-10 lg:p-14">
            {/* Slider arrows */}
            <div className="flex items-center gap-3 mb-6">
              <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100">
                ‹
              </button>
              <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100">
                ›
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Prevention is better than cure
            </p>

            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Affordable Health Tests <br /> at home
            </h1>

            {/* Green ticks */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              {[
                "NABL Certified",
                "24–48 Hour Reports",
                "Free Home Sample Collection",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-green-600"
                >
                  ✔ {item}
                </span>
              ))}
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "₹500 off on first test",
                "6-hour sample collection",
                "Free home collection",
                "NABL certified labs",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 text-sm rounded-full bg-[#F4ECF4] text-[#4B2E4B] border border-[#E6D6E6]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-10">
            <img
              src="/ImageWithFallback.png"
              alt="Doctor"
              className="max-h-[420px] object-contain"
            />
          </div>
        </div>

        {/* SEARCH BAR SECTION */}
        <div className="px-8 pb-8">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-4">

              {/* Search */}
              <div className="flex-1 w-full">
                <input
                  type="text"
                  placeholder="Search for tests or checkups"
                  className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#4B2E4B]"
                />
              </div>

              {/* Tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button className="px-5 py-2 rounded-lg bg-[#4B2E4B] text-white text-sm">
                  Lab Tests
                </button>
                <button className="px-5 py-2 rounded-lg text-gray-600 text-sm">
                  Checkups
                </button>
              </div>
            </div>

            {/* Offer strip */}
            <div className="mt-4 bg-[#FFF3E6] border border-[#FFD8B2] rounded-xl px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
              🎉
              <span>
                Get <strong>15% OFF</strong> on orders above ₹500 | Use code:{" "}
                <strong className="text-[#4B2E4B]">MYCHECK15</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
