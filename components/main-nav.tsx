import Link from "next/link";
import { Icons } from "./icons";
import { NavigationMenuDemo } from "./component-test";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./language-menu";
import { useState } from "react";

function MainNavbar() {
  return (
    <>
      <nav className="hidden sm:flex sm:w-full sm:justify-between">
        <div className="flex gap-6">
          <Link href="/" className="flex items-center gap-3 space-x-2">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">Blog Maker</span>
          </Link>
          <NavigationMenuDemo></NavigationMenuDemo>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link
            href="/premium"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "gap-2 px-4",
            )}
          >
            <Icons.premium strokeWidth={3} size={18} />
            Premium
          </Link>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "px-4",
            )}
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
