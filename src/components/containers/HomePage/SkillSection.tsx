import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import SectionHeader from "../Shared/SectionHeader";
import { homePageSkillData } from "@/assets/icons/techIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props extends ComponentProps<"section"> {}

const SkillSection = ({ className }: Props) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <SectionHeader
          name="Skills"
          title="My Tech Stack"
          description="Technologies I use daily to build production ready applications"
        />

        {/* Skill Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {homePageSkillData.map((skill) => (
            <div key={skill.id}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 md:p-4 bg-background rounded-md h-16 md:h-28 w-16 md:w-28 flex items-center justify-center">
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
