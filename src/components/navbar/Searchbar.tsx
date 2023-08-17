"use client";

import { ChevronLeft, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type propsD = {
  className: string;
};

const SearchBarComponent = forwardRef<HTMLInputElement | null, propsD>(
  function SearchBarComponent({ className }, ref) {
    return (
      <section className={cn("hidden md:block w-10/12 md:w-96", className)}>
        <Command
          className={cn(
            "w-full bg-[--searchbar-gray] relative  text-white focus-within:rounded-b-none overflow-visible rounded",
            {
              "bg-[--dark-gray] static": !!className,
            }
          )}
        >
          <CommandInput
            ref={ref}
            placeholder="Search for brands and products..."
            className="h-10 text-white focus:rounded-b-none placeholder:text-white placeholder:opacity-60"
          />
          <CommandList
            className={cn("w-full absolute top-full mt-0 shadow", {
              "left-0 bg-white": !!className,
            })}
          >
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>
    );
  }
);

const Searchbar = () => {
  const [showSearchbarInMobile, setShowSearchbarInMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={cn("flex items-center mx-2", {
        "absolute flex items-center top-0 mx-0 px-2 h-full bg-[--dark-gray] left-0 w-[100dvw] z-[2]":
          showSearchbarInMobile,
      })}
    >
      <ChevronLeft
        className={cn("hidden", { block: showSearchbarInMobile })}
        onClick={() => setShowSearchbarInMobile(false)}
      />

      <Search
        className={cn("h-5 w-5 text-gray-300 mx-auto md:hidden", {
          hidden: showSearchbarInMobile,
        })}
        onClick={() => {
          inputRef?.current?.focus();
          setShowSearchbarInMobile(true);
        }}
      />
      <SearchBarComponent
        ref={inputRef}
        className={cn("", {
          "block bg-transparent ": showSearchbarInMobile,
        })}
      />
    </div>
  );
};

export default Searchbar;
