import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import BackgroundAnimation from "@/components/ui/BackgroundAnimation";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundAnimation />
      <Navbar className="relative z-20" />
      <main className="relative z-20 flex-1 pt-[73px]">{children}</main>
      <Footer className="relative z-20" />
    </div>
  );
};