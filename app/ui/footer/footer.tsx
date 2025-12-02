"use client";
import TopBanner from "@/public/pasek-stronka.png";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "facebook", href: "https://www.facebook.com/ZiemieJalowe" },
  {
    name: "instagram",
    href: "https://www.instagram.com/ziemie_jalowe/",
  },
  { name: "discord", href: "https://discord.gg/GUxxjHAQQY" },
  {
    name: "kontakt",
    href: "/contact",
  },
];

export function Footer() {
  const pathname = usePathname();
  return (
    <>
      <div className="footer-links-container">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className={"footer-link"}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
