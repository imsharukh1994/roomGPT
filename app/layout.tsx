import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import Script from 'next/script';
import { useState } from 'react';

// Metadata configuration
let title = "Dream Room Generator";
let description = "Generate your dream room in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "roomGPT.io";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    other: "/site.webmanifest",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <html lang="en" className={theme}>
      <body className={theme === 'dark' ? "bg-[#17181C] text-white" : "bg-white text-black"}>
        <button 
          onClick={toggleTheme} 
          aria-label="Toggle theme" 
          style={{ position: 'fixed', top: '1rem', right: '1rem' }}
        >
          Toggle Theme
        </button>
        {children}
        <Analytics />
        {/* Google Tag Manager */}
        <Script 
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXX');
            `,
          }}
        />
        {/* SEO Enhancements */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://roomgpt-demo.vercel.app" />
      </body>
    </html>
  );
}
