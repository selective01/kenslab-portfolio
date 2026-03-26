import type { Metadata } from "next";
import { Akshar, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaviconSwitcher from "@/components/utils/FaviconSwitcher";

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
  description:
    "Kenechukwu Emmanuel Obaji — Full-Stack Developer specializing in scalable web applications, SaaS platforms, and high-performance APIs.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Ken'sLab — Full-Stack Developer",
    description:
      "Kenechukwu Emmanuel Obaji — Full-Stack Developer specializing in scalable web applications, SaaS platforms, and high-performance APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: "Ken'sLab Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken'sLab — Full-Stack Developer",
    description:
      "Kenechukwu Emmanuel Obaji — Full-Stack Developer specializing in scalable web applications, SaaS platforms, and high-performance APIs.",
    images: ["/og-image.png"],
  },
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
          <FaviconSwitcher />
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}