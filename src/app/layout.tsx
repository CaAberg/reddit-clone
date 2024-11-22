import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import DesktopSidebar from "./components/Sidebar/desktopSidebar";

export const metadata: Metadata = {
  title: "Reddit-Dive into anything",
  description: "Reddit is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in on Reddit.",
  icons: {
    icon: "/favicon.ico"},
};

const opensans = Open_Sans({
  subsets:['latin-ext'],
  variable: '--font-opensans'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.variable} font-sans`}
      >
        <Header/>
        <DesktopSidebar />
        {children}
      </body>
    </html>
  );
}
