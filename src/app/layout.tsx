import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahulnishad.dev";

export const viewport: Viewport = {
  themeColor: "#090B10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Rahul Chandraveer Nishad | Software Engineer & Full-Stack Developer",
  description:
    "Personal portfolio of Rahul Chandraveer Nishad — Final-Year Computer Science Undergraduate at Parul University (2027), Full-Stack Developer, ServiceNow CAD & CSA Certified, and Algorithmic Problem Solver.",
  keywords: [
    "Rahul Nishad",
    "Rahul Chandraveer Nishad",
    "Full-Stack Developer",
    "Aspiring Software Engineer",
    "ServiceNow CAD",
    "ServiceNow CSA",
    "Next.js Developer",
    "Parul University",
    "JobFit.ai",
    "SnippetSphere",
  ],
  authors: [{ name: "Rahul Chandraveer Nishad", url: "https://github.com/rahul-nishad5708" }],
  creator: "Rahul Chandraveer Nishad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rahul Chandraveer Nishad | Software Engineer & Full-Stack Developer",
    description:
      "Building practical technology. Exploring intelligent solutions. Growing into a better software engineer.",
    siteName: "Rahul Chandraveer Nishad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Chandraveer Nishad | Software Engineer & Full-Stack Developer",
    description:
      "Final-Year Computer Science Undergraduate, Full-Stack Developer, ServiceNow CAD & CSA Certified.",
    creator: "@rahulnishad5708",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chandraveer Nishad",
  url: siteUrl,
  jobTitle: "Computer Science Undergraduate & Full-Stack Developer",
  alumniOf: {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090B10] text-[#F5F7FA] font-sans selection:bg-[#75D69A]/20 selection:text-[#75D69A] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
