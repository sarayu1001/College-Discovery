"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { colleges } from "../data/colleges";
import {
  Search,
  Building2,
  Star,
  Briefcase,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [rating, setRating] = useState("All");

  const locations = [
    "All",
    ...new Set(colleges.map((c) => c.location)),
  ];

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const searchMatch =
        college.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        college.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const locationMatch =
        location === "All" ||
        college.location === location;

      const ratingMatch =
        rating === "All" ||
        college.rating >= Number(rating);

      return (
        searchMatch &&
        locationMatch &&
        ratingMatch
      );
    });
  }, [search, location, rating]);

  const trending = [...colleges]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const recruiters = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Meta",
    "Oracle",
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro",
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      college: "IIT Hyderabad",
      text: "This platform helped me compare colleges quickly and choose the best option."
    },
    {
      name: "Anjali Verma",
      college: "NIT Warangal",
      text: "The placement and fee comparison saved me hours of research."
    },
    {
      name: "Kiran Kumar",
      college: "BITS Pilani",
      text: "Professional design and very useful college insights."
    },
  ];

  const faqs = [
    {
      q: "How are colleges ranked?",
      a: "Colleges are ranked using ratings, placements, academics, infrastructure and student reviews."
    },
    {
      q: "Can I compare colleges?",
      a: "Yes. Visit the Compare page to compare fees, placements, ratings and courses."
    },
    {
      q: "Is placement information accurate?",
      a: "Placement information is based on publicly available reports and institutional data."
    },
    {
      q: "Can I save colleges?",
      a: "Yes. Use the Saved section to maintain your shortlist."
    },
  ];

  return (
    <main>

      {/* HERO */}
<section className="bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white py-24 px-10">        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-bold mb-6">
            Discover Your Dream College
          </h1>

          <p className="text-xl max-w-3xl mb-10">
            Compare colleges, explore placements,
            discover courses, analyze rankings and
            make informed career decisions.
          </p>

          <div className="flex gap-4">
            <a
              href="#colleges"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Explore Colleges
            </a>

            <Link
              href="/compare"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Compare Colleges
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 p-10">
        <div className="border rounded-xl p-6 text-center">
          <Building2 className="mx-auto mb-3" />
          <h2 className="text-4xl font-bold">500+</h2>
          <p>Colleges</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <Briefcase className="mx-auto mb-3" />
          <h2 className="text-4xl font-bold">100+</h2>
          <p>Courses</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <Star className="mx-auto mb-3" />
          <h2 className="text-4xl font-bold">50K+</h2>
          <p>Students</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <Star className="mx-auto mb-3" />
          <h2 className="text-4xl font-bold">95%</h2>
          <p>Placement Rate</p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-7xl mx-auto px-10">

        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <div className="relative">
            <Search className="absolute left-3 top-4 h-5 w-5" />

            <input
              type="text"
              placeholder="Search colleges..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border rounded-lg pl-10 p-3"
            />
          </div>

          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="border rounded-lg p-3"
          >
            {locations.map((loc) => (
              <option key={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
            className="border rounded-lg p-3"
          >
            <option>All</option>
            <option value="4">4+</option>
            <option value="4.5">4.5+</option>
            <option value="4.8">4.8+</option>
          </select>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-10 mb-16">

        <h2 className="text-4xl font-bold mb-8">
          🔥 Trending Colleges
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {trending.map((college) => (
            <div
              key={college.id}
              className="min-w-[300px] border rounded-xl p-5"
            >
              <h3 className="text-xl font-bold">
                {college.name}
              </h3>

              <p>{college.location}</p>

              <p>⭐ {college.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLEGES */}
      <section
        id="colleges"
        className="max-w-7xl mx-auto px-10"
      >
        <h2 className="text-4xl font-bold mb-8">
          Featured Colleges
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={college.image}
                alt={college.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {college.name}
                </h3>

                <p className="mt-2">
                  📍 {college.location}
                </p>

                <p className="mt-2">
                  ⭐ {college.rating}
                </p>

                <p className="mt-2">
                  ₹{college.fees.toLocaleString()}
                </p>

                <Link
                  href={`/colleges/${college.id}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECRUITERS */}
      <section className="max-w-7xl mx-auto p-10 mt-20">
        <h2 className="text-4xl font-bold mb-8">
          Top Recruiters
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {recruiters.map((company) => (
            <div
              key={company}
              className="border rounded-xl p-6 text-center font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-8">
          Student Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border rounded-xl p-6"
            >
              <p className="mb-4">
                "{t.text}"
              </p>

              <h4 className="font-bold">
                {t.name}
              </h4>

              <p className="text-sm opacity-70">
                {t.college}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="border rounded-xl p-5 mb-4"
          >
            <summary className="cursor-pointer flex items-center justify-between">
              {faq.q}
              <ChevronDown size={18} />
            </summary>

            <p className="mt-4">
              {faq.a}
            </p>
          </details>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="border-t mt-20 py-10">
        <div className="max-w-7xl mx-auto px-10">

          <h3 className="text-2xl font-bold mb-4">
            CollegeFinder
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <h4 className="font-semibold mb-2">
                Explore
              </h4>
              <p>Colleges</p>
              <p>Courses</p>
              <p>Placements</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Resources
              </h4>
              <p>Blogs</p>
              <p>FAQs</p>
              <p>Guides</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Company
              </h4>
              <p>About Us</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Support
              </h4>
              <p>Email Support</p>
              <p>Help Center</p>
            </div>

          </div>

          <p className="mt-8 opacity-70">
            © 2026 CollegeFinder. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}