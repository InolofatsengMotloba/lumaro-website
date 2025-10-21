import React from "react";
import Link from "next/link";
import {
  FaRegStar,
  FaHandshake,
  FaAddressCard,
  FaCheckCircle,
  FaRegFileAlt,
} from "react-icons/fa";

// --- DATA ---

const servicesSummary = [
  {
    title: "Comapny Registration",
    icon: FaRegFileAlt,
    description:
      "We help you register your business legally in South Africa, ensuring full compliance with CIPC, SARS, and CSD requirements. From name reservation to final certification and CSD registration, making the process simple, efficient, and reliable.",
  },
  {
    title: "Company Profile",
    icon: FaAddressCard,
    description:
      "We craft professional company profiles that reflect your brand identity, values, and offerings. Lumaro helps you present your business with clarity and confidence to attract clients, investors, and partners.",
  },
];

const features = [
  {
    title: "Proven Track Record",
    description:
      "Over 25 successful projects completed with an average client revenue increase of 30%.",
    icon: FaCheckCircle,
  },
  {
    title: "Dedicated Partnership",
    description:
      "We embed with your company/brand, acting as a true partner rather than just a vendor.",
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
      "Lumaro transformed our brand visibility. The clarity and structure they brought to our digital strategy were unparalleled.",
    name: "D. Retlareng",
    title: "Marketing Director, Fancy Corp.",
  },
  {
    quote:
      "The website build was fast, secure, and beautiful. They nailed the minimalist aesthetic while delivering enterprise performance.",
    name: "O. Diale",
    title: "Director, Tagline Tattoo Studio",
  },
];

// --- COMPONENTS ---

// Component for a Feature Item in "Why Choose Us"
const FeatureItem = ({ feature }) => (
  <div className="space-y-4 p-6 border border-[#bcada3] hover:border-black transition duration-300">
    <feature.icon size={28} className="text-[#dca37c]" />
    <h3 className="text-xl font-serif font-medium text-[#63564d]">
      {feature.title}
    </h3>
    <p className="text-[#63564d] text-base">{feature.description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <main className="max-w-7xl mx-auto">
        {/* --- 1. HERO SECTION: GRABS ATTENTION --- */}
        <section className="py-20 md:py-36 px-8 text-center border-b border-[#bcada3]">
          <h1 className="heading-font text-2xl md:text-9xl font-serif font-light text-[#63564d] tracking-tighter max-w-5xl mx-auto leading-none">
            Strategy. Creativity. <br />
            Technology <span className="text-[#dca37c]">Impact.</span>
          </h1>
          <p className="mt-8 text-xl text-[#63564d] max-w-3xl mx-auto">
            Inspired by our name, Lumaro — meaning “array of lights” — we
            illuminate opportunities for brands and communities through
            marketing, IT communication, and technology solutions that spark
            real change.
          </p>

          {/* Primary CTA (Bold and High-Contrast) */}
          <div className="mt-10 space-x-4">
            <Link
              href="/contact"
              className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-[#dca37c] hover:bg-[#d99a70] transition duration-300 border border-[#bcada3]"
            >
              START YOUR JOURNEY
            </Link>
            <Link
              href="/about"
              className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-[#dca37c] border border-[#dca37c] hover:bg-gray-50 transition duration-300"
            >
              LEARN OUR STORY
            </Link>
          </div>
        </section>

        {/* --- 2. SERVICES SUMMARY --- */}
        <section className="py-20 px-8">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-12">
            Our Core Focus
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {servicesSummary.map((service, index) => (
              <div
                key={index}
                className="flex space-x-6 p-6 border-b border-[#bcada3]"
              >
                <service.icon
                  size={30}
                  className="text-[#63564d] flex-none mt-1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#63564d] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#63564d]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full services page */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-widest text-[#dca37c] hover:text-[#d99a70] transition duration-200"
            >
              VIEW ALL SERVICES IN DETAIL &rarr;
            </Link>
          </div>
        </section>

        <hr className="max-w-3xl mx-auto border-[#bcada3]" />

        {/* --- 3. WHY CHOOSE US --- */}
        <section className="py-20 px-8 bg-[#f4eee5]">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-4">
            The Lumaro Advantage
          </h2>
          <p className="text-lg text-[#63564d] text-center max-w-2xl mx-auto mb-12">
            We prioritize quality over quantity, building partnerships and
            relationships designed for long-term strategic success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </section>

        <hr className="max-w-3xl mx-auto border-[#bcada3]" />

        {/* --- 4. REVIEWS/TESTIMONIALS --- */}
        <section className="py-20 px-8">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-12">
            Client Voices
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="space-y-4 p-8 bg-white border-l-4 border-[#bcada3] shadow-sm"
              >
                <FaRegStar size={20} className="text-[#dca37c]" />
                <blockquote className="text-xl font-serif italic text-gray-500 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#63564d]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#63564d]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
