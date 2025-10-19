import React from "react";
import Link from "next/link";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
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
  return (
    // Main container with padding and a bottom border to match the image
    <header className="w-full bg-white px-8 py-8 border-b border-gray-300">
      {/* Top Row: Search, Logo/Title, Social Icons */}
      <div className="flex items-center justify-between h-16">
        {/* Left Section: Search Link */}
        <div className="flex-1 flex items-center text-xs tracking-widest uppercase text-gray-700">
          <Link
            href="/search"
            className="group flex flex-col items-start transition-colors duration-200 hover:text-black"
          >
            SEARCH
            {/* The small line underneath 'SEARCH' */}
            <span className="block w-6 h-px mt-0.5 bg-gray-500 group-hover:bg-black transition-colors duration-200"></span>
          </Link>
        </div>

        {/* Center Section: Main Logo/Title */}
        <div className="flex-none text-center">
          {/* To get the elegant look, you'll need to use a strong serif font. 
            Since this is a common design element, consider importing a font 
            like 'Playfair Display' or 'Lora' and applying it here. 
            For this example, we'll use Tailwind's default 'serif' stack.
          */}
          <Link
            href="/"
            className="text-6xl font-serif font-normal tracking-wider text-black"
          >
            LUMARO
          </Link>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex-1 flex justify-end space-x-4 text-gray-700">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-black transition-colors duration-200"
          >
            <FaFacebookF size={14} />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-black transition-colors duration-200"
          >
            <FaTwitter size={14} />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-black transition-colors duration-200"
          >
            <FaInstagram size={14} />
          </Link>
          <Link
            href="https://pinterest.com"
            aria-label="Pinterest"
            className="hover:text-black transition-colors duration-200"
          >
            <FaPinterestP size={14} />
          </Link>
        </div>
      </div>

      {/* --- Horizontal Line Separation --- */}
      {/* The bottom border on the main <header> element already provides the main line. 
          The navigation sits slightly above that line in the original design, 
          which is achieved by controlling the padding/margin of the overall header. */}

      {/* Bottom Row: Main Navigation */}
      <nav className="mt-8">
        <ul className="flex justify-center space-x-8 text-sm font-sans tracking-widest text-gray-700">
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
              <Link key={link.name} href={link.href} className="menu-link">
                {link.name}
              </Link>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
