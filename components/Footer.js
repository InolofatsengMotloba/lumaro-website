import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";

// Data for navigation groups
const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const companyLinks = [
  { name: "Our Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Media", href: "/media" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

// Helper component for link groups
const FooterLinkGroup = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    {/* Title uses the same uppercase, wide-tracking, sans-serif style as the header's navigation */}
    <h3 className="text-sm font-bold uppercase tracking-widest text-[#dca37c] mb-3">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-[#63564d] text-sm hover:text-black transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-[#f4eee5] border-t border-gray-200 mt-16 pt-16 pb-8 px-8">
      {/* Main Grid Section: Quick Links, Contact, Company Info */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
        {/* Company Logo/Tagline (Matches Header's Serif Font) */}
        <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
          <Link href="/" className="block">
            <Image
              src="/LogoNoBG.png"
              alt="Lumaro Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
          <p className="text-[#63564d] text-sm leading-relaxed max-w-xs">
            Empowering brands and communities through innovative digital,
            marketing, and communication solutions.
          </p>

          <div className="flex space-x-4 pt-2">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              target="_blank"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-blue-400  hover:text-blue-600 transition-colors duration-200"
              target="_blank"
            >
              <FaTwitter size={14} />
            </Link>

            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-800 transition-colors duration-200"
              target="_blank"
            >
              <FaInstagram size={14} />
            </Link>

            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-[#0A66C2] hover:text-[#0b4783] transition-colors duration-200"
              target="_blank"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>

        {/* Quick Links Group */}
        <FooterLinkGroup title="QUICK LINKS" links={quickLinks} />

        {/* Company Group */}
        <FooterLinkGroup title="COMPANY" links={companyLinks} />

        {/* Get in Touch Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#dca37c] mb-3">
            GET IN TOUCH
          </h3>

          <ul className="space-y-3">
            {/* Email */}
            <li className="flex flex-nowrap items-center gap-2 overflow-visible">
              <FaEnvelope className="text-[#dca37c] flex-shrink-0" size={14} />
              <a
                href="mailto:vuvuhesewu2@gmail.com"
                className="text-[#63564d] text-sm hover:text-black transition-colors duration-200 whitespace-nowrap overflow-visible"
              >
                vuvuhesewu2@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex flex-nowrap items-center gap-2">
              <FaPhone className="text-[#dca37c] flex-shrink-0" size={14} />
              <a
                href="tel:+27787244418"
                className="text-[#63564d] text-sm hover:text-black transition-colors duration-200 whitespace-nowrap"
              >
                (078) 724-4418
              </a>
            </li>

            {/* Address */}
            <li>
              <a
                href="https://maps.app.goo.gl/6WEKLBpKbC6UK78c6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 overflow-visible"
              >
                <FaMapMarkerAlt
                  className="text-[#dca37c] mt-1 flex-shrink-0"
                  size={14}
                />
                <address className="not-italic text-[#63564d] text-sm hover:text-black transition-colors duration-200 leading-relaxed whitespace-nowrap sm:whitespace-pre-line">
                  No 77 John Beer Street
                  <br />
                  Northcrest, Mthatha
                  <br />
                  Eastern Cape
                </address>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator Line for the Legal/Copyright Bar */}
      <div className="border-t border-[#bcada3] my-10 md:my-16 max-w-7xl mx-auto"></div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 text-xs text-gray-500">
        {/* Copyright */}
        <p>
          &copy; {currentYear} Lumaro Group Company (Pty) Ltd. All Rights
          Reserved.
        </p>

        {/* Legal Links (Horizontal) */}
        <nav>
          <ul className="flex flex-wrap space-x-6">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-black transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
