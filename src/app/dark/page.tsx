import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dark = () => {
  return (
    <>
      <div className="bg-[#0f0f0e] min-h-screen font-sans text-[#eae7e2]">
        <section className="relative flex flex-col items-center justify-center pt-24 pb-20 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-150 h-100 
        bg-orange-400/10 
        blur-[140px] 
        rounded-full"
            ></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full border border-white/10 shadow-xl overflow-hidden">
                <Image
                  src="/demo-pp.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Your Design Partner
            </h1>

            <p className="text-lg md:text-xl text-[#b8b5b0] font-light max-w-2xl mb-10 leading-relaxed">
              Over a decade of experience in building{" "}
              <br className="hidden md:block" />
              exceptional websites and digital products.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
              <button
                className="bg-orange-400 text-black px-8 py-4 rounded-full font-medium 
          flex items-center gap-2 hover:bg-orange-300 transition-all"
              >
                <span className="w-2 h-2 bg-black/80 rounded-full animate-pulse"></span>
                Use this Template
              </button>
              <Link
                href="/light-v2"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              >
                Light Mood V2
              </Link>

              <Link
                href="/light"
                className="bg-transparent text-[#eae7e2] px-8 py-4 rounded-full 
          font-medium border border-white/15 
          hover:bg-white/5 transition-all"
              >
                Light Mood
              </Link>
            </div>

            <div
              className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 
        opacity-40 grayscale"
            >
              <div className="font-bold text-xl">FIGMA</div>
              <div className="font-bold text-xl">NOTION</div>
              <div className="font-bold text-xl">FRAMER</div>
              <div className="font-bold text-xl">WEBFLOW</div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              How I can help you
            </h2>
            <div className="h-1 w-20 bg-orange-400/40 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#151514]/70 backdrop-blur p-8 rounded-3xl 
        border border-white/10 hover:border-orange-400/40 
        transition-all hover:shadow-2xl"
            >
              <div
                className="w-12 h-12 bg-orange-400/10 rounded-2xl 
          flex items-center justify-center mb-6"
              >
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-[#b8b5b0] leading-relaxed">
                Modern and clean interfaces that engage your users.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dark;
