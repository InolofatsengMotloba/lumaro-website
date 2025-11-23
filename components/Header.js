"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Menu, X, ChevronDown, Plane } from "lucide-react";
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
    { name: "Services", href: "services" },
    { name: "Travel Tips", href: "#" },
    { name: "Inspiration", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About Us", href: "#" },
  ];

  const handleMenuItemClick = (itemName) => {
    setActivePage(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* --- Top Bar (Narrow, Text-sm, Contact/Location) --- */}
      <div className="text-gray-700 text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 border-b border-orange-200/50">
          {/* Left: Contact and Email */}
          <div className="flex space-x-6">
            <a
              href="mailto:info@globetrekker.com"
              className="flex items-center hover:text-orange-600 transition"
            >
              <Mail size={14} className="mr-1" />
              <span>info@globetrekker.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center hover:text-orange-600 transition"
            >
              <Phone size={14} className="mr-1" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

          {/* Right: Location */}
          <div className="flex items-center text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span>New York, NY, USA</span>
          </div>
        </div>
      </div>

      {/* --- Main Header (Logo, Menu) --- */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo (Left) */}
          <a
            href="/"
            className="flex items-center text-xl font-extrabold text-gray-800 tracking-wider z-60"
          >
            <Plane size={24} className="text-orange-600 mr-2 rotate-12" />
            GLOBE TREKKER
          </a>

          {/* Desktop Menu (Right) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center font-medium transition duration-300 relative ${
                  activePage === item.name
                    ? "text-orange-600 font-bold"
                    : "text-gray-600 hover:text-orange-600"
                }`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.name}
                {/* Underline effect */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transition-transform duration-300 origin-left ${
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
            className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition z-60"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Keep logo and menu button visible in mobile menu */}
        <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-60">
          <a
            href="/"
            className="flex items-center text-xl font-extrabold text-gray-800 tracking-wider"
          >
            <Plane size={24} className="text-orange-600 mr-2 rotate-12" />
            GLOBE TREKKER
          </a>

          <button
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col space-y-2 p-4 h-full justify-center items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-lg font-medium rounded-lg transition min-w-[200px] text-center ${
                activePage === item.name
                  ? "bg-orange-600 text-white font-bold"
                  : "text-gray-700 hover:bg-orange-50"
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
