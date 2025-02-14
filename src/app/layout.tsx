import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Story Book",
    template: "%s | Story Book",
  },
  description:
    "Create an interactive website with the latest technology to facilitate user experience and developer experience using next.js, typescript, tailwindCss, shadcn / UI, and storybook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
