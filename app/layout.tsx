import { ThemeProvider } from "@/components/theme-provider";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import { HighlightTheme } from "@/components/HighlightTheme";
import { Toaster } from "sonner";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Bimal Thapa Magar",
  description:
    "ML engineer & software developer. I build efficient LLMs and scalable web applications.",
};

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${satoshi.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HighlightTheme />
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* <NowPlaying /> */}
          </div>
          <MobileNav />
          <Toaster position="top-center" />
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}
