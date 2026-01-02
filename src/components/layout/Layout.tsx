import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import InfiniteGrid from "../ui/infinite-grid-integration";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B0F14]">
      {/* VANTA.js background container is in index.html */}
      <Navbar className="relative z-20" />
      <main className="relative z-20 flex-1 pt-[73px]">{children}</main>
      <Footer className="relative z-20" />
    </div>
  );
};