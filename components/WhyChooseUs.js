import React from "react";
import { Target, Users, Award, TrendingUp, Shield, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "We develop targeted strategies that align with your business goals and deliver measurable results.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "Your success is our success. We work as an extension of your team, not just a vendor.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "Years of experience delivering exceptional results for clients across diverse industries.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Driven",
      description:
        "Every decision we make is focused on driving sustainable growth for your business.",
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description:
        "Industry-leading knowledge and best practices ensure your project is in capable hands.",
    },
    {
      icon: Zap,
      title: "Agile Execution",
      description:
        "Fast turnaround times without compromising on quality or attention to detail.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-center text-[#63564d] mb-4">
          The Lumaro{" "}
          <span className="text-[#e0a07a] text-font bg-clip-text">
            Advantage
          </span>
        </h2>
        <p className="text-font text-lg sm:text-lg text-[#63564d] text-center max-w-2xl mx-auto mb-16">
          We prioritize quality over quantity, building partnerships and
          relationships designed for long-term strategic success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-[#e9a46a]/10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#63564d]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[#63564d]/10 flex items-center justify-center mb-5 group-hover:bg-[#63564d] transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#e0a07a] group-hover:text-[#e0a07a] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#63564d] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-[#63564d]/80 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
