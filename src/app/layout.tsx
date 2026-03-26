import type { Metadata } from "next";
import { Akshar, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const akshar = Akshar({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-akshar",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ken'sLab — Full-Stack Developer",
  description: "Kenechukwu Emmanuel Obaji — Full-Stack Developer specializing in scalable web applications, SaaS platforms, and high-performance APIs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${akshar.variable} ${inter.variable} font-inter antialiased`}>
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}