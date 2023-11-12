import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peter Williams portfolio",
  description: "personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth bg-zinc-300 text-zinc-50 antialiased scrollbar-none">
        <main className=" flex-shrink-0">{children}</main>
      </body>
    </html>
  );
}
