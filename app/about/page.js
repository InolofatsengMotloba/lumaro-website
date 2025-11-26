"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaHandsHelping,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import Link from "next/link";

// --- COMPANY DATA ---

const companyInfo = {
  founded: "2014",
  projects: "25+",
  locations: [
    {
      city: "Dubai, UAE",
      role: "Exhibition",
      year: "2022 & 2023:",
      event: "Global Tech Expo",
    },
    {
      city: "Morocco",
      role: "Exhibition",
      year: "2024:",
      event: "GITEX Africa",
    },
    {
      city: "London, UK",
      role: "Exhibition",
      year: "2025:",
      event: "London Tech Week",
    },
  ],

  mission:
    "To empower businesses and communities with information technology through innovative marketing, digital, and technology solutions while creating meaningful opportunities for South African youth. We are committed to reducing youth unemployment by equipping young people with skills, mentorship, and pathways to sustainable careers.",
  vision:
    "To be a leading African brand that drives business growth and social transformation, where creativity, technology,and strategic innovation combine to inspire youth empowerment and reduce unemployment across South Africa and Africa at large.",
};

const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and continuously seek innovative solutions to stay ahead in the industry.",
    icon: FaLightbulb,
  }, // Star
  {
    title: "Quality Excellence",
    description:
      "Uncompromising standards in every product and service we deliver to our clients.",
    icon: FaAward,
  }, // Dot
  {
    title: "Community Empowerment",
    description:
      "Creating opportunities for youth and women through training and skills development.",
    icon: FaHandsHelping,
  }, // Square
  {
    title: "Customer Centric",
    description:
      "Building lasting relationships by putting our clients' needs at the forefront.",
    icon: FaUsers,
  }, // Triangle
  {
    title: "Integrity",
    description:
      "Operating with honesty, transparency and ethical business practices.",
    icon: FaShieldAlt,
  }, // Square
  {
    title: "Economic Impact",
    description:
      "Contributing to poverty alleviation and infrastructure development through our work.",
    icon: FaChartLine,
  }, // Triangle
];

const partnersAndSupport = {
  partners: [
    "Local printing and material suppliers",
    "ICT technology providers",
    "National marketing and media agencies",
  ],
  support: [
    "ECDC",
    "SEDA",
    "South African Electrotechnical Export Council",
    "OR Tambo District Municipality",
  ],
};

// --- COMPONENTS ---

// Component for Core Value Item (Styled with an elegant simple icon)
const ValueItem = ({ value }) => {
  const IconComponent = value.icon;

  return (
    <div className="space-y-2 sm:space-y-3 p-4 sm:p-6 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
      <div className="text-2xl sm:text-3xl text-[#63564d]">
        <IconComponent />
      </div>
      <h3 className="text-lg sm:text-xl text-font font-bold text-[#63564d]">
        {value.title}
      </h3>
      <p className="text-[#63564d] text-font text-sm hidden sm:block">
        {value.description}
      </p>
    </div>
  );
};

// --- Animated Counter ---
const AnimatedCounter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <>{count}+</>;
};

// --- MAIN PAGE COMPONENT ---

export default function About() {
  return (
    <div className="min-h-screen ">
      <main className="max-w-7xl mx-auto py-20 px-2 sm:px-0 lg:py-28">
        {/* Background elements (subtle map contour, similar to the image) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e9a46a"
              d="M800.2,467.4C719,579.5,479,720.9,321.4,694.7C163.8,668.5,88.4,474.7,65.3,316.5C42.2,158.3,70.5,35.6,220.6,6.3C370.7-23,642.6,35.3,800.2,197.6C957.9,360,881.4,415.3,800.2,467.4Z"
              transform="translate(-100, -100) scale(1.2)"
            />
          </svg>
        </div>
        {/* Hero Section: The Big Question */}
        <div className="text-center my-9 px-6 sm:px-8">
          <h1 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d] leading-tight mb-2">
            We Are{" "}
            <span className="bg-gradient-to-r from-[#e0a07a] to-[#63564d] bg-clip-text text-transparent">
              LUMARO
            </span>
          </h1>
          <div className="flex justify-center mt-4">
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-4xl lg:mx-0">
              Driven by a vision to create meaningful change, Lumaro is
              committed to reducing youth unemployment in South Africa through
              skills development and mentorship, while empowering women and
              uplifting local communities. We combine creativity, strategy, and
              technology to illuminate opportunities for businesses — helping
              brands uncover their potential and amplify their impact through
              innovative digital solutions.
            </p>
          </div>
        </div>

        {/* --- SECTION: COMPANY AT A GLANCE (Key Facts) --- */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-font">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center border-t border-b border-[#bcada3] py-6 sm:py-8 md:py-10">
            {/* Founded */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl text-font font-medium text-[#63564d]">
                {companyInfo.founded}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#dca37c]">
                Founded
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl text-font font-medium text-[#63564d]">
                <AnimatedCounter targetNumber={25} />
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#dca37c]">
                Projects
              </p>
            </div>

            {/* Global Footprint - Full width on mobile, spans 2 cols on sm+ */}
            <div className="space-y-1 sm:space-y-2 sm:col-span-2 md:col-span-2 mt-2 sm:mt-0">
              <p className="text-xl sm:text-2xl md:text-4xl text-font font-medium text-[#63564d] leading-tight">
                Global Footprint
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#dca37c]">
                {companyInfo.locations.map((loc) => loc.city).join(" & ")}
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION: MISSION & VISION (Two Columns) --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 text-center my-9">
          <div className="space-y-6">
            <h1 className="text-font text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#63564d] leading-tight mb-2">
              OUR <span className="text-[#e0a07a] bg-clip-text">MISSION</span>
            </h1>
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-2xl lg:mx-0 mx-4">
              {companyInfo.mission}
            </p>
          </div>

          <div className="space-y-6">
            <h1 className="text-font text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#63564d] leading-tight mb-2">
              OUR <span className="text-[#e0a07a] bg-clip-text">VISION</span>
            </h1>
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-2xl mx-4 lg:mx-0">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* --- SECTION: CORE VALUES (Grid) --- */}
        <div className="mb-24 mx-4">
          <h2 className="text-font text-2xl sm:text-3xl md:text-4xl font-bold text-[#63564d] mb-3 sm:mb-4 px-4 mx-auto text-center border-b border-[#bcada3] pb-4 max-w-lg">
            The Principles That Guide Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 py-2">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start space-y-2"
              >
                <ValueItem key={value.title} value={value} />
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION: LOCATIONS, PARTNERS & SUPPORT (Split) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 mx-4 sm:mb-16 md:mb-20">
          {/* Column 1: Milestones */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#63564d]">
              Milestones
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {companyInfo.locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <GoMilestone
                    size={18}
                    className="text-[#63564d] flex-none mt-1 sm:mt-0.5"
                  />
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-[#63564d] leading-tight">
                      {loc.year} {loc.event}
                    </p>
                    <p className="text-xs sm:text-sm text-[#63564d] mt-1">
                      {loc.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Partners & Support */}
          <div className="space-y-6 sm:space-y-8">
            {/* Partners */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#63564d]">
                Key Partnerships
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {partnersAndSupport.partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#63564d] border border-[#bcada3] px-2 sm:px-3 py-1 bg-[#dca37c]"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#63564d]">
                Support
              </h2>
              <p className="text-xs sm:text-sm text-[#63564d]">
                Received support from prestigious organizations
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {partnersAndSupport.support.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <FaHandshake
                      size={14}
                      className="text-[#63564d] mt-0.5 sm:mt-1 flex-none"
                    />
                    <span className="text-sm sm:text-base text-[#63564d] leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA (Recruiting Focus) --- */}
        <div className="mt-16 sm:mt-20 text-center border-t border-[#bcada3] pt-8 sm:pt-12">
          <h3 className="text-font text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#63564d] mb-3 sm:mb-4 px-4">
            Join Our Array of Lights
          </h3>
          <p className="text-font text-base sm:text-lg text-[#63564d] mb-4 sm:mb-6 px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate people who embody our values.
            Explore our current career opportunities.
          </p>
          <div className="px-4 sm:px-0">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center py-3 px-6 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-[#e0a07a] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
            >
              VIEW OPENINGS
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
