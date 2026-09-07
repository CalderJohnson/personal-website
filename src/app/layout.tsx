import type { Metadata } from "next";
import "./globals.css";
import { withSiteBasePath } from "./components/assetPath";

export const metadata: Metadata = {
  title: "Calder Johnson",
  description: "Calder Johnson's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={withSiteBasePath("/favicon.png")} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
