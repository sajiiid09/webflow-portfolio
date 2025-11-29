import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sajid's Portfolio",
  description: "Web Engineer portfolio for Sajid Mahmud built with Next.js, Tailwind CSS, and Framer Motion.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
