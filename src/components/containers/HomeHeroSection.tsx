import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="container -mt-22 relative flex flex-col min-h-screen items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-accent/30 dark:bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-card shadow-lg overflow-hidden">
            <Image
              src="/demo-pp.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-lustria text-foreground mb-6 leading-tight">
          Your Design Partner
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-10 leading-relaxed">
          Over a decade of experience in building{" "}
          <br className="hidden md:block" />
          exceptional websites and digital products.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
            <span className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></span>
            Use this Template
          </button>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
          <div className="font-bold text-xl">FIGMA</div>
          <div className="font-bold text-xl">NOTION</div>
          <div className="font-bold text-xl">FRAMER</div>
          <div className="font-bold text-xl">WEBFLOW</div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
