"use client";
import TopBanner from "@/public/pasek-stronka.png";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Aktualności",
    href: "/news",
  },
  { name: "Info", href: "/info" },
];

export function TopNav() {
  const pathname = usePathname();
  return (
    <>
      <Image src={TopBanner} alt="Ziemie Jałowe" className="top-banner" />
      <div className="nav-links-container">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={"nav-link " + (pathname === link.href ? "active" : "")}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
