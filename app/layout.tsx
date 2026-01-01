import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { TawkToScript } from "@/components/layout/tawk-to-script";
import { PromotionalBar } from "@/components/layout/promotional-bar";
import { FloatingNav } from "@/components/layout/floating-nav";
import { SiteFooter } from "@/components/layout/site-footer";

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
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
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
        <TawkToScript />
        <PromotionalBar />
        <FloatingNav />
        <main className="flex-1 w-full pt-[120px] md:pt-[144px]">
          {children}
        </main>
        <div className="w-full mt-auto">
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
