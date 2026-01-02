"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface ButtonSecondaryProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  href?: string;
}

const ButtonSecondary = ({
  children,
  className,
  href,
  ...props
}: ButtonSecondaryProps) => {
  const styles = cn(
    "border border-border text-xs md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-background transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
