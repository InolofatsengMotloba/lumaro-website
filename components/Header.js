"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// Array for navigation links to keep the component clean
const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACT", href: "/contact" },
  {
    name: "E-COMMERCE",
    href: "https://mangemahle-ecommerce.vercel.app",
  },
];

export default function Header() {
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (href) => {
    // For external links, never mark as active
    if (href.startsWith("http")) return false;

    // For root path
    if (href === "/") return pathname === "/";

    // For other paths, check if current path starts with the href
    return pathname.startsWith(href);
  };

  return (
    // Main container with padding and a bottom border
    <header className="w-full bg-[#f4eee5] px-8 py-8 border-b border-gray-300">
      {/* Top Row: Search, Logo/Title, Social Icons */}
      <div className="flex items-center justify-between h-16">
        {/* Left Section: Search Link */}
        <div className="flex-1 flex items-center text-xs tracking-widest uppercase text-[#63564d]">
          <Link
            href="/search"
            className={`group flex flex-col items-start transition-colors duration-200 hover:text-black ${
              isActive("/search") ? "font-bold text-[#63564d]" : ""
            }`}
          >
            SEARCH
            {/* The small line underneath 'SEARCH' */}
            <span
              className={`block w-6 h-px mt-0.5 transition-colors duration-200 ${
                isActive("/search")
                  ? "bg-black"
                  : "bg-[#63564d] group-hover:bg-black"
              }`}
            ></span>
          </Link>
        </div>

        {/* Center Section: Main Logo/Title */}
        <div className="flex-none text-center">
          <Link
            href="/"
            className="heading-font text-6xl font-normal tracking-wider text-[#63564d]"
          >
            LUMARO
          </Link>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex-1 flex justify-end space-x-4 text-[#63564d]">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebookF size={14} />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter size={14} />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors duration-200"
          >
            <FaInstagram size={14} />
          </Link>
          <Link
            href="https://pinterest.com"
            aria-label="Pinterest"
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedin size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom Row: Main Navigation */}
      <nav className="mt-8">
        <ul className="flex justify-center space-x-8 text-sm font-sans tracking-widest text-[#63564d]">
          {navLinks.map((link) =>
            link.name === "E-COMMERCE" ? (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="uppercase transition-colors duration-200 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`uppercase transition-colors duration-200 hover:text-black ${
                    isActive(link.href) ? "font-bold text-[#63564d]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
