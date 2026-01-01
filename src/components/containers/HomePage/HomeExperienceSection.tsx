import SectionHeader from "../Shared/SectionHeader";

interface ExperienceItem {
  id: number;
  years: string;
  title: string;
  company: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    years: "2018-2021",
    title: "Lead Designer",
    company: "Apple",
  },
  {
    id: 2,
    years: "2022-2023",
    title: "Product Designer",
    company: "Spotify",
  },
  {
    id: 3,
    years: "2023-2025",
    title: "UXUI Designer",
    company: "Amazon",
  },
];

const HomeExperienceSection = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="container">
        <SectionHeader
          name="Experience"
          title="My Work Experience"
          description="A timeline of my professional journey."
        />

        <div className="flex flex-col">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="group flex justify-between items-end md:grid md:grid-cols-3 md:items-center py-4 md:py-10 border-b border-border border-dashed transition-all hover:bg-muted/50 px-4 md:px-0"
            >
              {/* Year - Right on mobile, Left on desktop */}
              <div className="order-2 md:order-1 font-medium text-orange-600 dark:text-orange-400 text-xs md:text-base md:text-foreground/80 md:pl-4 text-right md:text-left">
                {item.years}
              </div>

              {/* Title & Company Group - Left on mobile, Grid items on desktop */}
              <div className="order-1 md:contents">
                {/* Primary Info (Company on Mobile, Title on Desktop) */}
                <div className="md:order-2 md:text-center text-left font-bold md:font-semibold text-lg text-foreground mb-1 md:mb-0">
                  <span className="md:hidden">{item.company}</span>
                  <span className="max-md:hidden">{item.title}</span>
                </div>

                {/* Secondary Info (Title on Mobile, Company on Desktop) */}
                <div className="md:order-3 md:text-right text-left text-sm md:text-base font-medium md:font-semibold text-muted-foreground md:text-foreground md:pr-4">
                  <span className="md:hidden">{item.title}</span>
                  <span className="max-md:hidden">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeExperienceSection;
