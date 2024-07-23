"use client";

import Logo from "@/components/ui/Logo";
import Navbar from "@/components/ui/Navbar";
import Navmenu from "@/components/ui/Navmenu";
import { links } from "@/lib/links";

const Header = () => {
  return (
    <header className="flex justify-between items-end leading-none mb-24">
			<Logo />
			<Navbar links={links} />
			<Navmenu />
    </header>
  );
};

export default Header;