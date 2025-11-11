import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { LenisProvider } from "@/components/LenisProvider";
import { TopBar } from "@/components/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warrenchang.dev"),
  title: {
    default: "Warren Chang — Software Engineer & ML Builder",
    template: "%s · Warren Chang",
  },
  description:
    "Portfolio for Warren Chang — software engineer building expressive interfaces, ML tooling, and high-trust systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} bg-background font-sans text-text-primary antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            <PageTransition>
              <TopBar />
              <main className="min-h-screen">{children}</main>
            </PageTransition>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
