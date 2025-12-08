const links = [
  { name: "Home", href: "/" },
  {
    name: "Aktualności",
    href: "/news",
  },
  { name: "Info", href: "/info" },
  { name: "Larp", href: "/larp" },
  { name: "Program", href: "/program" },
  { name: "Formularze", href: "/formularze" },
  { name: "FAQ", href: "/faq" },
  { name: "Galeria", href: "/galeria" },
  { name: "Regulamin", href: "/regulamin" },
  { name: "Partnerzy", href: "/partnerzy" },
  { name: "Polityka prywatności", href: "/polityka" },
  { name: "Kontakt", href: "/kontakt" },
];

export function fetchLinks() {
  return links;
}
