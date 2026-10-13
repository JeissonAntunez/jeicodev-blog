import type { Metadata } from "next";
import "./globals.css";
import "./themes.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, isPublicSite } from "@/lib/site";
import { themeBootstrap } from "@/lib/theme";
export const metadata: Metadata = {
 metadataBase: new URL(site.url), title: { default: `${site.name} · Ideas para tu día a día`, template: `%s · ${site.name}` }, description: site.description,
 openGraph: { type: "website", locale: "es_PE", siteName: site.name, title: site.name, description: site.description },
 robots: !isPublicSite ? { index: false, follow: false } : { index: true, follow: true },
 verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
 alternates: { types: { "application/rss+xml": "/feed.xml" } },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es" data-theme="dark" data-theme-preference="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeBootstrap }}/></head><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido" className="shell main-content">{children}</main><Footer/></body></html>; }
