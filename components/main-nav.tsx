"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

import MobileNavbar from "./mobile-nav";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavbarItems } from "@/types";
import ToggleTheme from "./toggle-theme";
import Image from "next/image";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MobileNavProps {
  items: NavbarItems[];
  user?: Omit<User, "id">;
  children?: React.ReactNode;
}

function MainNavbar({ items, children, user }: MobileNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment();

  console.log(user, "navbar");
  return (
    <>
      <nav className="flex w-full justify-between">
        <div className="flex gap-6">
          <Link href="/" className="flex items-center gap-3 space-x-2">
            <Icons.logo />
            <span className="inline-block font-bold">Blog Maker</span>
          </Link>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "hidden items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm md:flex",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.name === "Home" && segment == null
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          {user ? (
            <UserAvatar user={user} />
          ) : (
            <>
              <Link
                href="/premium"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "gap-2 px-4"
                )}
              >
                <Icons.premium strokeWidth={3} size={18} />
                Premium
              </Link>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "hidden px-4 md:flex"
                )}
              >
                Login
              </Link>
            </>
          )}
          <Button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            {showMobileMenu ? <Icons.close /> : Icons.menu}
          </Button>
        </div>
        {showMobileMenu && (
          <MobileNavbar items={items}>{children}</MobileNavbar>
        )}
      </nav>
    </>
  );
}

function UserAvatar({ user, ...props }: { user: Omit<User, "id"> }) {
  return (
    <>
      <p>{user.name}</p>
      <Avatar {...props}>
        {user.image ? (
          <>
            <AvatarImage alt="Picture" src={user.image} />
          </>
        ) : (
          <AvatarFallback>
            <Icons.user className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
    </>
  );
}

export default MainNavbar;
