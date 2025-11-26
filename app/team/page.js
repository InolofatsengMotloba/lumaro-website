import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

// --- TEAM DATA ---
const teamMembers = [
  // 1. Director (Top Level)
  {
    name: "Vuyelwa Hesewu",
    title: "Director & Founder",
    department: "Executive Leadership",
    bio: "Vuyelwa's unwavering creativity and attention to detail have shaped our brand's foundation. She brings a calming, insightful presence to the team.",
    image: "/Vuyelwa.jpg",
    linkedin: "https://www.linkedin.com/in/vuyelwa-hesewu-207095147/",
    email: "vuvuhesewu2@gmail.com",
  },
  // 2. Accounts Manager (Team Lead 1)
  {
    name: "Nandipha Mngibisa",
    title: "Accounts Manager",
    department: "Client Relations & Finance",
    bio: "Nandipha manages key client relationships and oversees all financial and administrative operations.",
    image: "/images/marcus_chen.jpg",
    linkedin: "#",
    email: "marcus.chen@estrella.com",
  },
  // 3. IT Manager (Team Lead 2)
  {
    name: "Steve Bob Chiur",
    title: "IT Manager",
    department: "Technical & Systems Support",
    bio: "Steve is responsible for all technical infrastructure, security, and internal system efficiency.",
    image: "/images/ethan_miller.jpg",
    linkedin: "#",
    email: "ethan.miller@estrella.com",
  },
  // 4. Receptionist (Under Accounts Manager)
  {
    name: "Sinikiwe Mzekwa",
    title: "Receptionist",
    department: "Client Relations & Finance",
    bio: "Sinikiwe is the welcoming face and first point of contact, ensuring a smooth experience for all visitors and calls.",
    image: "/images/sarah_jones.jpg",
    linkedin: "#",
    email: "sarah.jones@estrella.com",
  },
  // 5. Admin (Under Accounts Manager)
  {
    name: "Nosiphelele Bontshi",
    title: "Office Administrator",
    department: "Client Relations & Finance",
    bio: "Nosiphelele handles scheduling, vendor management, and maintains the smooth daily operation of the office.",
    image: "/images/leo_hayes.jpg",
    linkedin: "#",
    email: "leo.hayes@estrella.com",
  },
  // 6. Branding/Printing (Under IT Manager)
  {
    name: " Anele Hesewu",
    title: "Branding & Print Coordinator",
    department: "Marketing Support",
    bio: "Anele handles all internal and external branding materials, including physical assets and print production.",
    image: "/images/chloe_davis.jpg",
    linkedin: "#",
    email: "chloe.davis@estrella.com",
  },
  // 7. Intern (Under IT Manager)
  {
    name: "Inolofatseng Motloba",
    title: "Technical Intern",
    department: "Technical & Systems Support",
    bio: "Inolofatseng supports the IT team with digital solutions and assists with deployment projects.",
    image: "/images/mia_rodriguez.jpg",
    linkedin: "https://www.linkedin.com/in/inolofatseng-motloba/",
    email: "motlobainolo123@gmail,com",
  },
];

// --- UTILITY FUNCTIONS FOR TEAM STRUCTURE ---
const getDirector = () => teamMembers.find((m) => m.title.includes("Director"));
const getAccountsManager = () =>
  teamMembers.find((m) => m.title.includes("Accounts Manager"));
const getAccountsSubordinates = () =>
  teamMembers.filter(
    (m) => m.title.includes("Receptionist") || m.title.includes("Administrator")
  );
const getITManager = () =>
  teamMembers.find((m) => m.title.includes("IT Manager"));
const getITSubordinates = () =>
  teamMembers.filter(
    (m) => m.title.includes("Branding") || m.title.includes("Intern")
  );

// --- COMPONENTS ---

// Component for a Team Member Card
const MemberCard = ({ member, isLead = false }) => (
  <div
    className={`space-y-4 p-6 ${
      isLead
        ? "bg-[#f4eee5] border border-[#bcada3]"
        : "bg-gray-50 border-b border-gray-200"
    }`}
  >
    {/* Placeholder for Image (Replace with actual image component if available) */}
    <div className="w-full h-48 bg-white mb-4 flex items-center justify-center overflow-hidden">
      <span className="text-gray-400 text-sm">Image Placeholder</span>
    </div>

    <h3
      className={`text-2xl font-serif text-[#63564d] ${
        isLead ? "font-medium" : "font-light"
      }`}
    >
      {member.name}
    </h3>
    <p className="text-sm font-semibold uppercase tracking-widest text-[#dca37c]">
      {member.title}
    </p>
    <p className="text-base text-[#63564d]">{member.bio}</p>

    {/* Social Links */}
    <div className="flex space-x-3 pt-2">
      <a
        href={`mailto:${member.email}`}
        className="text-gray-500 hover:text-red-500 transition-colors duration-200"
      >
        <FaEnvelope size={18} />
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-200"
      >
        <FaLinkedinIn size={18} />
      </a>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Team() {
  const director = getDirector();
  const accountsManager = getAccountsManager();
  const accountsSubordinates = getAccountsSubordinates();
  const ITManager = getITManager();
  const ITSubordinates = getITSubordinates();

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
        {/* Hero Section */}
        <div className="text-center my-9 px-6 sm:px-8">
          <h1 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d] leading-tight mb-2">
            Our{" "}
            <span className="bg-gradient-to-r from-[#e0a07a] to-[#63564d] bg-clip-text text-transparent">
              People
            </span>
          </h1>

          <div className="flex justify-center mt-4">
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-4xl lg:mx-0">
              Guided by visionary leadership and united by purpose, the Lumaro
              team blends creativity, strategy, and technology to deliver
              impactful solutions that empower brands and communities.
            </p>
          </div>
        </div>

        {/* --- SECTION 1: EXECUTIVE & ACCOUNTS TEAM --- */}
        <div className="mb-24">
          <h2 className="text-4xl sm:text-3xl md:text-4xl text-font font-bold text-center text-[#63564d] mb-12 border-b border-[#bcada3] pb-4 max-w-lg mx-auto">
            Executive & Client Relations
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Director (Prominent placement - Column 1) */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#dca37c] mb-4">
                Director
              </h3>
              {director && <MemberCard member={director} isLead={true} />}
            </div>

            {/* Accounts Manager and Subordinates (Column 2 & 3) */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#dca37c] mb-4">
                Client Accounts Team
              </h3>

              {/* Manager */}
              <div className="mb-8">
                {accountsManager && (
                  <MemberCard member={accountsManager} isLead={true} />
                )}
              </div>

              {/* Receptionist and Admin */}
              <div className="grid sm:grid-cols-2 gap-10">
                {accountsSubordinates.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* --- SECTION 2: IT & TECHNICAL SUPPORT TEAM --- */}
        <div className="mb-24 pt-16">
          <h2 className="text-4xl sm:text-3xl md:text-4xl text-font font-bold text-center text-[#63564d] mb-12 border-b border-[#bcada3] pb-4 max-w-lg mx-auto">
            Technical & Infrastructure Support
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* IT Manager (Team Lead) */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#dca37c] mb-4">
                IT Management
              </h3>
              {ITManager && <MemberCard member={ITManager} isLead={true} />}
            </div>

            {/* Subordinates (Branding/Printing & Intern) */}
            <div className="space-y-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#dca37c] mb-4">
                Development
              </h3>
              <div className="grid sm:grid-cols-2 gap-10">
                {ITSubordinates.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA (Consistent with other pages) --- */}
        <div className="mt-16 sm:mt-20 text-center border-t border-[#bcada3] pt-8 sm:pt-12">
          <h3 className="text-font text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#63564d] mb-3 sm:mb-4 px-4">
            Work With Our Specialists
          </h3>
          <p className="text-font text-base sm:text-lg text-[#63564d] mb-4 sm:mb-6 px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed">
            Ready to partner with a dedicated team? Contact us to start your
            project.
          </p>
          <div className="px-4 sm:px-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3 px-6 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-[#e0a07a] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
            >
              START A CONSULTATION
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
