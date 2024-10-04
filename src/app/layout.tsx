import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sphinx 2024-MTSE|Malaviya Talent Search Examination",
  description: "The Malaviya Talent Search Examination (MTSE), part of Sphinx 2024, is a prestigious initiative aimed at identifying and nurturing the brightest young minds. Held under the banner of the Sphinx Techno-Management Fest, MTSE offers students an unparalleled platform to showcase their intellectual prowess and problem-solving skills. This competitive exam spans across multiple disciplines, challenging participants with thought-provoking questions designed to test their aptitude in science, technology, and general knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
