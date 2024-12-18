import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arnie Labs",
  description: "Where music meets aesthetics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen dark text-foreground bg-background`}>
      <NextUIProvider>
      <Header />
        {children}
      <Footer />
    </NextUIProvider>
      </body>
    </html>
  );
}
