import type { Metadata } from "next";

import { AppProvider } from "@/components/AppProvider/AppProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Next ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <Navbar />
          {children}

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
