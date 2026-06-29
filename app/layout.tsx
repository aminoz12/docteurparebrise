import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { PromotionalBar } from "@/components/layout/promotional-bar";
import { FloatingNav } from "@/components/layout/floating-nav";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SiteFooter } from "@/components/layout/site-footer";
import { BusinessJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – Pare-brise & vitrages auto`,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className="bg-background text-foreground antialiased flex min-h-screen flex-col font-sans"
      >
        <BusinessJsonLd />
        <PromotionalBar />
        <FloatingNav />
        <main className="flex-1 w-full pt-[120px] md:pt-[144px]">
          {children}
        </main>
        <div className="w-full mt-auto">
          <SiteFooter />
        </div>
        <WhatsAppFloat />
      </body>
      <GoogleAnalytics gaId="G-824PBH7EQK" />
    </html>
  );
}
