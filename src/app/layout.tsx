import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

//Tell the fonts how to load in
const inter = Inter({
  subsets:['latin'],
  variable:"--font-sans"
});

const calistoga =  Calistoga({
  subsets:['latin'],
  variable:"--font-serif", 
  weight:["400"]
});

export const metadata: Metadata = {
  title: "Mohammed Abdulnabi",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={twMerge(
          inter.variable, 
          calistoga.className,
          "bg-black/95 text-white antialiased font-sans")}
        >
          {children}
        </body>
    </html>
  );
}
