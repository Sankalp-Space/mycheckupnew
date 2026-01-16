import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BadgeCheck,
  Home,
  ShieldCheck,
  Droplet,
  Clock,
  Check,
  PhoneCall,
  FlaskConical,
  Users,
  Salad,
  CalendarDays,
} from "lucide-react";
import PageShell from "../components/PageShell";
import { tests } from "../data/testsData";

const baseTabs = [
  "Overview",
  "What's Included",
  "Preparation",
  "Who Should Take This Test",
  "FAQs",
];

export default function TestDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  const test = useMemo(
    () => tests.find((item) => item.slug === slug),
    [slug]
  );
  const includedItems =
    test?.whatsIncluded?.items?.length ? test.whatsIncluded.items : test?.includes || [];
  const includedCount =
    test?.parametersCount ?? includedItems.length;

  const tabs = useMemo(() => {
    if (!test) return baseTabs;
    const nextTabs = [...baseTabs];
    if (test.testCriteria) {
      nextTabs.push("Test Criteria");
    }
    return nextTabs;
  }, [test]);

  if (!test) {
    return (
      <PageShell>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold text-[#4B2E4B]">
              Test not found
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              The test you are looking for is unavailable right now.
            </p>
            <Link
              to="/tests"
              className="mt-6 inline-flex items-center rounded-full bg-[#4B2E4B] px-6 py-2.5 text-sm font-semibold text-white"
            >
              Back to Tests
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
            Home <span className="mx-2">›</span> Tests{" "}
            <span className="mx-2">›</span> {test.name}
          </p>
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-[#4B2E4B]">
                {test.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-[#4B2E4B]">
                <span className="flex items-center gap-2 rounded-full bg-[#f7ecf6] px-3 py-1">
                  <BadgeCheck size={14} />
                  NABL Certified
                </span>
                <span className="flex items-center gap-2 rounded-full bg-[#f7ecf6] px-3 py-1">
                  <Home size={14} />
                  Home Sample Collection
                </span>
                <span className="flex items-center gap-2 rounded-full bg-[#f7ecf6] px-3 py-1">
                  <ShieldCheck size={14} />
                  Doctor Verified Reports
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <FlaskConical size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Includes</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {includedCount} Parameter{includedCount > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Clock size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Reports (T&amp;C)</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {test.reportTime}
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
                    {test.recommendedGender || "Both"}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Droplet size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Sample Type</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {test.sampleType}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <Salad size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Fasting</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {test.fasting}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-[#4B2E4B]">
                    <CalendarDays size={14} />
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">Age</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#4B2E4B]">
                    {test.age || "All Ages"}
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
                  <>
                    <div>
                      <h2 className="text-xl font-semibold text-[#4B2E4B]">
                        About This Test
                      </h2>
                      <p className="mt-2 leading-relaxed">{test.overview.about}</p>
                    </div>
                    <div className="rounded-2xl bg-[#f7ecf6] p-5">
                      <h3 className="text-base font-semibold text-[#4B2E4B]">
                        Why is this test important?
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {test.overview.whyImportant.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <Check className="text-emerald-500" size={16} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {activeTab === "What's Included" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      {test.whatsIncluded?.listTitle || "Included Parameters"}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {includedItems.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="text-emerald-500" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Preparation" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      Preparation
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {test.preparation.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="text-emerald-500" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Who Should Take This Test" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      Who Should Take This Test
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {test.whoShouldTake.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="text-emerald-500" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "FAQs" && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#4B2E4B]">
                      FAQs
                    </h2>
                    <div className="mt-4 space-y-4">
                      {test.faqs.map((faq) => (
                        <div
                          key={faq.question}
                          className="rounded-2xl border border-gray-100 p-4"
                        >
                          <p className="font-semibold text-[#4B2E4B]">
                            {faq.question}
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Test Criteria" && test.testCriteria && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl font-semibold text-[#4B2E4B]">
                        Test Criteria
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        Helps you know your test better.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#f7ecf6] p-5">
                      <h3 className="text-base font-semibold text-[#4B2E4B]">
                        Who should take this test?
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {test.testCriteria.whoShouldTake}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 p-5">
                      <h3 className="text-base font-semibold text-[#4B2E4B]">
                        Why take this test?
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {test.testCriteria.whyTake}
                      </p>
                    </div>
                    {test.testCriteria.benefits?.length ? (
                      <div>
                        <h3 className="text-base font-semibold text-[#4B2E4B]">
                          Benefits
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {test.testCriteria.benefits.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Check className="text-emerald-500" size={16} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              
            </div>

            <div className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="text-3xl font-semibold text-[#4B2E4B]">
                  ₹{test.price}
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₹{test.mrp}
                  </span>
                </div>
                <p className="mt-1 text-sm text-emerald-600">
                  Save ₹{test.mrp - test.price} (
                  {Math.round(((test.mrp - test.price) / test.mrp) * 100)}% off)
                </p>

                {test.vipPrice && (
                  <p className="mt-3 text-sm text-gray-500">
                    Or pay <span className="font-semibold">₹{test.vipPrice}</span>{" "}
                    with VIP
                  </p>
                )}

                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Droplet size={16} className="text-pink-500" />
                      Sample Type
                    </span>
                    <span className="font-medium">{test.sampleType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} className="text-[#4B2E4B]" />
                      Report Time
                    </span>
                    <span className="font-medium">{test.reportTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Check size={16} className="text-emerald-500" />
                      Fasting
                    </span>
                    <span className="font-medium">{test.fasting}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-[#f0f8ff] px-4 py-3 text-sm text-[#4B2E4B]">
                  Home Sample Collection Available
                </div>

                <button className="mt-6 w-full rounded-full bg-[#4B2E4B] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(75,46,75,0.25)] transition hover:opacity-90">
                  Book Test Now
                </button>

                <div className="mt-6 rounded-xl bg-[#ffe8bf] px-4 py-3 text-xs text-[#4B2E4B]">
                  <p className="font-semibold">Get 15% OFF on orders above ₹500</p>
                  <p className="mt-1">Use code: MYCHECK15</p>
                </div>

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
              Need help choosing a test?
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Our healthcare experts are here to guide you with personalized
              recommendations.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4B2E4B]">
                <PhoneCall size={16} />
                1800-123-4567
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
