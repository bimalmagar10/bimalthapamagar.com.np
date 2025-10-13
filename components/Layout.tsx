"use client";
import { ReactNode } from "react";
import Footer from "./Footer";
import NowPlaying from "./now-playing";
import Header from "./Header";
import MobileNav from "./MobileNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        {children}
        <NowPlaying />
        <Footer />
      </div>
      <MobileNav />
    </>
  );
};

export default Layout;
