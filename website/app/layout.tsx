import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Home | Macrovesta",
  description:
    "Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.",
  openGraph: {
    title: "Home | Macrovesta",
    description:
      "Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.",
    images: ["/images/social-sharing.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Macrovesta",
    description:
      "Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.",
    images: ["/images/social-sharing.jpg"],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
