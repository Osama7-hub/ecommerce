"use client";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import ScrollToTop from "./_components/scroll/ScrollToTop.jsx";

const inter = Tajawal({ subsets: ["latin"], weight: "700" });

// export const metadata = {
//   title: "ecommerce",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <head>
            <title>Store</title>
            <meta name='description' content='Generated by create next app' />
          </head>
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}