"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TopBanner from "@/public/pasek-stronka.png";
import { fetchLinks } from "@/data/menu-links";

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const links = fetchLinks();
  useEffect(() => {
    if (navbarRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbarRef.current.offsetHeight}px`
      );
    }

    const handleResize = () => {
      if (navbarRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navbarRef.current.offsetHeight}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div ref={navbarRef} className="top-banner-container">
        <Image src={TopBanner} alt="Ziemie Jałowe" className="top-banner" />
        <button
          className="menu-button title-small"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Fullscreen overlay menu */}
      {open && (
        <div
          className="nav-links-container"
          style={{
            top: navbarHeight,
            height: `calc(100vh - ${navbarHeight}px)`,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
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
