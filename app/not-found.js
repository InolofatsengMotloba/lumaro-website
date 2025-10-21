import React from 'react';
import Link from 'next/link';
import { FaTools, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f6f3ec] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center space-y-8">
        {/* Large, Elegant Icon */}
        <FaTools size={60} className="text-[#dca37c] mx-auto" />

        {/* Headline: Uses the brand's signature serif style */}
        <h1 className="heading-font text-7xl md:text-8xl font-serif font-light text-[#63564d] tracking-tighter leading-none">
          Under Construction
        </h1>

        {/* Subtitle: The "Not Found" message, delivered politely */}
        <p className="mt-4 text-xl text-[#63564d] max-w-xl mx-auto">
          We're currently perfecting the content for this page. Our team is
          working hard to ensure excellence and clarity.
        </p>

        {/* Call to Action: Direct the user back to safety */}
        <div className="pt-6 space-y-4">
          <p className="text-lg font-medium text-[#63564d]">
            In the meantime, let us guide you back to where the strategy begins.
          </p>

          <Link
            href="/"
            className="inline-flex items-center space-x-3 py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-[#dca37c] hover:bg-[#d99a70] transition duration-300 border border-[#63564d]"
          >
            <FaHome size={16} />
            <span>RETURN TO HOMEPAGE</span>
          </Link>

          <Link
            href="/services"
            className="block text-sm font-semibold uppercase tracking-widest text-[#dca37c] hover:text-[#d99a70] transition duration-200"
          >
            View Our Core Services &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}