import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../styles/reset.css";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ns",
  description: "next.js study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div
            className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6 border"
            style={{ borderColor: "#e6e5e6" }}
          >
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
