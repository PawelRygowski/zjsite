"use client";
import TopBanner from "@/public/pasek-stronka.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { fetchLinks } from "@/data/menu-links";

export function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = fetchLinks();

  return (
    <>
      <Image src={TopBanner} alt="Ziemie Jałowe" className="top-banner" />
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Menu
      </button>
      {open && (
        <div className="nav-links-container">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={"nav-link " + (pathname === link.href ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
