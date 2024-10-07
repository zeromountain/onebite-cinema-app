import type { Metadata } from "next";

import Header from "@/components/common/header";

import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "한입시네마",
  description: "영화 정보를 한입 한입 따라먹는 시네마",
  openGraph: {
    title: "한입시네마",
    description: "영화 정보를 한입 한입 따라먹는 시네마",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ErrorBoundary errorComponent={Error}>
          <main id="main" className="relative">
            {children}
            {modal}
          </main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
