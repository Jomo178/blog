import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import MainNavbar from "@/components/main-nav";
import { NavbarItems } from "@/config/navbar";

export default function Home() {
  return (
    <>
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNavbar items={NavbarItems} />
        </div>
      </header>
      <section className="space-y-6 pb-8 pt-6 md:mt-0 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col gap-5 md:flex-row md:justify-center">
          <div className="bottom-0 left-0 flex flex-col items-center justify-center gap-1 md:items-start">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl">
              Write. Share. Code.
            </h1>
            <p className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 md:text-left">
              {/* Your Platform for Technical Blogs. */}
              <Balancer>
                Crafting Technical Narratives, Building a Community for Tech
                Enthusiasts, and Providing Your Platform for Tech Exploration.
              </Balancer>
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
              <div className="flex flex-col items-center justify-center gap-3 pt-6">
                <Link
                  className={cn(
                    buttonVariants({ variant: "default", size: "default" }),
                    "w-[75%] md:w-fit"
                  )}
                  href="/"
                >
                  Get Started
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "default" }),
                    "flex w-[75%] gap-2 md:w-fit"
                  )}
                  href="/"
                >
                  <Icons.github size={16} /> <span>Github Repo</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-20 md:py-0">
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
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Blogger's Corner
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            <Balancer>
              Welcome to Blogger's Corner, where the tech community converges to
              share insights, ask questions, and spark meaningful discussions on
              all things code, technology, and beyond. Join the conversation,
              learn, and grow together with fellow tech enthusiasts.
            </Balancer>
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-2 sm:grid-cols-2 lg:max-w-[64rem] lg:grid-cols-3">
          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
          />
          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
          />

          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
          />
          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
            className="hidden sm:block"
          />
          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
            className="hidden sm:block"
          />
          <BlogCard
            title="Data fetching"
            description="Sekilas Tentang Next JS 13 (App Router): Data Fetching"
            BlogImage="/images/blog-post.jpg"
            ProfilePicture="/images/profile.webp"
            username="Nauval"
            className="hidden sm:block"
          />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
