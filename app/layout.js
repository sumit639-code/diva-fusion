"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Bottombar from "./components/Bottombar";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Diva Fusion</title>
      <body className={inter.className}>
        <RecoilRoot>
          {children}
          <Bottombar />
        </RecoilRoot>
      </body>
    </html>
  );
}
