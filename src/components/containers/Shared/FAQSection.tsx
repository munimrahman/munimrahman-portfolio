"use client";

import { FAQItem } from "@/types";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentProps, useState } from "react";

interface Props extends ComponentProps<"section"> {
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
                  className={`lg:text-lg text-primary font-medium hover:no-underline cursor-pointer ${
                    ind !== 0
                      ? "py-5 md:py-6 lg:py-7.5"
                      : "pb-5 md:pb-6 lg:pb-7.5"
                  }`}
                >
                  <h3 className="text-lg text-foreground font-medium">
                    {item?.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground font-normal mb-6">
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
