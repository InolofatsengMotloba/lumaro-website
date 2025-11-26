import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

// Company Details (Centralized Data)
const companyContact = {
  phone: "(069) 203-3751",
  email: "lumarogroup.co.za",
  address: "No 77 John Beer Street, Northcrest, Mthatha, Eastern Cape",
  whatsappNumber: "+27692033751",
  hours: "Mon - Fri: 9:00 AM - 5:00 PM SAST",
};

// WhatsApp link utility
// This uses the official wa.me link with a pre-filled quote message
const whatsappLink = `https://wa.me/${
  companyContact.whatsappNumber
}?text=${encodeURIComponent(
  "Hello, I'd like to get a quote for your services. Please tell me what information you need."
)}`;

export default function Contact() {
  return (
    <div className="min-h-screen ">
      <main className="max-w-7xl mx-auto py-20 px-2 sm:px-0 lg:py-28">
        {/* Background elements (subtle map contour, similar to the image) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e9a46a"
              d="M800.2,467.4C719,579.5,479,720.9,321.4,694.7C163.8,668.5,88.4,474.7,65.3,316.5C42.2,158.3,70.5,35.6,220.6,6.3C370.7-23,642.6,35.3,800.2,197.6C957.9,360,881.4,415.3,800.2,467.4Z"
              transform="translate(-100, -100) scale(1.2)"
            />
          </svg>
        </div>
        {/* Hero Section - Centered and High-Impact */}
        <div className="text-center my-9 px-6 sm:px-8">
          <h1 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d] leading-tight mb-2">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#e0a07a] to-[#63564d] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <div className="flex justify-center mt-4">
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-4xl lg:mx-0">
              Partner with Lumaro to bring your ideas to life through innovation
              and purpose.
            </p>
          </div>
        </div>

        {/* --- Main Content Grid: Form + Info/CTA --- */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <div className="bg-[#f4eee5] p-8 border border-[#bcada3]">
            <h2 className="text-font text-2xl font-serif font-medium text-[#63564d] mb-6">
              Send Us a Message
            </h2>

            {/* Simple Contact Form - Feel free to integrate a proper form library here */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#63564d]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-b border-[#bcada3] bg-transparent focus:border-[#63564d] focus:ring-0 transition duration-150 p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#63564d]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-b border-[#bcada3] bg-transparent focus:border-[#63564d] focus:ring-0 transition duration-150 p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-[#63564d]"
                >
                  Your Project / Needs
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  className="mt-1 block w-full border border-[#bcada3] bg-white focus:border-[#63564d] focus:ring-0 transition duration-150 p-3"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm sm:text-base font-semibold uppercase tracking-widest text-white bg-[#dca37c] hover:bg-[#d99a70] transition duration-300"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          {/* Right Column: Key Details, Business Hours, and WhatsApp CTA */}
          <div className="space-y-12">
            {/* WhatsApp Quote Prompt Section */}
            <div className="p-6 border border-[#bcada3] hover:border-black transition duration-300">
              <h3 className="text-font text-xl font-serif font-bold text-[#63564d] mb-4">
                Need a Quick Quote?
              </h3>
              <p className="text-[#63564d] mb-6">
                Connect instantly with us via WhatsApp for a fast, free
                consultation.
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
              <h3 className="text-font text-xl font-serif font-medium text-[#63564d]">
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
                  target="_blank"
                  link={`https://maps.app.goo.gl/6WEKLBpKbC6UK78c6`}
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-font text-xl font-serif font-medium text-black">
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
const ContactDetail = ({ Icon, label, value, link, target = "_self" }) => (
  <div className="flex items-start space-x-4">
    <Icon className="text-[#e0a07a] hover:text-[#d99a70] mt-1" size={16} />
    <div className="flex-1">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#63564d] mb-0.5">
        {label}
      </p>
      {link ? (
        <a
          href={link}
          target={target} // This is what you're missing
          rel={target === "_blank" ? "noopener noreferrer" : ""}
          className="text-[#63564d] text-base hover:text-black transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <p className="text-[#63564d] text-base">{value}</p>
      )}
    </div>
  </div>
);
