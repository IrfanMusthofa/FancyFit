import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Fancy Fit",
  description: "A fancy fitness web app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
