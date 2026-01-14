import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { DATA } from "@/data/resume";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Backend Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.summary,
  keywords: [
    "Backend Engineer",
    "Software Engineer",
    "Golang",
    "Ruby",
    "Rails",
    "Kubernetes",
    "AI",
    DATA.name,
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    title: DATA.name,
    description: DATA.summary,
    siteName: DATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.summary,
    creator: "@Harshitc007",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
              jobTitle: DATA.work[0]?.title,
              worksFor: {
                "@type": "Organization",
                name: DATA.work[0]?.company,
              },
              sameAs: Object.values(DATA.contact.social).map((s) => s.url),
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary`}>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
