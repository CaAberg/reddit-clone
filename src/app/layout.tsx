import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Reddit-Dive into anything",
  description: "Reddit is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in on Reddit.",
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
        {children}
      </body>
    </html>
  );
}
