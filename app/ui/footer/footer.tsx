import Link from "next/link";
import "./footer.css";
import { fetchFooterLinks } from "@/data/footer-links";

export function Footer() {
  const links = fetchFooterLinks();
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`footer-link pirate`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
