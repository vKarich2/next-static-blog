"use client";

import Link from "next/link";
import { Link as NavLink } from "@/lib/links";

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav>
      <ul className="flex gap-x-12 font-medium">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;