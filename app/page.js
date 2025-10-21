import React from "react";
import Link from "next/link";
import {
  FaRegStar,
  FaHandshake,
  FaChartLine,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

// --- DATA ---

const servicesSummary = [
  {
    title: "Digital Strategy",
    icon: FaChartLine,
    description:
      "We define the roadmap for your success, blending market insight with actionable growth plans.",
  },
  {
    title: "Web Development",
    icon: FaLaptopCode,
    description:
      "Custom, scalable, and secure digital platforms engineered for performance and reliability.",
  },
];

const features = [
  {
    title: "Proven Track Record",
    description:
      "Over 500 successful projects launched with an average client revenue increase of 30%.",
    icon: FaCheckCircle,
  },
  {
    title: "Dedicated Partnership",
    description:
      "We embed with your team, acting as a true partner rather than just a vendor.",
    icon: FaHandshake,
  },
  {
    title: "Excellence in Execution",
    description:
      "Our minimalist philosophy means flawless delivery and zero unnecessary complexity.",
    icon: FaRegStar,
  },
];

const testimonials = [
  {
    quote:
      "Estrella transformed our brand visibility. The clarity and structure they brought to our digital strategy were unparalleled.",
    name: "J. Harper",
    title: "Marketing Director, Ascent Corp.",
  },
  {
    quote:
      "The website build was fast, secure, and beautiful. They nailed the minimalist aesthetic while delivering enterprise performance.",
    name: "A. Patel",
    title: "CTO, Helix Solutions",
  },
];

// --- COMPONENTS ---

// Component for a Feature Item in "Why Choose Us"
const FeatureItem = ({ feature }) => (
  <div className="space-y-4 p-6 border border-gray-100 hover:border-black transition duration-300">
    <feature.icon size={28} className="text-black" />
    <h3 className="text-xl font-serif font-medium text-black">
      {feature.title}
    </h3>
    <p className="text-gray-700 text-base">{feature.description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <main className="max-w-7xl mx-auto">
        {/* --- 1. HERO SECTION: GRABS ATTENTION --- */}
        <section className="py-20 md:py-36 px-8 text-center border-b border-gray-100">
          <h1 className="text-7xl md:text-9xl font-serif font-light text-black tracking-tighter max-w-5xl mx-auto leading-none">
            Digital Clarity. <br />
            Measurable <span className="text-gray-700">Impact.</span>
          </h1>
          <p className="mt-8 text-xl text-gray-700 max-w-3xl mx-auto">
            We are Lumaro, your partner in strategic digital solutions. We
            engineer growth through uncompromising design and technical mastery.
          </p>

          {/* Primary CTA (Bold and High-Contrast) */}
          <div className="mt-10 space-x-4">
            <Link
              href="/contact"
              className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition duration-300 border border-black"
            >
              START YOUR PROJECT
            </Link>
            <Link
              href="/about"
              className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-black border border-black hover:bg-gray-50 transition duration-300"
            >
              LEARN OUR STORY
            </Link>
          </div>
        </section>

        {/* --- 2. SERVICES SUMMARY --- */}
        <section className="py-20 px-8">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12">
            Our Core Focus
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {servicesSummary.map((service, index) => (
              <div
                key={index}
                className="flex space-x-6 p-6 border-b border-gray-200"
              >
                <service.icon size={30} className="text-black flex-none mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full services page */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-widest text-black hover:text-gray-700 transition duration-200"
            >
              VIEW ALL 8 SERVICES IN DETAIL &rarr;
            </Link>
          </div>
        </section>

        <hr className="max-w-3xl mx-auto border-gray-100" />

        {/* --- 3. WHY CHOOSE US --- */}
        <section className="py-20 px-8 bg-gray-50">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-4">
            The Estrella Advantage
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
            We prioritize quality over quantity, building partnerships designed
            for long-term strategic success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </section>

        <hr className="max-w-3xl mx-auto border-gray-100" />

        {/* --- 4. REVIEWS/TESTIMONIALS --- */}
        <section className="py-20 px-8">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12">
            Client Voices
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="space-y-4 p-8 bg-white border-l-4 border-black shadow-sm"
              >
                <FaRegStar size={20} className="text-black" />
                <blockquote className="text-xl font-serif italic text-gray-800 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
