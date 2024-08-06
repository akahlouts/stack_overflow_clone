import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata = {
  title: "Next.js with Clerk",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
