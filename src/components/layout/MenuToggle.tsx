import React from "react";
import { motion } from "motion/react";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuToggle = ({ isOpen, onClick, className = "" }: MenuToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-5">
        <motion.span
          className="absolute left-0 w-full h-0.5 bg-current rounded-full"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-0 top-2.25 w-full h-0.5 bg-current rounded-full"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-0 top-4.5 w-full h-0.5 bg-current rounded-full"
          animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
};

export default MenuToggle;
