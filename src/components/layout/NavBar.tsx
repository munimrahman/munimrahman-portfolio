"use client";

import Image from "next/image";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="container bg-accent/20 dark:bg-accent/10 backdrop-blur-lg p-4 rounded-lg fixed top-4 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
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
        {/* <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul> */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 font-medium rounded transition-colors",
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-orange-100 dark:bg-orange-500/10 rounded -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
            Start a Project
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
