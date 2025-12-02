import { Footer } from "../ui/footer/footer";
import { TopNav } from "../ui/nav/topnav";
import { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-container">
      <div className="nav-container">
        <TopNav />
      </div>
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
}
