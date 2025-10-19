import React from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

// Company Details (Centralized Data)
const companyContact = {
  phone: "(555) 123-4567",
  email: "hello@estrella.com",
  address: "123 Digital Way, Suite 400, New York, NY 10001",
  whatsappNumber: "+15551234567", // Use E.164 format for WhatsApp link
  hours: "Mon - Fri: 9:00 AM - 5:00 PM EST",
};

// WhatsApp link utility
// This uses the official wa.me link with a pre-filled quote message
const whatsappLink = `https://wa.me/${
  companyContact.whatsappNumber
}?text=${encodeURIComponent(
  "Hello Estrella, I'd like to get a quote for digital solutions. Please tell me what information you need."
)}`;

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto py-16 px-8 lg:py-24">
        {/* Hero Section - Centered and High-Impact */}
        <div className="text-center mb-20">
          {/* Subtle Sans-Serif Pre-title */}
          <p className="text-sm font-light uppercase tracking-widest text-gray-500 mb-2">
            Let's Collaborate
          </p>

          {/* Serif Title - Matching Header's Elegance */}
          <h1 className="text-6xl md:text-8xl font-serif font-light text-black tracking-tighter">
            Get In Touch
          </h1>

          {/* Subtitle/Call-to-Action */}
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to elevate your brand? Connect with our team to discuss your
            next digital project.
          </p>
        </div>

        {/* --- Main Content Grid: Form + Info/CTA --- */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h2 className="text-2xl font-serif font-medium text-black mb-6">
              Send Us a Message
            </h2>

            {/* Simple Contact Form - Feel free to integrate a proper form library here */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-b border-gray-300 bg-transparent focus:border-black focus:ring-0 transition duration-150 p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-b border-gray-300 bg-transparent focus:border-black focus:ring-0 transition duration-150 p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Project / Needs
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 bg-white focus:border-black focus:ring-0 transition duration-150 p-3"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition duration-300 border border-black"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          {/* Right Column: Key Details, Business Hours, and WhatsApp CTA */}
          <div className="space-y-12">
            {/* WhatsApp Quote Prompt Section */}
            <div className="p-6 border border-gray-300 hover:border-black transition duration-300">
              <h3 className="text-xl font-serif font-medium text-black mb-4">
                Need a Quick Quote?
              </h3>
              <p className="text-gray-700 mb-6">
                Connect instantly with a solutions specialist via WhatsApp for a
                fast, free consultation.
              </p>

              {/* WhatsApp Button - Primary CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 w-full py-3 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#1DA851] transition duration-300"
              >
                <FaWhatsapp size={20} />
                <span>CHAT & GET A QUOTE</span>
              </a>
            </div>

            {/* General Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium text-black">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <ContactDetail
                  Icon={FaPhone}
                  label="Phone"
                  value={companyContact.phone}
                  link={`tel:${companyContact.phone.replace(/[^0-9+]/g, "")}`}
                />
                <ContactDetail
                  Icon={FaEnvelope}
                  label="Email"
                  value={companyContact.email}
                  link={`mailto:${companyContact.email}`}
                />
                <ContactDetail
                  Icon={FaMapMarkerAlt}
                  label="Location"
                  value={companyContact.address}
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium text-black">
                Business Hours
              </h3>
              <ContactDetail
                Icon={FaClock}
                label="Operating"
                value={companyContact.hours}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable component for contact details
const ContactDetail = ({ Icon, label, value, link }) => (
  <div className="flex items-start space-x-4">
    <Icon className="text-black mt-1" size={16} />
    <div className="flex-1">
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-0.5">
        {label}
      </p>
      {link ? (
        <a
          href={link}
          className="text-gray-900 text-base hover:text-black transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-900 text-base">{value}</p>
      )}
    </div>
  </div>
);
