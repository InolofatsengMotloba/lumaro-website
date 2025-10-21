import React from "react";
import { FaMapMarkerAlt, FaUsers, FaMedal, FaHandshake } from "react-icons/fa";
import Link from "next/link";

// --- COMPANY DATA ---

const companyInfo = {
  founded: "2015",
  members: "25+",
  locations: [
    { city: "New York, NY", role: "Global Strategy & Business Development" },
    { city: "London, UK", role: "Creative & Technical Innovation Hub" },
  ],
  nameMeaning: 'Lumaro (Derived from Esperanto: "An array of lights")',
  mission:
    "To illuminate our clients' digital path with strategic clarity and flawless execution, turning brand potential into measurable market leadership.",
  vision:
    "To be the globally recognized partner for digital transformation, setting the benchmark for innovation, ethical practice, and client success.",
};

const coreValues = [
  {
    title: "Clarity",
    description:
      "Transparency in process, pricing, and results is non-negotiable.",
    icon: "&#9733;",
  }, // Star
  {
    title: "Mastery",
    description: "Commitment to continuous learning and technical excellence.",
    icon: "&#9679;",
  }, // Dot
  {
    title: "Impact",
    description:
      "Focusing resources only on actions that drive tangible business growth.",
    icon: "&#9632;",
  }, // Square
  {
    title: "Partnership",
    description:
      "Cultivating long-term relationships built on mutual respect and trust.",
    icon: "&#x25B2;",
  }, // Triangle
];

const partnersAndAchievements = {
  partners: [
    "Google Premier Partner",
    "HubSpot Platinum Tier",
    "AWS Consulting Partner",
    "Shopify Plus Agency",
  ],
  achievements: [
    "2023: Best Digital Strategy Firm (Global Tech Awards)",
    "500+ successful project launches since inception",
    "30% average YoY client revenue growth",
  ],
};

// --- COMPONENTS ---

// Component for Core Value Item (Styled with an elegant simple icon)
const ValueItem = ({ value }) => (
  <div className="space-y-3 p-6 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
    <div
      className="text-3xl text-black"
      dangerouslySetInnerHTML={{ __html: value.icon }}
    />
    <h3 className="text-xl font-serif font-medium text-black">{value.title}</h3>
    <p className="text-gray-700 text-sm">{value.description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <main className="max-w-7xl mx-auto py-16 px-8 lg:py-24">
        {/* Hero Section: The Big Question */}
        <div className="text-center mb-20">
          <p className="text-sm font-light uppercase tracking-widest text-[#dca37c] mb-2">
            The Lumaro Story
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-black tracking-tighter">
            We Are LUMARO
          </h1>
          <p className="mt-6 text-xl text-black max-w-3xl mx-auto font-light">
            {companyInfo.nameMeaning}: The agency designed to be **an array of
            lights** for your brand’s future.
          </p>
        </div>

        {/* --- SECTION: COMPANY AT A GLANCE (Key Facts) --- */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gray-200 py-10">
            <div className="space-y-1">
              <p className="text-4xl font-serif font-medium text-black">
                {companyInfo.founded}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Founded
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl font-serif font-medium text-black">
                {companyInfo.members}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Team Members
              </p>
            </div>

            <div className="space-y-1 col-span-2">
              <p className="text-4xl font-serif font-medium text-black">
                Global Footprint
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {companyInfo.locations.map((loc) => loc.city).join(" & ")}
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION: MISSION & VISION (Two Columns) --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-serif font-medium text-black">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-serif font-medium text-black">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* --- SECTION: CORE VALUES (Grid) --- */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12">
            The Principles That Guide Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
            {coreValues.map((value) => (
              <ValueItem key={value.title} value={value} />
            ))}
          </div>
        </div>

        {/* --- SECTION: LOCATIONS, PARTNERS & ACHIEVEMENTS (Split) --- */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Column 1: Locations */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-medium text-black">
              Where We Create
            </h2>
            <div className="space-y-6">
              {companyInfo.locations.map((loc, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <FaMapMarkerAlt size={20} className="text-black flex-none" />
                  <div>
                    <p className="text-lg font-semibold text-black">
                      {loc.city}
                    </p>
                    <p className="text-sm text-gray-600">{loc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Partners & Achievements */}
          <div className="space-y-8">
            {/* Partners */}
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-medium text-black">
                Key Partnerships
              </h2>
              <div className="flex flex-wrap gap-4">
                {partnersAndAchievements.partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-sm font-semibold uppercase tracking-wider text-black border border-gray-300 px-3 py-1 bg-gray-50"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4 pt-4">
              <h2 className="text-4xl font-serif font-medium text-black">
                Milestones & Awards
              </h2>
              <ul className="space-y-3">
                {partnersAndAchievements.achievements.map(
                  (achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FaMedal
                        size={16}
                        className="text-black mt-1 flex-none"
                      />
                      <span className="text-base text-gray-700">
                        {achievement}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA (Recruiting Focus) --- */}
        <div className="mt-12 text-center border-t border-gray-200 pt-12">
          <h3 className="text-4xl font-serif font-light text-black mb-4">
            Join Our Array of Lights
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            We are always looking for passionate people who embody our values.
            Explore our current career opportunities.
          </p>
          <Link
            href="/careers"
            className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition duration-300 border border-black"
          >
            VIEW OPENINGS
          </Link>
        </div>
      </main>
    </div>
  );
}
