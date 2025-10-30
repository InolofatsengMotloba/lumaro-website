"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (href) => {
    // For external links, never mark as active
    if (href.startsWith("http")) return false;

    // For root path
    if (href === "/") return pathname === "/";

    // For other paths, check if current path starts with the href
    return pathname.startsWith(href);
  };

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Main container with padding and a bottom border
    <header className="w-full bg-[#f4eee5] px-4 md:px-8 py-4 md:py-8 border-b border-[#bcada3]">
      {/* Top Row: Search, Logo/Title, Social Icons & Hamburger */}
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
            className="heading-font text-4xl md:text-6xl font-normal tracking-wider text-[#63564d]"
          >
            LUMARO
          </Link>
        </div>

        {/* Right Section: Social Icons & Hamburger Menu */}
        <div className="flex-1 flex justify-end items-center">
          {/* Social Icons - Hidden on mobile */}
          <div className="hidden md:flex space-x-4 text-[#63564d]">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors duration-200"
              target="_blank"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors duration-200"
              target="_blank"
            >
              <FaTwitter size={14} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors duration-200"
              target="_blank"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="hover:text-blue-700 transition-colors duration-200"
              target="_blank"
            >
              <FaLinkedin size={14} />
            </Link>
          </div>

          {/* Hamburger Menu Button - Visible on mobile */}
          <button
            className="md:hidden text-[#63564d] p-2 ml-4 transition-colors duration-200 hover:text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Bottom Row: Main Navigation - Hidden on mobile */}
      <nav className="hidden md:block mt-8">
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#f4eee5] z-50 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-[#bcada3]">
          {/* Logo in Mobile Menu */}
          <Link
            href="/"
            className="heading-font text-2xl font-normal tracking-wider text-[#63564d]"
            onClick={closeMenu}
          >
            LUMARO
          </Link>

          {/* Close Button */}
          <button
            className="text-[#63564d] transition-colors duration-200 hover:text-black"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <ul className="space-y-8 text-center">
            {navLinks.map((link) =>
              link.name === "E-COMMERCE" ? (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-2xl uppercase tracking-widest text-[#63564d] transition-colors duration-200 hover:text-black"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-2xl uppercase tracking-widest transition-colors duration-200 hover:text-black ${
                      isActive(link.href)
                        ? "font-bold text-[#63564d]"
                        : "text-[#63564d]"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Social Icons in Mobile Menu */}
          <div className="flex space-x-6 mt-12 text-[#63564d]">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors duration-200"
              target="_blank"
              onClick={closeMenu}
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              onClick={closeMenu}
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors duration-200"
              target="_blank"
              onClick={closeMenu}
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="hover:text-blue-700 transition-colors duration-200"
              target="_blank"
              onClick={closeMenu}
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
