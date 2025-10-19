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

// Data for navigation groups
const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Our Blog", href: "/blog" },
  { name: "Client Portal", href: "/login" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Media", href: "/media" },
  { name: "Free Resources", href: "/resources" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookies Settings", href: "/cookies" },
];

// Re-use the header's social links, adding LinkedIn for a business focus
const socialIcons = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

// Helper component for link groups
const FooterLinkGroup = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    {/* Title uses the same uppercase, wide-tracking, sans-serif style as the header's navigation */}
    <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-3">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-600 text-sm hover:text-black transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-16 pb-8 px-8">
      {/* Main Grid Section: Quick Links, Contact, Company Info */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
        {/* Company Logo/Tagline (Matches Header's Serif Font) */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link
            href="/"
            className="text-3xl font-serif font-normal tracking-wide text-black block"
          >
            LUMARO
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Digital solutions for the modern brand. Elevate your presence and
            drive real results.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialIcons.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-gray-500 hover:text-black transition-colors duration-200"
              >
                <item.icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links Group */}
        <FooterLinkGroup title="QUICK LINKS" links={quickLinks} />

        {/* Company Group */}
        <FooterLinkGroup title="COMPANY" links={companyLinks} />

        {/* Get in Touch Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-3">
            GET IN TOUCH
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-500" size={14} />
              <a
                href="mailto:hello@estrella.com"
                className="text-gray-600 text-sm hover:text-black"
              >
                hello@estrella.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-gray-500" size={14} />
              <a
                href="tel:+15551234567"
                className="text-gray-600 text-sm hover:text-black"
              >
                (555) 123-4567
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-gray-500 mt-1" size={14} />
              <address className="not-italic text-gray-600 text-sm hover:text-black">
                123 Digital Way
                <br />
                Suite 400, New York, NY 10001
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator Line for the Legal/Copyright Bar */}
      <div className="border-t border-gray-100 my-10 md:my-16 max-w-7xl mx-auto"></div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 text-xs text-gray-500">
        {/* Copyright */}
        <p>
          &copy; {currentYear} Lumaro Group Company. All Rights Reserved.
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
