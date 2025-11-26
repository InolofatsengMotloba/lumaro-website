import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { TbTelescope } from "react-icons/tb";

const Hero = () => {
  // ImageCard component using Next.js Image
  const ImageCard = ({ src, alt, className = "", priority = false }) => (
    <div
      className={`relative bg-white p-1.5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-xl bg-gray-100"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  return (
    <section
      className="min-h-screen mx-auto flex items-center justify-center relative"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
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

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6 sm:px-0 pt-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* --- Left Content: Headline, Description, Button --- */}
          <div className="lg:w-5/12 text-center lg:text-left order-1">
            <h1 className="text-font text-4xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d] leading-tight mb-4">
              Building Your{" "}
              <span className="bg-gradient-to-r from-[#e0a07a] to-[#63564d] bg-clip-text text-transparent">
                Business
              </span>{" "}
              with Trusted{" "}
              <span className="bg-gradient-to-r from-[#63564d] to-[#e0a07a] bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Building strong foundations and driving growth, we support your
              business with trusted expertise and innovative solutions. From
              guiding early-stage ideas to scaling established ventures, we’re
              with you at every step.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services" className="flex justify-center sm:block">
                <button className="px-6 py-3 bg-[#e0a07a] text-white font-semibold text-base rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center">
                  <TbTelescope
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                  Explore Services
                </button>
              </Link>
              <Link href="/contact" className="flex justify-center sm:block">
                <button className="px-6 py-3 bg-transparent text-[#cc9778] font-semibold text-base rounded-2xl border-2 border-[#cc9778] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 whitespace-nowrap w-full sm:w-auto justify-center">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Subtle airplane icon/graphic below the text, similar to the image */}
            {/* <div className="mt-8 hidden lg:flex justify-center lg:justify-start">
              <Image
                src="/LGCLogo.png" // or use a PNG: "/airplane-icon.png"
                alt="Lumaro Logo"
                width={100}
                height={100}
                className=""
                priority
              />
            </div> */}
          </div>

          {/* --- Right Content: Image Cards --- */}
          <div className="lg:w-7/12 relative order-1 lg:order-2 w-full">
            {/* Desktop Layout: Straight grid - one image on left, two stacked on right */}
            <div className="hidden lg:flex items-center gap-6 justify-end">
              {/* Left column - single image */}
              <div className="w-5/12 flex flex-col">
                <div className="relative h-115 rounded-2xl">
                  <ImageCard
                    src="/LG2.png"
                    alt="Lumaro Building"
                    className="h-full"
                    priority={true}
                  />
                </div>
              </div>

              {/* Right column - two stacked images */}
              <div className="w-5/12 flex flex-col gap-6">
                <div className="relative h-64 rounded-2xl">
                  <ImageCard
                    src="/LG3.png"
                    alt="Friendly service"
                    className="h-full"
                    priority={true}
                  />
                </div>
                <div className="relative h-72 rounded-2xl">
                  <ImageCard
                    src="/LG1.png"
                    alt="Office Space"
                    className="h-full"
                    priority={true}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout: Text on top of images with full screen height */}
            <div className="lg:hidden flex flex-col min-h-[50vh] justify-center">
              <div className="relative h-48 w-full mb-4">
                <ImageCard
                  src="/LG2.png"
                  alt="Lumaro Building"
                  className="h-full"
                  priority={true}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-46">
                  <ImageCard
                    src="/LG3.png"
                    alt="Friendly service"
                    className="h-full"
                    priority={true}
                  />
                </div>
                <div className="relative h-46">
                  <ImageCard
                    src="/LG1.png"
                    alt="Office Space"
                    className="h-full"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
