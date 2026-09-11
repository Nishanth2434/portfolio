import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nishanth B. · Computer Science Student, Developer & AI Enthusiast",
  description:
    "Portfolio of Nishanth B. — 4th-semester Computer Science and Engineering student from Mandya, Karnataka, India. Building practical technology, exploring AI, and developing real-world web, mobile, and IoT applications.",
  keywords: [
    "Nishanth B.",
    "Computer Science Student",
    "Developer Portfolio",
    "AI Enthusiast",
    "Mandya Karnataka",
    "Web Development",
    "Software Development",
    "Interview AI",
    "KrishiMitra AI",
    "IoT",
  ],
  authors: [{ name: "Nishanth B." }],
  creator: "Nishanth B.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishanth-portfolio.vercel.app",
    title: "Nishanth B. · Computer Science Student & Developer",
    description:
      "Building practical technology, exploring AI, and turning ideas into real-world applications.",
    siteName: "Nishanth B. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishanth B. · Developer Portfolio",
    description:
      "Computer Science Student | Developer | AI Enthusiast based in Mandya, Karnataka, India.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060913",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#060913] text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
