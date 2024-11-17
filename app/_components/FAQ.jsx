import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-xl font-medium pb-3">- FAQ</h2>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight md:px-10">
          <span>Questions?</span> Look Here
        </h1>
      </div>
      {/* *********************** */}
      <div className="pt-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Book and Appointment Using the App?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae incidunt saepe beatae et libero numquam laudantium
              tenetur? Reiciendis, repellendus odio?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Book and Appointment Using the App?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae incidunt saepe beatae et libero numquam laudantium
              tenetur? Reiciendis, repellendus odio?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Book and Appointment Using the App?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae incidunt saepe beatae et libero numquam laudantium
              tenetur? Reiciendis, repellendus odio?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Book and Appointment Using the App?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae incidunt saepe beatae et libero numquam laudantium
              tenetur? Reiciendis, repellendus odio?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Book and Appointment Using the App?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae incidunt saepe beatae et libero numquam laudantium
              tenetur? Reiciendis, repellendus odio?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* *********************** */}
    </div>
  );
};

export default FAQ;
