"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/20 backdrop-blur-sm z-55 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-background/95 backdrop-blur-xl z-60 md:hidden border-l border-border flex flex-col p-6 shadow-2xl"
          >
            <div className="flex-1 flex flex-col justify-center gap-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "text-3xl font-semibold transition-all hover:pl-2",
                          isActive
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-foreground/70 hover:text-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-border"
              >
                <button
                  onClick={onClose}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Start a Project
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
