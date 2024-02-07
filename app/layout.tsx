import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clover",
  description: "Post your life with Clover SNS",
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
