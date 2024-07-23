"use client";

import Navbar from "./ui/Navbar";

const review_links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Authors",
    href: "/authors",
  },
  {
    label: "Works",
    href: "/works",
  }
]

const main_links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
]

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-3xl mt-32">
      <div></div>
      <div></div>
    </footer>
  );
}