export default function HomeHero() {
  return (
    <section className="bg-[#D8BFD8] pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[500px]">

          {/* LEFT CONTENT */}
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            {/* Slider arrows */}
            <div className="flex items-center gap-3 mb-2">
              <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 text-sm">
                ‹
              </button>
              <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 text-sm">
                ›
              </button>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mb-2">
              Prevention is better than cure
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-3">
              Affordable Health Tests <br className="hidden md:block" /> 
              <span className="md:hidden"> </span>at home
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
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "₹500 off on first test",
                "6-hour sample collection",
                "Free home collection",
                "NABL certified labs",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-full bg-[#F4ECF4] text-[#4B2E4B] border border-[#E6D6E6]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* SEARCH BAR SECTION */}
            <div className="mt-5">
              <div className="bg-white border rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-4">

                  {/* Search */}
                  <div className="flex-1 w-full">
                    <input
                      type="text"
                      placeholder="Search for tests or checkups"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg md:rounded-xl outline-none focus:ring-2 focus:ring-[#4B2E4B]"
                    />
                  </div>

                  {/* Tabs */}
                  <div className="flex bg-gray-100 rounded-lg md:rounded-xl p-1 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none px-3 md:px-4 py-2 rounded-lg bg-[#4B2E4B] text-white text-xs md:text-sm hover:scale-105 transition-all duration-300">
                      Lab Tests
                    </button>
                    <button className="flex-1 lg:flex-none px-3 md:px-4 py-2 rounded-lg text-gray-600 text-xs md:text-sm hover:scale-105 transition-all duration-300">
                      Checkups
                    </button>
                  </div>
                </div>

                {/* Offer strip */}
                <div className="mt-3 md:mt-4 bg-[#FFF3E6] border border-[#FFD8B2] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 flex items-center gap-2">
                  🎉
                  <span>
                    Get <strong>15% OFF</strong> on orders above ₹500 <span className="hidden md:inline">| Use code:</span>
                    <span className="md:hidden"><br />Use code:</span>{" "}
                    <strong className="text-[#4B2E4B]">MYCHECK15</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-[#EEE4EE] flex items-center justify-center p-4 md:p-6 lg:p-10 hidden lg:flex">
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
