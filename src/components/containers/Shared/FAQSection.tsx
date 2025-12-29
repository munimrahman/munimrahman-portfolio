"use client";

import { ComponentProps, FAQItem } from "@/types";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Props extends ComponentProps {
  faqs: FAQItem[];
}

const FAQSection = ({ className, faqs }: Props) => {
  const data = faqs;

  const [openAccordionItem, setOpenAccordionItem] = useState<string>();
  return (
    <section className={className}>
      <div className="container">
        <SectionHeader
          name="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about my services."
        />

        <div className="flex flex-col gap-10 lg:gap-20 max-w-5xl mx-auto">
          <Accordion
            type="single"
            collapsible
            value={openAccordionItem}
            onValueChange={setOpenAccordionItem}
            className="w-full"
          >
            {data.map((item, ind) => (
              <AccordionItem
                key={ind}
                value={`${item?.question}${ind}`}
                className=""
              >
                <AccordionTrigger
                  //   customIcon={(isOpen) =>
                  //     isOpen ? (
                  //       <Minus className="text-muted-foreground pointer-events-none size-5 shrink-0 transition-all duration-200" />
                  //     ) : (
                  //       <Plus className="text-muted-foreground pointer-events-none size-5 shrink-0 transition-all duration-200" />
                  //     )
                  //   }
                  className={`lg:text-xl font-medium hover:no-underline cursor-pointer ${
                    ind !== 0
                      ? "py-5 md:py-6 lg:py-[30px]"
                      : "pb-5 md:pb-6 lg:pb-[30px]"
                  }`}
                >
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-creato text-[clamp(14px,3.6vw,18px)]/[160%] font-normal mb-6">
                    {item?.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
