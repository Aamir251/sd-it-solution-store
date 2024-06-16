import type { Metadata } from "next";
import "./globals.css";

import { Cairo, Poppins } from 'next/font/google'

const cairo = Cairo({
  variable: '--font-family-cairo',
  subsets: ['latin'],
  weight: ['500', '700', '300', '400', '600'],
})

const poppins = Poppins({
  variable : '--font-family-poppins',
  subsets: ['latin'],
  weight: ['500', '700', '300', '400', '600'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${cairo.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
