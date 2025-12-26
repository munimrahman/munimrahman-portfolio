import Image from "next/image";
import { Hero } from "./components/hero";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Services } from "./components/Services";

export default function Page() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <nav className="bg-orange-200/40 backdrop-blur-lg max-w-7xl p-4 mx-auto rounded-lg fixed top-4 left-0 right-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-semibold">munim</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-[#0D0D0D] transition-all">
              Start a Project
            </button>
          </div>
        </div>
      </nav>
      <Hero />
      <ProjectShowcase />
      <Services />
    </main>
  );
}
