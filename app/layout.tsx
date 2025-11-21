import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sajid Mahmud | Web Engineer",
  description: "Web Engineer portfolio for Sajid Mahmud built with Next.js, Tailwind CSS, and Framer Motion."
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
