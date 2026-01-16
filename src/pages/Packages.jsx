import { Link } from "react-router-dom";
import { CalendarCheck, Clock, Droplet, Sparkles } from "lucide-react";
import PageShell from "../components/PageShell";
import { testPackages } from "../data/testsData";

export default function Packages() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#f4e6f3] via-[#edd6e8] to-[#dcc0da] pb-12 pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm text-[#6b5a64] mb-4">
            Home <span className="mx-2">›</span> Health Checkups
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#4B2E4B]">
            Health Checkup Packages
          </h1>
          <p className="mt-2 text-sm md:text-base text-[#6b5a64]">
            Curated packages tailored for every stage of your health journey.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {testPackages.map((pack) => (
              <div
                key={pack.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {pack.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full bg-[#4B2E4B] px-3 py-1 text-xs font-semibold text-white"
                    >
                      <Sparkles size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#4B2E4B]">
                  {pack.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{pack.subtitle}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-[#4B2E4B]">
                    ₹{pack.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{pack.mrp}
                  </span>
                </div>
                <p className="mt-1 text-sm text-emerald-600">
                  Save ₹{pack.mrp - pack.price} (
                  {Math.round(((pack.mrp - pack.price) / pack.mrp) * 100)}% off)
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  {pack.highlights.map((item) => (
                    <p key={item} className="flex items-center gap-2">
                      <CalendarCheck size={14} className="text-emerald-500" />
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-2">
                    <Droplet size={14} className="text-pink-500" />
                    {pack.sampleType}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-[#4B2E4B]" />
                    {pack.reportTime}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button className="rounded-full bg-[#4B2E4B] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(75,46,75,0.25)] transition hover:opacity-90">
                    Book Package
                  </button>
                  <Link
                    to="/tests"
                    className="rounded-full border border-[#4B2E4B] px-4 py-2.5 text-center text-sm font-semibold text-[#4B2E4B] transition hover:bg-[#f7ecf6]"
                  >
                    Explore Tests
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
