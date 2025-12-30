import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types";
import SectionHeader from "../Shared/SectionHeader";
import { homePageSkillData } from "@/assets/icons/techIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props extends ComponentProps {}

const SkillSection = ({ className }: Props) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <SectionHeader
          name="Skills"
          title="My Tech Stack"
          description="I specialize in crafting fast, SEO-ready frontend experiences while understanding backend systems, APIs, and real-world production workflows."
        />

        {/* Skill Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {homePageSkillData.map((skill) => (
            <div key={skill.id}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-4 bg-background rounded-lg h-32 w-32 flex items-center justify-center">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
