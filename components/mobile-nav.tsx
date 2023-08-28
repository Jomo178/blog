"use client";
import { Icons } from "./icons";

import Link from "next/link";
import { ModeToggle } from "./language-menu";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavigationMenuDemo } from "./component-test";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);

  return (
    <>
      <nav className="flex w-full justify-between md:hidden">
        <div className="flex gap-6">
          <Link href="/" className="flex items-center gap-3 space-x-2">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">Blog Maker</span>
          </Link>
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
          <Button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            variant="outline"
            size="icon"
          >
            {showMobileMenu ? <Icons.close /> : Icons.menu}
          </Button>
        </div>
        {showMobileMenu && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-slate-800 p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
            <NavigationMenuDemo showMobileMenu></NavigationMenuDemo>
          </div>
        )}
      </nav>
    </>
  );
}

export default MobileNavbar;
