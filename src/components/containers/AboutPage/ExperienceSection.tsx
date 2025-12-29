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

const ExperienceSection = ({ className }: { className?: string }) => {
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
              className="group flex flex-col md:grid md:grid-cols-3 items-center py-8 border-b border-border border-dashed transition-colors hover:bg-muted/30"
            >
              <div className="w-full md:text-left text-center font-medium text-foreground/80 md:pl-4">
                {item.years}
              </div>
              <div className="w-full text-center font-semibold text-lg text-foreground">
                {item.title}
              </div>
              <div className="w-full md:text-right text-center font-semibold text-foreground md:pr-4">
                {item.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
