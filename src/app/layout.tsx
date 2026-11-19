
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://rahul-portfolio-beige-eight.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chandraveer Nishad",
  url: siteUrl,
  jobTitle: "Computer Science Undergraduate & Full-Stack Developer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Parul University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/rahul-nishad5708",
    "https://www.linkedin.com/in/rahulnishad12/",
    "https://leetcode.com/u/raahul_12/",
    "https://x.com/rahulnishad5708",
  ],
};

export const viewport: Viewport = {
  themeColor: "#090B10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Rahul Nishad Portfolio",

  title: {
    default: "Rahul Nishad | Software Engineer & Full-Stack Developer",
    template: "%s | Rahul Nishad",
  },

  description:
    "Explore the portfolio of Rahul Chandraveer Nishad, a Computer Science undergraduate at Parul University (2027), Full-Stack Developer, ServiceNow CSA & CAD certified, and algorithmic problem solver.",

  keywords: [
    "Rahul Nishad",
    "Rahul Chandraveer Nishad",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "ServiceNow CSA",
    "ServiceNow CAD",
    "Parul University",
    "Computer Science Student",
    "JobFit.ai",
    "SnippetSphere",
  ],

  authors: [
    {
      name: "Rahul Chandraveer Nishad",
      url: "https://github.com/rahul-nishad5708",
    },
  ],

  creator: "Rahul Chandraveer Nishad",
  publisher: "Rahul Chandraveer Nishad",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Rahul Nishad Portfolio",
    title: "Rahul Nishad | Software Engineer & Full-Stack Developer",
    description:
      "Building practical technology. Exploring intelligent solutions. Growing into a better software engineer.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rahul Chandraveer Nishad - Personal Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Nishad | Software Engineer & Full-Stack Developer",
    description:
      "Computer Science Undergraduate, Full-Stack Developer, and ServiceNow CSA & CAD Certified.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#090B10] text-[#F5F7FA] font-sans selection:bg-[#75D69A]/20 selection:text-[#75D69A] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
