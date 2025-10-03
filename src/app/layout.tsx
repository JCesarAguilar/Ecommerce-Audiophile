import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Los mejores auriculares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable}`}>
      <body>
        <Toaster richColors position="bottom-right" />
        <AuthProvider>
          <CartProvider>
            <>
              <NavBar />
              {children}
              <Footer />
            </>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
