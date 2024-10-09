import DeployButton from "@/components/deploy-button";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Renigo App",
  description: "Effortless Property Management, Simplified for You.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
     <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <div className="h-svh">
          {children}
        </div>
      </body>
    </html>
  );
}
