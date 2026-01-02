"use client";

import Image from "next/image";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";
import ButtonPrimary from "../ui/button/button-primary";

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
      <div className="container p-2 md:p-4 rounded-lg relative">
        <div className="absolute inset-0 bg-accent/20 dark:bg-accent/10 backdrop-blur-lg rounded-lg -z-10" />

        <div className="flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Link href="/">
              <h1 className="text-2xl font-semibold">munim</h1>
            </Link>
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
            <ButtonPrimary
              href="/contact"
              className="hidden md:block bg-primary text-primary-foreground px-4 md:px-6 py-2.5 md:py-2 rounded-full font-medium"
            >
              Start a Project
            </ButtonPrimary>
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
