import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"]
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://harborsystems.ai"),
  title: {
    default: "Harbor Systems | Responsible AI for Mission-Driven Organizations",
    template: "%s | Harbor Systems"
  },
  description:
    "Harbor Systems designs responsible AI, automation, dashboards, and operational intelligence systems for churches, nonprofits, and schools.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg"
  },
  openGraph: {
    title: "Harbor Systems",
    description:
      "Premium operational intelligence and responsible AI implementation for mission-driven organizations.",
    type: "website",
    images: ["/logo.svg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
