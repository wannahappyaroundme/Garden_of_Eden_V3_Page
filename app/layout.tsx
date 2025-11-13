import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden of Eden V3 - Your AI Assistant That Respects Your Privacy",
  description: "The Only 100% Local AI Assistant Inspired by JARVIS. No Cloud • No Subscriptions • No Compromises",
  keywords: ["AI Assistant", "Privacy", "Local AI", "JARVIS", "Open Source", "Free AI"],
  authors: [{ name: "Garden of Eden Team" }],
  openGraph: {
    title: "Garden of Eden V3 - Your AI Assistant That Respects Your Privacy",
    description: "The Only 100% Local AI Assistant Inspired by JARVIS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
