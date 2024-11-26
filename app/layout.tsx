import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans, Crimson_Pro } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
 
const inter = Inter({ subsets: ['latin'] })
const notoSans = Noto_Sans({ subsets: ['latin'], variable: "--noto_sans" });
const crimson = Crimson_Pro({subsets: ["latin"], variable: "--font-crimson"});


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
      <body
        className={`${inter.className} ${notoSans.variable} ${crimson.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
