import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/Sidebar";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ReactNode } from "react";

const geistSans: NextFontWithVariable = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono: NextFontWithVariable = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABR Exchange",
  description: "An Exchange Application for Cryptocurrency",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#141414] text-amber-50`}
      >
        <SidebarProvider>
          <div className="fixed top-0 left-0 right-0">
            <Navbar />
          </div>
          <div className="flex pt-[72px] min-h-screen">
            <div className="top-[72px] h-[calc(100vh-72px)]">
              <AppSidebar />
            </div>
            <SidebarTrigger />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
