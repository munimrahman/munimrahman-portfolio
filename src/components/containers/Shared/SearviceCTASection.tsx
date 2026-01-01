interface Props {
  className?: string;
}

const ServicesCTASection = ({ className }: Props) => {
  return (
    <section className={className}>
      <div className="container px-4 md:px-6 lg:px-0">
        <div className="bg-muted rounded-2xl md:rounded-3xl px-4 py-8 md:p-12 lg:p-16 text-center relative overflow-hidden border border-border/50">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-orange-500/10 rounded-full -mr-20 -mt-20 md:-mr-32 md:-mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-orange-500/10 rounded-full -ml-16 -mb-16 md:-ml-24 md:-mb-24"></div>

          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-foreground uppercase mb-4 md:mb-5 lg:mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-7 lg:mb-8 max-w-2xl mx-auto px-2">
              Let&apos;s discuss how our AI automation services can help you
              achieve your business goals. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button className="bg-primary text-primary-foreground px-6 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-base font-medium hover:opacity-90 transition-all cursor-pointer w-full sm:w-auto">
                Book Free Consultation
              </button>
              <button className="border border-border text-foreground px-6 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-background transition-all cursor-pointer w-full sm:w-auto">
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
