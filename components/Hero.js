import React from "react";
import Image from "next/image";

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
        className="object-cover rounded-xl bg-red-100"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  return (
    <section
      className="min-h-screen flex items-center justify-center relative "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Background elements (subtle map contour, similar to the image) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FDBA74"
            d="M800.2,467.4C719,579.5,479,720.9,321.4,694.7C163.8,668.5,88.4,474.7,65.3,316.5C42.2,158.3,70.5,35.6,220.6,6.3C370.7-23,642.6,35.3,800.2,197.6C957.9,360,881.4,415.3,800.2,467.4Z"
            transform="translate(-100, -100) scale(1.2)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* --- Left Content: Headline, Description, Button --- */}
          <div className="lg:w-5/12 text-center lg:text-left order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Discover the World's{" "}
              <span className="text-orange-600">Hidden</span> Wonders
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Find unique travel experiences, from remote mountain villages to
              bustling Asia-Pacific mega-cities. We help you uncover the world
              less traveled to find your ultimate adventure.
            </p>

            {/* Action Button */}
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg shadow-orange-500/50 hover:bg-orange-700 transform hover:scale-[1.02] transition duration-300">
              Plan Your Trip
            </button>

            {/* Subtle airplane icon/graphic below the text, similar to the image */}
            <div className="mt-8 hidden lg:flex justify-center lg:justify-start">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f97316"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 opacity-60"
              >
                <path d="M11 20H8l-2 2h4l2-2h4l2 2h-4l-2-2z" />
                <path d="M22 17L12 5 2 17h20z" />
                <path d="M12 5v12" />
                <path d="M6 13L12 7l6 6" />
              </svg>
            </div>
          </div>

          {/* --- Right Content: Image Cards --- */}
          <div className="lg:w-7/12 relative order-1 lg:order-2 w-full">
            {/* Desktop Layout: Straight grid - one image on left, two stacked on right */}
            <div className="hidden lg:flex items-center gap-6 justify-end">
              {/* Left column - single image */}
              <div className="w-6/12 flex flex-col">
                <div className="relative h-120 rounded-2xl">
                  <ImageCard
                    src="/BG1.jpg"
                    alt="Historic city architecture"
                    className="h-full"
                    priority={true}
                  />
                </div>
              </div>

              {/* Right column - two stacked images */}
              <div className="w-6/12 flex flex-col gap-6">
                <div className="relative h-64 rounded-2xl">
                  <ImageCard
                    src="/BG1.jpg"
                    alt="Scenic mountain landscape"
                    className="h-full"
                  />
                </div>
                <div className="relative h-72 rounded-2xl">
                  <ImageCard
                    src="/BG1.jpg"
                    alt="Ancient Asian temple complex"
                    className="h-full"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout: Text on top of images with full screen height */}
            <div className="lg:hidden flex flex-col min-h-[50vh] justify-center">
              <div className="relative h-48 w-full mb-4">
                <ImageCard
                  src="/BG1.jpg"
                  alt="Historic city architecture"
                  className="h-full"
                  priority={true}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-52">
                  <ImageCard
                    src="/BG1.jpg"
                    alt="Scenic mountain landscape"
                    className="h-full"
                  />
                </div>
                <div className="relative h-52">
                  <ImageCard
                    src="/BG1.jpg"
                    alt="Ancient Asian temple complex"
                    className="h-full"
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
