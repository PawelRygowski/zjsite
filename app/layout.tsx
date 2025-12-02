import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "./ui/nav/topnav";
import { Footer } from "./ui/footer/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
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
    <html lang="en">
      <body className={`antialiased`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
