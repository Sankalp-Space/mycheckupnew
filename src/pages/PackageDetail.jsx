import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  Droplet,
  Home,
  ShieldCheck,
  Users,
  Salad,
  CalendarDays,
  FlaskConical,
} from "lucide-react";
import PageShell from "../components/PageShell";
import { testPackages } from "../data/testsData";

const baseTabs = [
  "Overview",
  "Test Inclusions",
  "Why Essential",
  "Parameters",
];

export default function PackageDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  const pack = useMemo(
    () => testPackages.find((item) => item.slug === slug),
    [slug]
  );

  const tabs = useMemo(() => {
    if (!pack) return baseTabs;
    const nextTabs = [...baseTabs];
    if (!pack.testInclusions?.length) {
      return nextTabs.filter((tab) => tab !== "Test Inclusions");
    }
    if (!pack.whyEssential?.length) {
      return nextTabs.filter((tab) => tab !== "Why Essential");
    }
    return nextTabs;
  }, [pack]);

  if (!pack) {
    return (
      <PageShell>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold text-[#4B2E4B]">
              Package not found
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              The package you are looking for is unavailable right now.
            </p>
            <Link
              to="/packages"
              className="mt-6 inline-flex items-center rounded-full bg-[#4B2E4B] px-6 py-2.5 text-sm font-semibold text-white"
            >
              Back to Packages
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="bg-white pb-10 pt-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm text-[#6b5a64] mb-4">
            Home <span className="mx-2">›</span> Health Checkups{" "}
            <span className="mx-2">›</span> {pack.name}
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-[#4B2E4B]">
                {pack.name}
              </h1>

              {pack.categories?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#4B2E4B]">
                  {pack.categories.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full bg-[#f7ecf6] px-3 py-1"
                    >
                      <span className="font-semibold">{item.count}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <FlaskConical size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Includes</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.parametersCount || pack.includesSummary}
                    {pack.parametersCount ? " Parameters" : ""}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Clock size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Reports (T&amp;C)</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.reportTime}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Users size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                      Recommended Gender
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.recommendedGender || "Both"}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Droplet size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Sample Type</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.sampleType}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Salad size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Fasting</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.fasting}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <CalendarDays size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Age</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {pack.age || "All Ages"}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-b border-gray-100">
                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                  {tabs.map((label) => (
                    <button
                      key={label}
                      onClick={() => setActiveTab(label)}
                      className={`pb-3 transition ${
                        activeTab === label
                          ? "border-b-2 border-[#c08bbf] text-[#4B2E4B]"
                          : "text-gray-500 hover:text-[#4B2E4B]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-6 text-sm text-gray-600">
                {activeTab === "Overview" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      About This Package
                    </h2>
                    <p className="mt-2 leading-relaxed">
                      {pack.about || pack.subtitle}
                    </p>
                  </div>
                )}

                {activeTab === "Test Inclusions" && pack.testInclusions?.length && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      Test Inclusions
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {pack.testInclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 text-emerald-500" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Why Essential" && pack.whyEssential?.length && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      Why Is It Essential?
                    </h2>
                    <div className="mt-4 space-y-4">
                      {pack.whyEssential.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl bg-[#f7ecf6] p-4"
                        >
                          <p className="font-semibold text-[#4B2E4B]">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm text-gray-600">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Parameters" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      {pack.includesSummary || "Included Parameters"}
                    </h2>
                    <div className="mt-4 space-y-5">
                      {pack.includes?.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-gray-100 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-[#4B2E4B]">
                              {item.title}
                            </h3>
                            {item.parametersCount && (
                              <span className="text-xs text-gray-400">
                                {item.parametersCount} PARAMETERS INCLUDED
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            {item.description}
                          </p>
                          <ul className="mt-3 grid gap-2 text-xs text-gray-600 sm:grid-cols-2">
                            {item.parameters?.map((param) => (
                              <li key={param} className="flex items-center gap-2">
                                <Check size={14} className="text-emerald-500" />
                                {param}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              
            </div>

            <div className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="text-3xl font-semibold text-[#4B2E4B]">
                  ₹{pack.price}
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₹{pack.mrp}
                  </span>
                </div>
                <p className="mt-1 text-sm text-emerald-600">
                  Save ₹{pack.mrp - pack.price} (
                  {Math.round(((pack.mrp - pack.price) / pack.mrp) * 100)}% off)
                </p>

                {pack.vipPrice && (
                  <p className="mt-3 text-sm text-gray-500">
                    Or pay <span className="font-semibold">₹{pack.vipPrice}</span>{" "}
                    with VIP
                  </p>
                )}

                <div className="mt-5 rounded-xl bg-[#f0f8ff] px-4 py-3 text-sm text-[#4B2E4B]">
                  Home Sample Collection Available
                </div>

                <button className="mt-6 w-full rounded-full bg-[#4B2E4B] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(75,46,75,0.25)] transition hover:opacity-90">
                  Book Package Now
                </button>

                <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <BadgeCheck className="text-[#4B2E4B]" size={18} />
                    NABL Certified
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Home className="text-[#4B2E4B]" size={18} />
                    Home Collection
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="text-[#4B2E4B]" size={18} />
                    Safe & Secure
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#caa5c6] via-[#9c6e9a] to-[#6e3c6c] px-6 py-10 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Need help choosing a package?
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Our healthcare experts are here to guide you with personalized
              recommendations.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4B2E4B]">
                Call 1800-123-4567
              </button>
              <button className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request Call Back
              </button>
            </div>
            <p className="mt-3 text-xs text-white/80">
              Available 24/7 • Free Consultation
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
