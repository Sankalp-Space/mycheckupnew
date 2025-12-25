export default function HomeHero() {
  return (
    <section className="bg-[#D8BFD8] pt-40 pb-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

          {/* LEFT CONTENT */}
          <div className="p-4 lg:p-6 flex flex-col justify-center">
            {/* Slider arrows */}
            <div className="flex items-center gap-3 mb-2">
              <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 text-sm">
                ‹
              </button>
              <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 text-sm">
                ›
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-1">
              Prevention is better than cure
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-2">
              Affordable Health Tests <br /> at home
            </h1>

            {/* Green ticks */}
            <div className="flex flex-wrap gap-3 mt-1 text-sm">
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
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "₹500 off on first test",
                "6-hour sample collection",
                "Free home collection",
                "NABL certified labs",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs rounded-full bg-[#F4ECF4] text-[#4B2E4B] border border-[#E6D6E6]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* SEARCH BAR SECTION */}
            <div className="mt-4">
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
                    <button className="px-4 py-2 rounded-lg bg-[#4B2E4B] text-white text-sm hover:scale-105 transition-all duration-300">
                      Lab Tests
                    </button>
                    <button className="px-4 py-2 rounded-lg text-gray-600 text-sm hover:scale-105 transition-all duration-300">
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

          {/* RIGHT IMAGE */}
          <div className="bg-[#EEE4EE] flex items-center justify-center p-6 lg:p-10">
            <img
              src="/ImageWithFallback.png"
              alt="Doctor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
