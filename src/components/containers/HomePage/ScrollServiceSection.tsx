const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Boost your website's visibility and organic traffic with data-driven SEO strategies that deliver measurable results.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
        />
      </svg>
    ),
  },
  {
    title: "Pay Per Click Advertising",
    description:
      "Maximize ROI with targeted PPC campaigns across Google Ads, Facebook, and other platforms for instant traffic.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description:
      "Build brand awareness and engage your audience with strategic content creation and community management across all platforms.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Local SEO Optimization",
    description:
      "Dominate local search results and attract nearby customers with optimized Google Business listings and local citations.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce SEO",
    description:
      "Drive more sales with specialized e-commerce optimization for product pages, categories, and shopping campaigns.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m0-6v.01"
        />
      </svg>
    ),
  },
  {
    title: "App Store Optimization",
    description:
      "Increase app downloads and visibility with optimized keywords, screenshots, and descriptions for mobile app stores.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 9l3 3 3-3"
        />
      </svg>
    ),
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Transform visitors into customers with strategic A/B testing, user experience improvements, and conversion funnel optimization.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8l2 2-2 2"
        />
      </svg>
    ),
  },
  {
    title: "Content Marketing Strategy",
    description:
      "Engage your audience with compelling content that builds authority, drives traffic, and converts prospects into customers.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Email Marketing Automation",
    description:
      "Nurture leads and retain customers with personalized email campaigns that drive engagement and repeat business.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11l3-3m0 0l3 3m-3-3v8"
        />
      </svg>
    ),
  },
  {
    title: "Web Analytics & Reporting",
    description:
      "Make data-driven decisions with comprehensive analytics tracking, performance monitoring, and detailed monthly reporting dashboards.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-600 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const ScrollServiceSection = () => {
  return (
    <div className="py-20 container">
      <div className="flex gap-8">
        <div className="basis-[45%] space-y-10 sticky top-20 self-start">
          <h2 className="text-foreground text-5xl font-lustria">
            Most products don’t fail because of ideas they fail because of
            execution
          </h2>

          <div className="bg-orange-50 w-fit py-6 px-10 rounded-2xl relative overflow-hidden border border-orange-100">
            {/* Background SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="165"
              viewBox="0 0 39 36"
              fill="none"
              className="absolute bottom-0 right-10 opacity-10 z-0"
              style={{ transform: "translate(20px, 20px)" }}
            >
              <path
                d="M37.9543 0.263803C37.6207 -0.00501683 37.1599 -0.074622 36.7566 0.0837895L0.754034 14.4848C0.310002 14.6624 0.0123802 15.0873 0.000379321 15.5673C-0.0116216 16.0473 0.261998 16.4866 0.69883 16.6882L12.0013 21.9062L37.2031 1.19747L16.8016 24.1215V36L25.3174 28.053L31.8987 31.0892C32.0595 31.1612 32.2323 31.1996 32.4027 31.1996C32.5947 31.1996 32.7892 31.1516 32.962 31.0604C33.2956 30.8852 33.5236 30.566 33.586 30.1964L38.3864 1.39428C38.456 0.969454 38.2928 0.535022 37.9543 0.263803Z"
                className="fill-orange-500/10"
              />
            </svg>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="36"
                  viewBox="0 0 39 36"
                  fill="none"
                >
                  <path
                    d="M37.9543 0.263803C37.6207 -0.00501683 37.1599 -0.074622 36.7566 0.0837895L0.754034 14.4848C0.310002 14.6624 0.0123802 15.0873 0.000379321 15.5673C-0.0116216 16.0473 0.261998 16.4866 0.69883 16.6882L12.0013 21.9062L37.2031 1.19747L16.8016 24.1215V36L25.3174 28.053L31.8987 31.0892C32.0595 31.1612 32.2323 31.1996 32.4027 31.1996C32.5947 31.1996 32.7892 31.1516 32.962 31.0604C33.2956 30.8852 33.5236 30.566 33.586 30.1964L38.3864 1.39428C38.456 0.969454 38.2928 0.535022 37.9543 0.263803Z"
                    className="fill-orange-600"
                  />
                </svg>
              </figure>

              <div className="space-y-4">
                <p className="text-3xl font-semibold text-foreground">
                  Fuel Your Digital-First Idea
                </p>
                <p className="text-lg text-muted-foreground">
                  With 1600+ Transformation Experts
                </p>
              </div>

              <button className="bg-orange-600 text-white px-6 py-3 rounded-full mt-5 hover:bg-orange-700 transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/20">
                Grow With Us
              </button>
            </div>
          </div>
        </div>

        {/* scroll section */}
        <div className="basis-[55%]">
          {services.map((item, index) => (
            <div
              key={index}
              className="hover:bg-orange-50/50 transition-all duration-500 cursor-pointer first:border-t first:border-t-orange-200 border-b border-b-orange-200 py-10 hover:px-4 flex items-start gap-4 group"
            >
              <figure>{item.icon}</figure>
              <div className="space-y-4">
                <h3 className="text-foreground text-3xl font-semibold leading-8! group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xl">
                  {item.description}
                </p>
                <p className="text-orange-600 text-lg">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollServiceSection;
