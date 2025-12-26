import Image from "next/image";

export function ProjectShowcase() {
  const projects = [
    {
      title: "Minimal Portfolio",
      category: "Web Design",
      image: "/placeholder.svg?key=you72",
      color: "bg-blue-100/30",
    },
    {
      title: "E-Commerce Platform",
      category: "UI/UX Design",
      image: "/placeholder.svg?key=8g84l",
      color: "bg-purple-100/30",
    },
    {
      title: "Mobile Banking App",
      category: "Product Design",
      image: "/placeholder.svg?key=9b4wp",
      color: "bg-pink-100/30",
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Content wrapper with glow */}
      <div className="relative max-w-7xl mx-auto">
        {/* Background glow around content */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[600px] w-[900px] rounded-full bg-blue-200/15 blur-[140px]" />
        </div> */}

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Featured Work
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a1a1a] mb-4">
              Selected Projects
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore a curated collection of digital experiences crafted with
              precision and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative h-64 overflow-hidden ${project.color}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                    {project.title}
                  </h3>
                  <button className="group/btn -ml-4 text-gray-600 hover:text-[#1a1a1a] p-0 h-auto">
                    View Project
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="h-12 rounded-full border-gray-200 px-8 hover:bg-gray-50 transition-all bg-white">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
