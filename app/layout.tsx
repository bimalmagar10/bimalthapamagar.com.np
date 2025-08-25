import { ThemeProvider } from "@/components/theme-provider";
import {
  Mulish,
  Rubik,
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Poppins,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/header";
import NowPlaying from "@/components/now-playing";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my site.I'm Bimal Thapa Magar and I am ReactJS enthusiast, Electronics and Communication Engineer and a guitar player.",
};

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
        className={`${mulish.variable} ${rubik.variable} ${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} ${poppins.variable} ${satoshi.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Header />
              {children}
              <NowPlaying />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
