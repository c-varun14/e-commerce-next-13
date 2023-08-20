import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FiltersProps = {
  className?: string;
};

const Filters = ({ className }: FiltersProps) => {
  return (
    <Accordion
      type="multiple"
      className={cn(
        className,
        "w-64 mt-3 px-4 pt-2 hidden lg:block border-gray-200 border-[1px] rounded-md"
      )}
    >
      <div className="border-b-[1px] flex items-center justify-between border-gray-200 pb-5">
        <h3 className="font-semibold text-lg text-[--dark-gray]">Filters</h3>
        <Link href="/" className="text-sm font-semibold text-[#E24D7F]">
          Clear All
        </Link>
      </div>

      <AccordionItem className="text-[--dark-gray] " value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="text-[--dark-gray] " value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="text-[--dark-gray] " value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
