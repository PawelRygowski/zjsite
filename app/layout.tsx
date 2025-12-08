import type { Metadata } from "next";
import { Teko, Pirata_One, Kanit } from "next/font/google";
import "./globals.css";
import { TopNav } from "./ui/nav/topnav";
import { Footer } from "./ui/footer/footer";

export const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-teko",
});

export const pirata = Pirata_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pirata",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200"], // ExtraLight corresponds to 200
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ziemie Jałowe",
    default: "Home",
  },
  description: "Oficjalna strona Ziem Jałowych",
  metadataBase: new URL("https://ziemiejalowe.pl/"),
};
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pirata.variable} ${kanit.variable} ${teko.variable}`}
    >
      <body className={`antialiased`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
