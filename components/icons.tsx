import {
  Blocks,
  Crown,
  Github,
  Moon,
  Sun,
  X,
  Instagram,
  Twitter,
  Users,
  Mail,
  UserPlus,
} from "lucide-react";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

export const Icons = {
  logo: Blocks,
  close: X,
  premium: Crown,
  lightMode: Sun,
  darkMode: Moon,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  users: Users,
  join: UserPlus,
  discord: FaDiscord,
  blog: BsLayoutTextWindow,
  mail: Mail,
  menu: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-1 left-1.5 top-1 h-5 w-5 scale-y-100 transition-all"
    >
      <path
        d="M4.283 15H17m0-7H1m16-7H9.972"
        stroke="currentColor"
        stroke-width="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  ),
};
