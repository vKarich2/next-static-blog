"use client";

import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { BiBell } from "react-icons/bi";

const Navmenu = () => {
  return (
    <div className="flex items-center justify-between gap-x-2 relative top-2">
      <Link className="text-2xl border-[1px] border-black dark:border-white rounded-full p-2" href="/">
        <BiBell />
      </Link>
      <ThemeSwitch />
    </div>
  );
};

export default Navmenu;