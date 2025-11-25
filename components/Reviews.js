import React from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      quote:
        "Lumaro transformed our brand visibility. The clarity and structure they brought to our digital strategy were unparalleled.",
      name: "D. Retlareng",
      title: "Marketing Director, Fancy Corp.",
      rating: 5,
    },
    {
      quote:
        "The website build was fast, secure, and beautiful. They nailed the minimalist aesthetic while delivering enterprise performance.",
      name: "O. Diale",
      title: "Director, Tagline Tattoo Studio",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 px-4 sm:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#63564d]/95 via-[#63564d]/90 to-[#4a3f38]/95"></div>
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-font text-3xl sm:text-4xl font-serif font-bold text-center text-white mb-4">
          Client Voices
        </h2>
        <p className="text-base sm:text-lg text-white/90 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          Don't just take our word for it - hear what our clients have to say
          about their experience working with us.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#dca37c] text-[#dca37c]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-serif italic text-[#63564d]/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#bcada3]/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#bcada3] to-[#dca37c] flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-[#63564d]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#63564d]/70 mt-0.5">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a CTA or trust badge */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/80 text-sm sm:text-base">
            Join our growing list of satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}
