interface Props {
  className?: string;
}

const ServicesCTASection = ({ className }: Props) => {
  return (
    <section className={className}>
      <div className="container px-4 md:px-6 lg:px-0">
        <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 md:-mr-32 md:-mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white opacity-5 rounded-full -ml-16 -mb-16 md:-ml-24 md:-mb-24"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-4 md:mb-5 lg:mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-7 lg:mb-8 max-w-2xl mx-auto px-2">
              Let&apos;s discuss how our AI automation services can help you
              achieve your business goals. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold uppercase hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold uppercase hover:bg-white hover:text-primary transition-colors cursor-pointer w-full sm:w-auto">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
