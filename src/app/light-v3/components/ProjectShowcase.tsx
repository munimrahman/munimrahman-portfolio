import Image from "next/image";

export function ProjectShowcase() {
  const projects = [
    {
      title: "Minimal Portfolio",
      category: "Web Design",
      image: "/placeholder.svg?key=you72",
      color: "bg-chart-2/20",
    },
    {
      title: "E-Commerce Platform",
      category: "UI/UX Design",
      image: "/placeholder.svg?key=8g84l",
      color: "bg-accent/30",
    },
    {
      title: "Mobile Banking App",
      category: "Product Design",
      image: "/placeholder.svg?key=9b4wp",
      color: "bg-muted",
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Content wrapper with glow */}
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm mb-6 text-card-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              featured Work
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-4">
              Selected Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore a curated collection of digital experiences crafted with
              precision and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {project.title}
                  </h3>
                  <button className="group/btn -ml-4 text-muted-foreground hover:text-primary p-0 h-auto flex items-center transition-colors">
                    <span className="ml-4">View Project</span>
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
            <button className="h-12 rounded-full border border-border px-8 hover:bg-muted transition-all bg-card text-card-foreground">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
