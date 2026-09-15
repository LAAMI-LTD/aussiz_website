import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactWidget } from "@/components/layout/FloatingContactWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Aussiz Education and Training | IELTS, PTE, ICT & Professional Training",
    template: "%s | Aussiz Education and Training",
  },
  description:
    "Aussiz Education and Training provides IELTS and PTE preparation, exam booking support, computer and ICT training, German language training, Nurse Aide, Caregiving and Disability courses.",
};

export const viewport: Viewport = {
  themeColor: "#1E2248",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContactWidget />
      </body>
    </html>
  );
}
