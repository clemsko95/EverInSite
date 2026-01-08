import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

// Force redeploy - Fixed Google Search Console verification meta tag format
export const metadata: Metadata = {
  metadataBase: new URL('https://everinsite.vercel.app'),
  title: {
    default: "EverInSite - Créez votre site web parfait | Création de sites professionnels",
    template: "%s | EverInSite"
  },
  description: "EverInSite crée des sites web modernes et personnalisés pour tous vos projets : sites professionnels, créatifs, personnels, événementiels. Design unique, rapide et sur-mesure.",
  keywords: [
    "EverInSite",
    "création site web",
    "site web professionnel",
    "designer web",
    "site internet personnalisé",
    "site vitrine",
    "site événementiel",
    "création site sur mesure",
    "web design moderne",
    "développeur web"
  ],
  authors: [{ name: "EverInSite" }],
  creator: "EverInSite",
  publisher: "EverInSite",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://everinsite.vercel.app',
    siteName: 'EverInSite',
    title: 'EverInSite - Créez votre site web parfait',
    description: 'Je crée des sites web modernes et personnalisés pour tous vos projets. Design unique, rapide et sur-mesure.',
    images: [{
      url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=1200&height=630&resize=contain',
      width: 1200,
      height: 630,
      alt: 'EverInSite - Création de sites web'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EverInSite - Créez votre site web parfait',
    description: 'Je crée des sites web modernes et personnalisés pour tous vos projets',
    images: ['https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=1200&height=630&resize=contain']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://everinsite.vercel.app'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6bd7d00a-79da-4038-9e6d-d6356c723130"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}