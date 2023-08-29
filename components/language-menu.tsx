"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function LanguageHandler() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hidden md:flex">
        <Button variant="ghost" size="lg" className="gap-2 px-4">
          <Image
            src="/flags/uk.svg"
            alt="uk flag"
            width={15}
            height={15}
            priority
          />
          <span>English</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="max-w-fit">
        <DropdownMenuItem className="cursor-pointer items-center gap-2">
          <Image
            src="/flags/germany.svg"
            alt="uk flag"
            width={15}
            height={15}
          />
          <span>Deutsch</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
