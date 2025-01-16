import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Dada Auto',
    default: 'Dada Auto', 
  },
  description: "Welcome to Dada Auto - Nottingham's premier auto body repair specialists.",
  icons: [
    {
      rel: 'icon',
      url: '/logo.png',
    },
   
  ],
  openGraph: {
    title: 'Dada Auto',
    description: "Welcome to Dada Auto - Nottingham's premier auto body repair specialists.",
    images: ['/logo.png'],
  },
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