import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Sunit Mohan | Software Engineer",
  description: "Portfolio of Sunit Mohan, a product-focused frontend architect and engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${inter.className} bg-background text-foreground antialiased selection:bg-neon-blue/30 selection:text-neon-blue`}>
        <Providers attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]"></div>
            <Navbar />
            <main className="flex-grow z-10">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
