import Image from "next/image";

export interface CaseStudyCardProps {
  title: string;
  description: string;
  engagement: string;
  userSatisfaction: string;
  image: string;
  cardBackground: string;
}

export function CaseStudyCard({
  title,
  description,
  engagement,
  userSatisfaction,
  image,
  cardBackground,
}: CaseStudyCardProps) {
  return (
    <div
      className="rounded-4xl px-10 py-14 max-w-6xl mx-auto overflow-hidden text-card-foreground"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col h-full justify-between gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-medium text-foreground tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full w-fit text-sm font-medium hover:opacity-90 transition-opacity">
            View case study
          </button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10">
          <div className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-sm">
            <Image
              src={image}
              alt={`${title} Illustration`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-x-20 gap-y-8">
            <div className="space-y-4">
              <span className="text-muted-foreground text-lg block">
                Engagement
              </span>
              <span className="text-4xl md:text-5xl font-medium text-foreground">
                {engagement}
              </span>
            </div>
            <div className="space-y-4">
              <span className="text-muted-foreground text-lg block">
                User Satisfaction
              </span>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-medium text-foreground">
                  {userSatisfaction}
                </span>
                <span className="text-3xl md:text-4xl font-medium text-foreground ml-0.5">
                  *
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
