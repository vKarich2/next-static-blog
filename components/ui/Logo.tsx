"use client";

import Link from "next/link";
import Image from "next/image";

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Logo = () => {
  return (
    <Link className="text-black dark:text-white" href="/">
      <span className={`${saira.className} text-3xl font-black leading-none`}>It MATTERS.</span>
    </Link>
  );
};

export default Logo;