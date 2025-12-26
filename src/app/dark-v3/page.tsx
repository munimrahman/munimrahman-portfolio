import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyCard,
  CaseStudyCardProps,
} from "../light-v3/components/CaseStudyCard";

const caseStudies: CaseStudyCardProps[] = [
  {
    title: "Budget Planner Finance App",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-1.avif",
    cardBackground: "#1c1917", // Stone-900 for dark mode
  },
  {
    title: "Digital Product Design Solution",
    description:
      "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies. ",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-2.avif",
    cardBackground: "#292524", // Stone-800
  },
  {
    title: "Bitbo - Bitcoin Stats & Data",
    description:
      "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-3.avif",
    cardBackground: "#1c1917",
  },
  {
    title: "UI Design for Internet Sharing App",
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-4.avif",
    cardBackground: "#292524",
  },
];

const DarkV3 = () => {
  return (
    <div className="dark">
      <div className="bg-background min-h-screen text-foreground">
        <nav className="bg-accent/10 backdrop-blur-lg max-w-7xl p-4 mx-auto rounded-lg fixed top-4 left-0 right-0 z-50 border border-border">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-semibold">munim</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
                Start a Project
              </button>
            </div>
          </div>
        </nav>

        <section className="relative flex flex-col h-screen items-center justify-center pt-24 pb-20 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-orange-500/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full border-4 border-muted shadow-lg overflow-hidden">
                <Image
                  src="/demo-pp.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-lustria text-foreground mb-6 leading-tight">
              Your Design Partner
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-10 leading-relaxed">
              Over a decade of experience in building{" "}
              <br className="hidden md:block" />
              exceptional websites and digital products.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                Use this Template
              </button>
              <Link
                href="/light-v2"
                className="bg-transparent text-foreground px-8 py-4 rounded-full font-medium border border-border hover:bg-muted transition-all shadow-sm no-underline"
              >
                Light Mood V2
              </Link>
              <Link
                href="/dark-v3"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:opacity-90 no-underline"
              >
                Dark Mood V3
              </Link>
            </div>

            <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
              <div className="font-bold text-xl">FIGMA</div>
              <div className="font-bold text-xl">NOTION</div>
              <div className="font-bold text-xl">FRAMER</div>
              <div className="font-bold text-xl">WEBFLOW</div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lustria mb-4">
              How I can help you
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <svg
                  className="w-6 h-6 text-primary group-hover:text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern and clean interfaces that engage your users and keep them
                coming back.
              </p>
            </div>

            <div className="bg-card/30 p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <svg
                  className="w-6 h-6 text-primary group-hover:text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-performance websites built with the latest technologies and
                best practices.
              </p>
            </div>

            <div className="bg-card/30 p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <svg
                  className="w-6 h-6 text-primary group-hover:text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unique branding that helps your business stand out from the
                competition.
              </p>
            </div>
          </div>
        </section>

        {/* case studies section */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lustria mb-4">
              Case Studies
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                engagement={caseStudy.engagement}
                userSatisfaction={caseStudy.userSatisfaction}
                image={caseStudy.image}
                cardBackground={caseStudy.cardBackground}
              />
            ))}
          </div>
        </section>

        {/* About section */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lustria mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="text-center">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Over a decade of experience in building exceptional websites and
              digital{" "}
              <Link
                href="#"
                className="underline text-primary hover:opacity-90 transition-opacity"
              >
                products
              </Link>
              . I have a passion for creating user-friendly and visually
              appealing interfaces that help businesses thrive. I am committed
              to delivering high-quality work that exceeds expectations and
              exceeds expectations. I am a team player and enjoy working with
              others to create innovative and successful projects. I am a
              self-starter and enjoy taking on new challenges and learning new
              skills. I am a problem solver and enjoy finding creative solutions
              to complex problems. I am a team player and enjoy working with
              others to create innovative and successful projects. I am a team
              player and enjoy working with others to create innovative and
              successful projects. I am a team player and enjoy working with
              others to create innovative and successful projects. I am a team
              player and enjoy working with others to create innovative and
              successful projects.
            </p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-lustria text-foreground mb-2">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground">
                  Selected work from the last few years.
                </p>
              </div>
              <button className="text-foreground font-semibold border-b-2 border-primary pb-1 hover:text-primary hover:border-primary transition-all">
                View all work
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6 bg-muted aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Project 1"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-lustria mb-2">Modern Dashboard</h3>
                <p className="text-muted-foreground">UI Design • 2024</p>
              </div>

              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6 bg-muted aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Project 2"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-lustria mb-2">
                  E-commerce Platform
                </h3>
                <p className="text-muted-foreground">Development • 2023</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DarkV3;
