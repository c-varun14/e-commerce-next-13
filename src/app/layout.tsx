import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verve | Home",
  description: "Home page of e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen mx-auto bg-[#FEFEFF] max-w-screen-2xl overflow-x-hidden"
        )}
      >
        <Navbar name="varun" />
        {/* The below div is to mock the navbar */}
        <div className="mb-14 md:mb-16 lg:mb-20" />
        {children}
      </body>
    </html>
  );
}
