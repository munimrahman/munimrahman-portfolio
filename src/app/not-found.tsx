"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Briefcase, Layers, Mail, ArrowLeft } from "lucide-react";
import ButtonPrimary from "@/components/ui/button/button-primary";
import ButtonSecondary from "@/components/ui/button/button-secondary";

export default function NotFound() {
  const links = [
    {
      label: "Go back to the homepage",
      href: "/",
      icon: Home,
      description: "Start from the beginning",
    },
    {
      label: "View my services",
      href: "/#services",
      icon: Briefcase,
      description: "See how I can help you",
    },
    {
      label: "Check out recent projects",
      href: "/projects",
      icon: Layers,
      description: "Explore my latest work",
    },
    {
      label: "Contact me directly",
      href: "/contact",
      icon: Mail,
      description: "Let's start a conversation",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4 py-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-orange-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-125 h-125 bg-amber-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Animated 404 Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-[12rem] md:text-[18rem] font-bold leading-none select-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-orange-500/20 to-orange-500/5 dark:from-orange-500/15 dark:to-orange-500/0">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-background/80 backdrop-blur-sm border border-orange-500/20 px-6 py-2 rounded-full shadow-2xl shadow-orange-500/10"
            >
              <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">
                Page Not Found
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Oops! You seem to be <span className="text-orange-500">lost</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Looks like this page doesn&apos;t exist or has been moved. But
            don&apos;t worry — I can help you find your way back.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/40 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-orange-500 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Home Button CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonPrimary href="/">
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </ButtonPrimary>
          <ButtonSecondary href="/contact">Report a Bug</ButtonSecondary>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] -z-20 pointer-events-none" />
    </div>
  );
}
