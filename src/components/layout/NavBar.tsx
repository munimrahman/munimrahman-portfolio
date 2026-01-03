"use client";

import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [activeRect, setActiveRect] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateActiveRect = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector(
        '[data-active="true"]'
      ) as HTMLElement;
      if (activeLink) {
        setActiveRect({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      }
    };

    updateActiveRect();
    window.addEventListener("resize", updateActiveRect);
    return () => window.removeEventListener("resize", updateActiveRect);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container px-3 py-2 md:px-4 md:py-3 rounded-lg relative">
        <div className="absolute inset-0 bg-accent/20 dark:bg-accent/10 backdrop-blur-lg rounded-lg -z-10" />

        <div className="flex justify-between items-center relative">
          <div className="flex items-center gap-3">
            {/* <figure className="rounded-full overflow-hidden border border-orange-100 dark:border-orange-500/20 shrink-0">
              <Image
                src="/demo-pp.jpg"
                alt="Munim Rahman Avatar"
                width={48}
                height={48}
                className="w-11 h-11 md:w-12 md:h-12 object-cover"
              />
              <figcaption className="sr-only">Munim Rahman Avatar</figcaption>
            </figure> */}
            <div className="flex flex-col gap-0.5">
              <Link href="/" className="group flex items-center gap-1">
                <span className="text-xl md:text-2xl filter drop-shadow-sm -ml-1">
                  ✌️
                </span>
                <h1 className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-500 tracking-tight leading-none">
                  munim
                </h1>
              </Link>
              <div className="flex items-center gap-2 px-0.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground/80 tracking-wide">
                  Available for Work
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ul
              ref={navRef}
              className="hidden md:flex items-center gap-1 relative"
            >
              {/* Manual Indicator */}
              {activeRect.width > 0 && (
                <motion.div
                  className="absolute top-0 bottom-0 bg-orange-100 dark:bg-orange-500/10 rounded -z-10"
                  initial={false}
                  animate={{
                    left: activeRect.left,
                    width: activeRect.width,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.5,
                  }}
                />
              )}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-active={isActive}
                      className={cn(
                        "px-4 py-2 font-medium rounded transition-colors block whitespace-nowrap",
                        isActive
                          ? "text-orange-600 dark:text-orange-400"
                          : "hover:text-foreground text-foreground/70"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* <ButtonPrimary
              href="/contact"
              className="hidden md:block bg-primary text-primary-foreground px-4 md:px-6 py-2.5 md:py-2 rounded-full font-medium"
            >
              Download CV
            </ButtonPrimary> */}
            <ThemeToggle />
            {/* Mobile Menu Toggle */}
            <MenuToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "z-100 relative",
                isMobileMenuOpen ? "text-foreground" : "text-foreground"
              )}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default NavBar;
