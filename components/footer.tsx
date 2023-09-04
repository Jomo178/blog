"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./icons";
import { LanguageHandler } from "./language-menu";
import ToggleTheme from "./toggle-theme";
import { Separator } from "@radix-ui/react-separator";

function Footer() {
  return (
    <>
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <footer>
          <div className="mx-auto mb-7 grid max-w-[74rem] grid-cols-2 items-start gap-4 sm:grid-cols-5">
            <div className="flex flex-col gap-8">
              <Link href="/" className="flex gap-2">
                <Icons.logo size={30} />
                <h6 className="text-2xl font-semibold">Blog Maker</h6>
              </Link>
              <p className="max-w-sm text-sm">
                Empowering Tech Enthusiasts to Share, Learn, and Connect.
              </p>
            </div>
            <div>
              <h6 className="mb-7 text-xl font-semibold underline underline-offset-8">
                Contact
              </h6>
              <ul className="flex cursor-pointer flex-col gap-4">
                <li className="flex items-center gap-2 transition-all hover:text-gray-500">
                  <Icons.mail />
                  <a href={`mailto:bot.supportEMail`}>Contact US</a>
                </li>
                <li className="flex items-center gap-2 transition-all hover:text-gray-500">
                  <Icons.discord size={25} />
                  <a href="bot.supportServerLink">Support Server</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-7 text-xl font-semibold underline underline-offset-8">
                Social
              </h6>
              <ul className="flex cursor-pointer flex-row gap-6">
                <li className="transition-all hover:text-gray-500">
                  <Link href="/">
                    <Icons.instagram />
                  </Link>
                </li>
                <li className="transition-all hover:text-gray-500">
                  <Link href="/">
                    <Icons.twitter />
                  </Link>
                </li>
                <li className="transition-all hover:text-gray-500">
                  <Link href="/">
                    <Icons.github />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-7 text-xl font-semibold underline underline-offset-8">
                Discover More
              </h6>
              <ul className="flex cursor-pointer flex-col gap-4">
                <li className="flex items-center gap-2 transition-all hover:text-gray-500">
                  <Icons.users />
                  <a href="/">About Us</a>
                </li>
                <li className="flex items-center gap-2 transition-all hover:text-gray-500">
                  <Icons.blog size={20} />
                  <a href="/">Blogs</a>
                </li>
                <li className="flex items-center gap-2 transition-all hover:text-gray-500">
                  <Icons.join />
                  <a href="/">Join Us</a>
                </li>
              </ul>
            </div>
            <div className="min-w-[11rem]">
              <h6 className="mb-7 text-xl font-semibold underline underline-offset-8">
                Settings
              </h6>
              <div className="space-y-2">
                <LanguageHandler />
                <ToggleTheme />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[74rem]">
            <p>
              Copyright © 2023 Blog Maker |{" "}
              <Link className="underline underline-offset-8" href="/terms">
                Terms Conditions
              </Link>{" "}
              |{" "}
              <Link href="/privacy" className="underline underline-offset-8">
                Privacy Policy
              </Link>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
