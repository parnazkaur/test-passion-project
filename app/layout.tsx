import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unheard Stories - Child Trafficking Documentation",
  description: "Documenting the unheard stories of children trafficked in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

