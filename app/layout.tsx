import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jyotishman Pathak · Full Stack & AI Engineer",
  description: "Full Stack Developer & AI Enthusiast based in Jorhat, Assam. Building real-time systems, autonomous AI agents, and shipping end-to-end products.",
  keywords: ["Jyotishman Pathak", "Full Stack Developer", "AI Engineer", "Real-time Systems", "Next.js", "TypeScript", "AI Agents", "Jorhat", "Assam"],
  authors: [{ name: "Jyotishman Pathak", url: "https://jyotishman.vercel.app" }], // here rii
  creator: "Jyotishman Pathak",
  
 
  openGraph: {
    title: "Jyotishman Pathak · Full Stack & AI Engineer",
    description: "Building real-time systems, autonomous AI agents, and shipping end-to-end products from Jorhat, Assam.",
    url: "https://jyotishman.vercel.app",  // website domain tbadded
    siteName: "Jyotishman Pathak Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jyotishman Pathak Portfolio Preview",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Jyotishman Pathak · Full Stack & AI Engineer",
    description: "Building real-time systems, autonomous AI agents, and shipping end-to-end products.",
    creator: "@jyotishman__dev",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// 3. Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
        {children}
      </body>
    </html>
  );
}