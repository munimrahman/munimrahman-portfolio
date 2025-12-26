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
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm mb-6 text-card-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              What I Do
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-4">
              Services & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive design and development services tailored to bring
              your vision to life
            </p>
          </div>

          {/* Services Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <svg
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
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
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="mb-6 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
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
