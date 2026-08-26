import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victoria's SEO Analytics Lab",
  description: "Learning Python, PostgreSQL and Data Analytics",
  verification: {
    google: "h1J1mEh8_8zsEygFgKDoLi9L_v-k9CO6S_ObAfCsJMI",
  },
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