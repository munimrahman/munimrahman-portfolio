import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      {/* Soft background glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        <div className="h-[600px] w-[800px] rounded-full bg-orange-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Avatar and Badge */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-sm">
            <img
              src="https://i.pravatar.cc/150?u=design"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1 text-sm font-medium shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Pro Expert
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-[#1a1a1a] mb-6">
          Your Design Partner
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
          Over a decade of experience in building exceptional websites and
          digital products
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <button className="h-12 rounded-full bg-[#1a1a1a] px-8 text-white hover:bg-[#333] transition-all">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-200" />
            Use this Template
          </button>
          <Link
            href="/light"
            className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
          >
            Light Mood
          </Link>
        </div>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <Image src="/framer-logo.png" alt="Framer" width={32} height={32} />
          <Image src="/figma-logo.png" alt="Figma" width={32} height={32} />
          <Image src="/vwo-logo.jpg" alt="VWO" width={60} height={20} />
          <div className="h-8 w-8 rounded bg-gray-900 flex items-center justify-center text-[10px] text-white font-bold">
            fa/
          </div>
          <Image src="/notion-logo.png" alt="Notion" width={28} height={28} />
          <Image
            src="/customer-io-logo.png"
            alt="Customer.io"
            width={32}
            height={32}
          />
          <Image src="/webflow-logo.png" alt="Webflow" width={32} height={32} />
        </div>
      </div>
    </section>
  );
}
