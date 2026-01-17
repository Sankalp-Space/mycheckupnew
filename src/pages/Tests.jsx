import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Droplet,
  Clock,
  BadgeCheck,
  Search,
  Sparkles,
  Layers,
} from "lucide-react";
import PageShell from "../components/PageShell";
import CallBackBanner from "../components/CallBackBanner";
import { tests, testPackages } from "../data/testsData";

const sampleTypeOptions = ["Blood", "Urine", "Saliva"];
const reportTimeOptions = ["Same day", "12 hours", "13 hours", "24 hours", "48 hours", "3-5 days"];
const popularOptions = ["Most Booked", "Doctor Recommended", "Best Value", "Top Selling"];

const normalizeSampleTypes = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const getFastingFlag = (fasting) =>
  typeof fasting === "string" &&
  !fasting.toLowerCase().includes("not required") &&
  !fasting.toLowerCase().includes("not required");

export default function Tests() {
  const [searchValue, setSearchValue] = useState("");
  const [sampleTypes, setSampleTypes] = useState([]);
  const [fastingRequired, setFastingRequired] = useState(null);
  const [reportTimes, setReportTimes] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [showBanner, setShowBanner] = useState(true);
  const [listScope, setListScope] = useState("all");

  const allItems = useMemo(() => {
    const testItems = tests.map((item) => ({
      ...item,
      itemType: "test",
    }));
    const packageItems = testPackages.map((item) => ({
      ...item,
      itemType: "package",
    }));
    return [...testItems, ...packageItems];
  }, []);

  const filteredItems = useMemo(() => {
    let list = [...allItems];

    if (listScope !== "all") {
      list = list.filter((item) => item.itemType === listScope);
    }

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      list = list.filter((item) => item.name.toLowerCase().includes(query));
    }

    if (sampleTypes.length) {
      list = list.filter((item) =>
        normalizeSampleTypes(item.sampleType).some((type) =>
          sampleTypes.includes(type)
        )
      );
    }

    if (fastingRequired !== null) {
      list = list.filter(
        (item) => getFastingFlag(item.fasting) === fastingRequired
      );
    }

    if (reportTimes.length) {
      list = list.filter((item) =>
        reportTimes.some((time) => item.reportTime.includes(time))
      );
    }

    if (popularTags.length) {
      list = list.filter((item) =>
        popularTags.some((tag) => item.tags?.includes(tag))
      );
    }

    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [
    allItems,
    listScope,
    searchValue,
    sampleTypes,
    fastingRequired,
    reportTimes,
    popularTags,
    sortBy,
  ]);

  const toggleValue = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
      return;
    }
    setter([...list, value]);
  };

  const clearFilters = () => {
    setSearchValue("");
    setSampleTypes([]);
    setFastingRequired(null);
    setReportTimes([]);
    setPopularTags([]);
  };

  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#f4e6f3] via-[#edd6e8] to-[#dcc0da] pb-12 pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm text-[#6b5a64] mb-4">
            Home <span className="mx-2">›</span> Tests & Packages
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#4B2E4B]">
            Tests & Health Packages
          </h1>
          <p className="mt-2 text-sm md:text-base text-[#6b5a64]">
            Explore lab tests and preventive health checkup packages in one place.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md">
              <Search className="text-gray-400" size={18} />
              <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search tests or packages..."
                className="w-full border-none bg-transparent text-sm md:text-base outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All" },
                { id: "test", label: "Tests" },
                { id: "package", label: "Packages" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setListScope(item.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    listScope === item.id
                      ? "bg-[#4B2E4B] text-white"
                      : "bg-white border border-[#e8d9e8] text-[#4B2E4B]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-[260px_1fr] md:px-6">
          <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#4B2E4B]">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-xs font-medium text-[#c08bbf] hover:text-[#4B2E4B]"
              >
                Clear All
              </button>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-[#4B2E4B]">Sample Type</h4>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {sampleTypeOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={sampleTypes.includes(option)}
                      onChange={() =>
                        toggleValue(option, sampleTypes, setSampleTypes)
                      }
                      className="h-4 w-4 rounded border-gray-300 text-[#4B2E4B] focus:ring-[#4B2E4B]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-[#4B2E4B]">
                Fasting Required
              </h4>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={fastingRequired === true}
                    onChange={() =>
                      setFastingRequired(
                        fastingRequired === true ? null : true
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-[#4B2E4B] focus:ring-[#4B2E4B]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={fastingRequired === false}
                    onChange={() =>
                      setFastingRequired(
                        fastingRequired === false ? null : false
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-[#4B2E4B] focus:ring-[#4B2E4B]"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-[#4B2E4B]">Report Time</h4>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {reportTimeOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={reportTimes.includes(option)}
                      onChange={() =>
                        toggleValue(option, reportTimes, setReportTimes)
                      }
                      className="h-4 w-4 rounded border-gray-300 text-[#4B2E4B] focus:ring-[#4B2E4B]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-[#4B2E4B]">Popular</h4>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {popularOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={popularTags.includes(option)}
                      onChange={() =>
                        toggleValue(option, popularTags, setPopularTags)
                      }
                      className="h-4 w-4 rounded border-gray-300 text-[#4B2E4B] focus:ring-[#4B2E4B]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#6b5a64]">
                Showing <span className="font-semibold">{filteredItems.length}</span>{" "}
                results
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs text-gray-500">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-[#4B2E4B]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {filteredItems.map((item) => {
                const isPackage = item.itemType === "package";
                const includedItems = isPackage
                  ? item.highlights || []
                  : item.whatsIncluded?.items?.length
                  ? item.whatsIncluded.items
                  : item.includes || [];
                const includedCount =
                  item.parametersCount ?? includedItems.length;

                return (
                  <div
                    key={`${item.itemType}-${item.slug}`}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6"
                  >
                    <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {isPackage && (
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#ede2ef] px-3 py-1 text-xs font-semibold text-[#4B2E4B]">
                              <Layers size={12} /> Package
                            </span>
                          )}
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                                tag === "Most Booked"
                                  ? "bg-emerald-100 text-emerald-600"
                                  : tag === "Best Value"
                                  ? "bg-[#5A2B4D] text-white"
                                  : "bg-orange-100 text-orange-600"
                              }`}
                            >
                              <Sparkles size={12} />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-[#4B2E4B]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Includes ({includedCount} parameters):
                        </p>

                        <ul className="mt-3 grid gap-2 text-sm text-gray-600 md:grid-cols-2">
                          {includedItems.slice(0, 4).map((entry) => (
                            <li key={entry} className="flex items-center gap-2">
                              <Check className="text-emerald-500" size={16} />
                              {entry}
                            </li>
                          ))}
                          {includedItems.length > 4 && (
                            <li className="text-xs text-gray-400">
                              {includedItems.length - 4} more parameters
                            </li>
                          )}
                        </ul>

                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-2">
                            <Droplet size={14} className="text-pink-500" />
                            {item.sampleType}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={14} className="text-[#4B2E4B]" />
                            Report in {item.reportTime}
                          </span>
                          <span className="flex items-center gap-2">
                            <BadgeCheck size={14} className="text-emerald-500" />
                            {includedCount} Parameters
                          </span>
                        </div>

                        <div className="mt-2 text-xs text-gray-500">
                          {item.fasting ? `Fasting: ${item.fasting}` : null}
                          {item.age ? `  •  Age: ${item.age}` : null}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:items-end md:justify-between">
                        <div className="md:text-right">
                          <div className="text-2xl font-semibold text-[#4B2E4B]">
                            ₹{item.price}
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              ₹{item.mrp}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-emerald-600">
                            Save ₹{item.mrp - item.price} (
                            {Math.round(((item.mrp - item.price) / item.mrp) * 100)}
                            % off)
                          </p>
                          {item.vipPrice && (
                            <p className="mt-1 text-xs text-gray-500">
                              Or pay <span className="font-semibold">₹{item.vipPrice}</span> with VIP
                            </p>
                          )}
                        </div>

                        <div className="flex w-full flex-col gap-3 md:max-w-[200px]">
                          <button className="rounded-full bg-[#4B2E4B] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(75,46,75,0.25)] transition hover:opacity-90">
                            {isPackage ? "Book Package" : "Book Test"}
                          </button>
                          <Link
                            to={isPackage ? `/packages/${item.slug}` : `/tests/${item.slug}`}
                            className="rounded-full border border-[#4B2E4B] px-4 py-2.5 text-center text-sm font-semibold text-[#4B2E4B] transition hover:bg-[#f7ecf6]"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredItems.length === 0 && (
                <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500">
                  No tests or packages match your filters. Try clearing some filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {showBanner && <CallBackBanner onClose={() => setShowBanner(false)} />}
    </PageShell>
  );
}
