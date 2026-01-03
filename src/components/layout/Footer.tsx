import Link from "next/link";
import { Twitter, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full relative mt-16 md:mt-32 pb-12 px-4 md:px-0">
      <div className="container">
        {/* Main Footer Card */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-orange-200/40 dark:border-border/40 px-6 md:px-10 py-8 md:py-12 transition-all duration-500 shadow-2xl shadow-orange-950/3 dark:shadow-none">
          {/* Subtle Background Elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-orange-100/30 dark:bg-primary/5 blur-[100px]"></div>
            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-orange-50/50 dark:bg-accent/5 blur-[100px]"></div>
          </div>

          <div className="relative z-10">
            {/* Middle Section: Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              {/* Brand & Socials */}
              <div className="md:col-span-5 space-y-8">
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-orange tracking-tight leading-none"
                  >
                    Munim Rahman
                  </Link>
                  <p className="text-base md:text-lg text-muted-foreground/80 max-w-sm leading-relaxed font-light mt-3 md:mt-6">
                    Experienced Full-Stack Developer specializing in crafting
                    high-performance, aesthetically pleasing digital
                    experiences.
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-8">
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="md:col-span-3">
                <h3 className="text-xs font-bold tracking-[0.25em] text-foreground/40 uppercase mb-8">
                  Sitemap
                </h3>
                <ul className="flex flex-col gap-4">
                  {["Home", "About", "Work", "Skills", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={
                            item === "Home" ? "/" : `/${item.toLowerCase()}`
                          }
                          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 font-light"
                        >
                          <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300 overflow-hidden opacity-0 group-hover:opacity-100"></span>
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-4">
                <h3 className="text-xs font-bold tracking-[0.25em] text-foreground/40 uppercase mb-8">
                  Say Hello
                </h3>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@munimrahman.com"
                    className="group flex flex-col gap-1 w-fit"
                  >
                    <span className="text-sm text-muted-foreground/60 transition-colors group-hover:text-primary/60 font-medium">
                      Email Me
                    </span>
                    <span className="text-xl md:text-2xl text-foreground font-light border-b border-orange-200/50 dark:border-border/30 pb-1 group-hover:border-primary transition-all flex items-center gap-2">
                      hello@munimrahman.com
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </span>
                  </a>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground/60 font-medium">
                      Location
                    </span>
                    <div className="flex items-center gap-2 text-foreground font-light">
                      <MapPin className="w-4 h-4 text-primary/60" />
                      <span className="text-xl">Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-orange-200/20 dark:border-border/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground/50 tracking-wide">
              <p>
                &copy; {new Date().getFullYear()} Munim Rahman. Product of
                Passion.
              </p>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-8 h-[1px] bg-orange-200/50 dark:bg-border/30 group-hover:bg-primary transition-colors"></span>
                  <span>Crafted with Precision</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-8 h-[1px] bg-orange-200/50 dark:bg-border/30 group-hover:bg-primary transition-colors"></span>
                  <span>Built with Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
