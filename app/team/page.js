import React from "react";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaUserTie,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

// --- TEAM DATA ---
const teamMembers = [
  // 1. Director (Top Level)
  {
    name: "Alexandra Reid",
    title: "Director & Founder",
    department: "Executive Leadership",
    bio: "As the founder, Alexandra sets the strategic vision and ensures Estrella remains focused on innovation and measurable client results.",
    image: "/images/alexandra_reid.jpg",
    linkedin: "#",
    email: "alexandra.reid@estrella.com",
  },
  // 2. Accounts Manager (Team Lead 1)
  {
    name: "Marcus Chen",
    title: "Senior Accounts Manager",
    department: "Client Relations & Finance",
    bio: "Marcus manages key client relationships and oversees all financial and administrative operations.",
    image: "/images/marcus_chen.jpg",
    linkedin: "#",
    email: "marcus.chen@estrella.com",
  },
  // 3. IT Manager (Team Lead 2)
  {
    name: "Ethan Miller",
    title: "IT & Infrastructure Manager",
    department: "Technical & Systems Support",
    bio: "Ethan is responsible for all technical infrastructure, security, and internal system efficiency.",
    image: "/images/ethan_miller.jpg",
    linkedin: "#",
    email: "ethan.miller@estrella.com",
  },
  // 4. Receptionist (Under Accounts Manager)
  {
    name: "Sarah Jones",
    title: "Client Receptionist",
    department: "Client Relations & Finance",
    bio: "Sarah is the welcoming face and first point of contact, ensuring a smooth experience for all visitors and calls.",
    image: "/images/sarah_jones.jpg",
    linkedin: "#",
    email: "sarah.jones@estrella.com",
  },
  // 5. Admin (Under Accounts Manager)
  {
    name: "Leo Hayes",
    title: "Office Administrator",
    department: "Client Relations & Finance",
    bio: "Leo handles scheduling, vendor management, and maintains the smooth daily operation of the office.",
    image: "/images/leo_hayes.jpg",
    linkedin: "#",
    email: "leo.hayes@estrella.com",
  },
  // 6. Branding/Printing (Under IT Manager)
  {
    name: "Chloe Davis",
    title: "Branding & Print Coordinator",
    department: "Marketing Support",
    bio: "Chloe handles all internal and external branding materials, including physical assets and print production.",
    image: "/images/chloe_davis.jpg",
    linkedin: "#",
    email: "chloe.davis@estrella.com",
  },
  // 7. Intern (Under IT Manager)
  {
    name: "Mia Rodriguez",
    title: "Technical Intern",
    department: "Technical & Systems Support",
    bio: "Mia supports the IT team with system maintenance and assists with new hardware deployment projects.",
    image: "/images/mia_rodriguez.jpg",
    linkedin: "#",
    email: "mia.rodriguez@estrella.com",
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
  teamMembers.find((m) => m.title.includes("IT & Infrastructure Manager"));
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
        ? "bg-gray-50 border border-gray-200"
        : "bg-white border-b border-gray-100"
    }`}
  >
    {/* Placeholder for Image (Replace with actual image component if available) */}
    <div className="w-full h-48 bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
      <span className="text-gray-400 text-sm">Image Placeholder</span>
    </div>

    <h3
      className={`text-2xl font-serif text-black ${
        isLead ? "font-medium" : "font-light"
      }`}
    >
      {member.name}
    </h3>
    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
      {member.title}
    </p>
    <p className="text-base text-gray-700">{member.bio}</p>

    {/* Social Links */}
    <div className="flex space-x-3 pt-2">
      <a
        href={`mailto:${member.email}`}
        className="text-black hover:text-gray-700 transition-colors duration-200"
      >
        <FaEnvelope size={18} />
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 transition-colors duration-200"
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
      <main className="max-w-7xl mx-auto py-16 px-8 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <p className="text-sm font-light uppercase tracking-widest text-[#dca37c] mb-2">
            Meet the Experts
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-black tracking-tighter">
            Our People
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            A dedicated team of seven specialists, perfectly structured to
            support all facets of your business.
          </p>
        </div>

        {/* --- SECTION 1: EXECUTIVE & ACCOUNTS TEAM --- */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12 border-b border-gray-200 pb-4 max-w-lg mx-auto">
            Executive & Client Relations
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Director (Prominent placement - Column 1) */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                Director
              </h3>
              {director && <MemberCard member={director} isLead={true} />}
            </div>

            {/* Accounts Manager and Subordinates (Column 2 & 3) */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
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
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12 border-b border-gray-200 pb-4 max-w-lg mx-auto">
            Technical & Infrastructure Support
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* IT Manager (Team Lead) */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                IT Management
              </h3>
              {ITManager && <MemberCard member={ITManager} isLead={true} />}
            </div>

            {/* Subordinates (Branding/Printing & Intern) */}
            <div className="space-y-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                Specialists & Development
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
        <div className="mt-20 text-center border-t border-gray-200 pt-12">
          <h3 className="text-4xl font-serif font-light text-black mb-4">
            Work With Our Specialists
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Ready to partner with a dedicated team? Contact us to start your
            project.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition duration-300 border border-black"
          >
            START A CONSULTATION
          </Link>
        </div>
      </main>
    </div>
  );
}
