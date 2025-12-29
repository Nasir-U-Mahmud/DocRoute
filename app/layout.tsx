import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Never Miss a Document Again — IRCC Checklist | DocRoute",
  description: "Prepare IRCC-ready documents automatically for study permits and Express Entry. Organize your Canada immigration documents without stress or confusion.",
  keywords: ["IRCC", "Canada immigration", "study permit", "Express Entry", "document preparation"],
  authors: [{ name: "DocRoute" }],
  openGraph: {
    title: "Never Miss a Document Again — IRCC Checklist",
    description: "Prepare IRCC-ready documents automatically for study permits and Express Entry.",
    url: "https://docroute.app",
    siteName: "DocRoute",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Miss a Document Again — IRCC Checklist",
    description: "Prepare IRCC-ready documents automatically for study permits and Express Entry.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}