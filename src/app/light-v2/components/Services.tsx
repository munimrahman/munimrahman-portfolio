"use client";

import { useState } from "react";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      title: "Brand Identity & Strategy",
      description:
        "Craft compelling brand narratives that resonate with your audience. From logo design to comprehensive brand guidelines, I help establish a strong visual identity that sets you apart.",
      metrics: [
        "Brand Guidelines",
        "Logo Design",
        "Visual Identity",
        "Brand Strategy",
      ],
    },
    {
      title: "Web & Product Design",
      description:
        "Design user-centric digital experiences that drive engagement and conversion. Specializing in responsive websites, web applications, and mobile interfaces with a focus on usability.",
      metrics: [
        "UI/UX Design",
        "Responsive Design",
        "Design Systems",
        "Prototyping",
      ],
    },
    {
      title: "Development & Integration",
      description:
        "Transform designs into high-performance websites and applications. Expert in modern frameworks, ensuring seamless functionality, optimal speed, and scalability.",
      metrics: [
        "Front-end Development",
        "CMS Integration",
        "Performance Optimization",
        "API Integration",
      ],
    },
    {
      title: "Ongoing Support & Growth",
      description:
        "Continuous optimization and enhancement of your digital presence. Regular updates, A/B testing, analytics monitoring, and strategic improvements to maximize results.",
      metrics: [
        "Maintenance",
        "Analytics",
        "A/B Testing",
        "Continuous Improvement",
      ],
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Content wrapper with glow */}
      <div className="relative max-w-5xl mx-auto">
        {/* Background glow around content */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[700px] w-[800px] rounded-full bg-purple-200/15 blur-[140px]" />
        </div> */}

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              What I Do
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a1a1a] mb-4">
              Services & Expertise
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Comprehensive design and development services tailored to bring
              your vision to life
            </p>
          </div>

          {/* Services Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1a1a]">
                      {service.title}
                    </h3>
                  </div>
                  <svg
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="mb-6 text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
