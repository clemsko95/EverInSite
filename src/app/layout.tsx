import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

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
  verification: {
    google: 'google387f99f'
  },
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
      'max-snippet': -1,
    },
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
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://everinsite.vercel.app" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "EverInSite",
              "description": "Création de sites web modernes et personnalisés pour tous types de projets",
              "url": "https://everinsite.vercel.app",
              "logo": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG",
              "priceRange": "$$",
              "areaServed": "FR",
              "serviceType": ["Création de sites web", "Web design", "Développement web"],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "French"
              }
            })
          }}
        />
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