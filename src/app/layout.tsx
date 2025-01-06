import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SvgSkillShell from "./ui/svgGrid/svg-skills-shell";

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
      <body className="scroll-smooth bg-zinc-300 text-black antialiased scrollbar-none sm:overscroll-none">
        <main className="relative inset-0 flex-shrink-0 overflow-auto sm:overscroll-none">
          {children}
        </main>
      </body>
    </html>
  );
}
