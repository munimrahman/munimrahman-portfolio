import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonPrimaryProps = ComponentProps<"button"> &
  ComponentProps<"a"> & {
    children: React.ReactNode;
    className?: string;
    href?: string;
  };

const ButtonPrimary = ({
  children,
  className,
  href,
  ...props
}: ButtonPrimaryProps) => {
  const styles = cn(
    "bg-primary text-xs md:text-base text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer whitespace-nowrap",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
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

export default ButtonPrimary;
