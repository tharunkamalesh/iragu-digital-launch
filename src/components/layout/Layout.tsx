import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import InfiniteGrid from "../ui/infinite-grid-integration";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Global Infinite Grid Background - visible on all pages */}
      <InfiniteGrid 
        className="fixed inset-0 z-0" 
        cellSize={30} 
        opacity={0.12} 
        speed={0.5} 
      />
      <Navbar className="relative z-20" />
      <main className="relative z-10 flex-1 pt-[73px]">{children}</main>
      <Footer className="relative z-20" />
    </div>
  );
};