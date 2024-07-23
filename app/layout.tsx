import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import Container from "../components/Container";


const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_flex.className} bg-white dark:bg-[#1e1e1e] min-h-[900px]`}>
        <ThemeProvider>
          <Container>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
