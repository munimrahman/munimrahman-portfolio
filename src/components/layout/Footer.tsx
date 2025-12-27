import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container relative mt-32 mb-8 z-40">
      <div className="relative overflow-hidden rounded-3xl bg-[#FFF4E6] dark:bg-card border border-orange-200/60 dark:border-border/40 px-6 py-20 text-foreground transition-colors duration-300 shadow-xl shadow-orange-500/5 dark:shadow-none">
        {/* Warm glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 dark:bg-accent/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Top */}
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Let&apos;s</p>

              <h2 className="font-lustria text-4xl md:text-5xl text-foreground">
                Get in <span className="italic text-primary/90">touch</span>
              </h2>

              <a
                href="mailto:hello@munimrahman.com"
                className="mt-6 inline-block w-fit border-b border-orange-300 dark:border-border pb-1 text-lg text-muted-foreground hover:text-foreground transition hover:border-primary"
              >
                hello@munimrahman.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 dark:border-border text-muted-foreground transition hover:border-primary/60 hover:bg-white/80 dark:hover:bg-accent hover:text-primary bg-white/40 dark:bg-background/20"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-orange-200 dark:bg-border/50"></div>

          {/* Bottom */}
          <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>Powered by — Next.js</p>

            <div className="flex gap-6">
              <Link href="#" className="transition hover:text-foreground">
                Style Guide
              </Link>
              <Link href="#" className="transition hover:text-foreground">
                Licenses
              </Link>
              <Link href="#" className="transition hover:text-foreground">
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
