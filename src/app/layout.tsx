import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Fidalgo - Restaurant",
  description:
    "Fidalgo is for everyone who collects beautiful moments. Fine dining restaurant serving the finest food & great service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientBody>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
