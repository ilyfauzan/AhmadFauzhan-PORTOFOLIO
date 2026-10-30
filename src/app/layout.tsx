import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Fauzan | Full Stack Developer",
  description:
    "Portfolio of Fauzan — Full Stack Developer & UI/UX Designer crafting beautiful digital experiences.",
  keywords: ["portfolio", "developer", "fullstack", "react", "nextjs", "fauzan"],
  openGraph: {
    title: "Fauzan | Full Stack Developer",
    description: "Portfolio of Fauzan — Full Stack Developer & UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

