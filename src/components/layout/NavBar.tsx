import Image from "next/image";
import { ThemeToggle } from "../ui/theme-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container bg-accent/40 dark:bg-accent/10 backdrop-blur-lg p-4 rounded-lg fixed top-4 left-0 right-0 z-50">
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
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
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
