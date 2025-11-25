"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Menu, X, Plane } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Team", href: "team" },
    { name: "Contact", href: "contact" },
    { name: "E-Commerce", href: "#" },
  ];

  const handleMenuItemClick = (itemName) => {
    setActivePage(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f4eee5] shadow-lg" : "bg-transparent"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* --- Top Bar (Narrow, Text-sm, Contact/Location) --- */}
      <div className="text-[#63564d] text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 border-b border-[#bcada3]">
          {/* Left: Contact and Email */}
          <div className="flex space-x-6">
            <div className="flex items-center gap-2">
              <a
                href="tel:+27692033751"
                className="flex items-center gap-2 hover:text-[#dca37c] transition"
              >
                <FaPhone size={14} className="text-[#dca37c]" />
                <span>078 724 4418</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@lumarogroup.co.za"
                className="flex items-center gap-2 hover:text-[#dca37c] transition"
              >
                <FaEnvelope size={14} className="text-[#dca37c]" />
                <span>info@lumarogroup.co.za</span>
              </a>
            </div>
          </div>

          {/* Right: Location */}

          <a
            href="https://maps.app.goo.gl/6WEKLBpKbC6UK78c6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start overflow-visible"
          >
            <div className="flex items-center gap-1 text-[#63564d] hover:text-[#dca37c]">
              <FaMapMarkerAlt size={14} className="text-[#dca37c]" />
              <span>Northcrest, Mthatha, Eastern Cape</span>
            </div>
          </a>
        </div>
      </div>

      {/* --- Main Header (Logo, Menu) --- */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo (Left) */}
          <a
            href="/"
            className="heading-font flex items-center text-xl font-extrabold text-[#63564d] tracking-wider z-60"
          >
            <Image
              src="/LGCLogo.png"
              alt="Lumaro Group Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-10 sm:h-10 pr-1"
            />
            LUMARO GROUP
          </a>

          {/* Desktop Menu (Right) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center font-medium transition duration-300 relative ${
                  activePage === item.name
                    ? "text-[#dca37c] font-bold"
                    : "text-[#63564d] hover:text-[#dca37c]"
                }`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.name}
                {/* Underline effect */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#dca37c] transition-transform duration-300 origin-left ${
                    activePage === item.name
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="lg:hidden p-2 rounded-full text-[#63564d] hover:bg-gray-100 transition z-60"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#f4eee5] transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Keep logo and menu button visible in mobile menu */}
        {/* <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-60">
          {/* <a
            href="/"
            className="flex items-center text-xl font-extrabold heading-font text-[#63564d] tracking-wider"
          >
            <Plane
              size={24}
              className="heading-font text-[#63564d] mr-2 rotate-12"
            />
            LUMARO GROUP
          </a> */}

        {/* <button
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button> */}
        {/* </div> */}

        {/* Mobile Menu Items */}
        <nav className="flex flex-col space-y-2 p-4 h-full justify-center items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-lg font-medium rounded-lg transition min-w-[200px] text-center ${
                activePage === item.name
                  ? "bg-[#63564d] text-white font-bold"
                  : "text-[#63564d] hover:bg-orange-50"
              }`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
