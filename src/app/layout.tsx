/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { LenisProvider } from "@/components/LenisProvider";
import { TopBar } from "@/components/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://warrenchang.dev"),
  title: {
    default: "bowei.space",
    template: "%s · Warren Chang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-sans text-text-primary antialiased">
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
