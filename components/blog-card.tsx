"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  BlogImage: string;
  title: string;
  description: string;
  ProfilePicture: string;
  username: string;
  className?: string;
  children?: React.ReactNode;
}

function BlogCard({
  username,
  ProfilePicture,
  BlogImage,
  description,
  title,
  className,
  children,
}: BlogCardProps) {
  return (
    <Link href="/" className={cn("block w-[300px]", className)}>
      <Card className="w-[300px] cursor-pointer">
        <CardHeader>
          <Image
            src={BlogImage}
            alt="blog image"
            width={350}
            height={200}
            priority
          />
          <Separator className="h-[2px]" />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Separator />
          <div className="flex h-8 items-center space-x-4">
            <Image
              className="rounded-full"
              src={ProfilePicture}
              alt="profile picture"
              width={44}
              height={44}
            />
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-3">
              <CardTitle className="underline hover:text-blue-700">
                {username}
              </CardTitle>
              <CardDescription>4 min read · 5 days ago</CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCard;
