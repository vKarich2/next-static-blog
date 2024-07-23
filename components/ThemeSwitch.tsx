"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
		return (
			<AiOutlineLoading className="animate-spin" />
		);
	};

  return (
    <div
		className="transition duration-300 hover:opacity-70 hover:cursor-pointer text-2xl border-[1px] border-black dark:border-white rounded-full p-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <BiSun /> : <BiMoon />}
    </div>
  );
}