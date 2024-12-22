import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

// Metadata for the page
export const metadata: Metadata = {
  title: "Travel-Site",
  description: "Travel App for Camping",
};

// Root layout for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navbar component */}
        <Navbar />

        {/* Main content area */}
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
