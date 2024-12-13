import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix UI",
  description: "Generate Netflix UI Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body

      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
