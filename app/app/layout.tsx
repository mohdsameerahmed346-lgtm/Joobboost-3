import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobBoost | Your AI Career Toolkit",
  description: "AI Resume Builder, Interview Coach, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
