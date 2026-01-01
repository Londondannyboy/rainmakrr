import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Rainmakrr | Specialist Recruitment Agency UK",
    template: "%s | Rainmakrr",
  },
  description: "UK specialist recruitment agency for green energy, private equity, venture capital, and emerging sectors.",
  metadataBase: new URL("https://rainmakrr.com"),
};

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-400">Loading...</span>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        <Suspense fallback={<LoadingFallback />}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
