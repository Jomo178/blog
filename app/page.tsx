import MainNavbar from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { NavbarItems } from "@/config/navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col gap-10 md:flex-row md:justify-center">
          <div className="bottom-0 left-0 flex flex-col items-center justify-center gap-1 md:items-start">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Write. Share. Code.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Your Platform for Technical Blogs.
            </p>
            <Image
              src="images/read.svg"
              alt="girl read's a book"
              className="mt-7 hidden md:block"
              width={150}
              height={150}
              priority
            />
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
    </>
  );
}
