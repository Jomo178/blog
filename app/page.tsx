import { Icons } from "@/components/icons";
import MainNavbar from "@/components/main-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NavbarItems } from "@/config/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container grid grid-flow-col grid-cols-2 md:justify-center">
          <div className="bottom-0 left-0 flex flex-col items-center justify-center gap-1 md:items-start">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl">
              Write. Share. Code.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Your Platform for Technical Blogs.
            </p>
            <div className="grid w-full grid-flow-col">
              <Image
                src="images/read.svg"
                alt="girl read's a book"
                className="mt-7 hidden md:block"
                width={150}
                height={150}
                priority
              />
              <div className="flex items-center gap-3">
                <Link
                  className={cn(
                    buttonVariants({ variant: "default", size: "default" })
                  )}
                  href="/"
                >
                  Getting Started
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "default" }),
                    "flex gap-2"
                  )}
                  href="/"
                >
                  <Icons.github size={16} /> <span>Github Repo</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="images/blog.svg"
              alt="blog image"
              width={550}
              height={550}
              priority
            />
          </div>
        </div>
      </section>
      <section className="container">
        <Card className="w-[350px] cursor-pointer">
          <CardHeader>
            <Image
              src="/images/blog-post.jpg"
              alt="blog image"
              width={350}
              height={200}
              priority
            />
            <Separator className="h-[2px]" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <CardTitle>Data fetching</CardTitle>
            <CardDescription>
              Sekilas Tentang Next JS 13 (App Router): Data Fetching
            </CardDescription>
            <Separator />
            <div className="flex h-8 items-center space-x-4">
              <Image
                className="rounded-full"
                src="/images/profile.png"
                alt="profile picture"
                width={44}
                height={44}
              />
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-3">
                <CardTitle className="underline hover:text-blue-700">
                  Nauval
                </CardTitle>
                <CardDescription>4 min read · 5 days ago</CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
