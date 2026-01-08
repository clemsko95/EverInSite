"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InformationsPage() {
  const sections = [
    {
      title: "1. Informations générales",
      items: [
        "👤 Nom / Prénom",
        "📛 Nom de votre entreprise / marque (si professionnel)",
        "🏷️ Slogan (optionnel)",
        "📍 Localisation (si utile pour le contenu du site)"
      ]
    },
    {
      title: "2. Votre activité",
      items: [
        "📝 Description claire de votre activité",
        "🎯 Objectifs du site (présenter, vendre, générer des contacts, portfolio, etc.)",
        "⭐ Vos valeurs, points forts ou spécialités"
      ]
    },
    {
      title: "3. Contenu texte",
      description: "📝 Les textes à intégrer sur le site (si disponibles) :",
      items: [
        "• Présentation",
        "• Services / prestations",
        "• Tarifs (si souhaité)",
        "• À propos",
        "• FAQ (optionnelle)",
        "• Mentions légales / CGV (si nécessaires)"
      ],
      note: "👉 Si vous n’avez pas les textes, je peux vous aider à les rédiger."
    },
    {
      title: "4. Images & identité visuelle",
      items: [
        "🖼️ Photos (vous, vos produits, vos services, votre activité…)",
        "🎥 Vidéos (si disponibles)",
        "🎨 Couleurs ou styles souhaités",
        "🔤 Ambiance générale (moderne, minimaliste, chic, dynamique, etc.)"
      ]
    },
    {
      title: "5. Réseaux sociaux & liens",
      items: [
        "📲 Liens vers vos réseaux sociaux",
        "🔗 Liens utiles (Google Maps, prise de rendez-vous, documents, etc.)"
      ]
    },
    {
      title: "6. Fonctionnalités souhaitées",
      description: "Merci d’indiquer les fonctionnalités nécessaires :",
      items: [
        "🧾 Formulaire de contact",
        "📅 Prise de rendez-vous",
        "🛒 Boutique en ligne",
        "🖼️ Galerie / portfolio",
        "📁 Téléchargement de fichiers",
        "🔐 Espace membre",
        "➕ Autres besoins spécifiques"
      ]
    },
    {
      title: "7. Inspirations",
      items: [
        "📌 Liens ou captures de sites que vous aimez",
        "🖌️ Éléments appréciés ou à éviter (couleurs, styles, structure…)"
      ]
    },
    {
      title: "8. Nom de domaine (si existant)",
      items: [
        "🌐 Nom de domaine (si vous en possédez déjà un)",
        "👉 L’hébergement et la configuration technique ne sont pas inclus."
      ]
    },
    {
      title: "9. Informations de contact",
      items: [
        "📞 Numéro de téléphone",
        "📧 Adresse email",
        "🕑 Horaires (si applicable)"
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-24 pb-20" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #1a1a1a)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 gold-text-gradient">
              🎨✨ Informations nécessaires ✨💻
            </h1>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide" style={{ color: '#D4AF37' }}>
                Pour la création de votre site web
              </p>
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Pour que votre site soit clair, professionnel et parfaitement adapté à vos besoins, voici la liste des informations que j'aurai besoin de votre part.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Merci de me les transmettre 📨 afin que je puisse créer un site à votre image, complet et bien structuré ! 🌟
            </p>
          </div>

          {/* Information Sections */}
          <div className="space-y-6 mb-12">
            {sections.map((section, index) => (
              <Card 
                key={index}
                className="backdrop-blur-sm border-2 hover:shadow-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.2)'
                }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                    🔹 {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-gray-300 mb-3 font-medium">
                      {section.description}
                    </p>
                  )}
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-300 leading-relaxed pl-4">
                        {item}
                      </p>
                    ))}
                  </div>
                  {section.note && (
                    <p className="text-gray-400 italic mt-3 text-sm">
                      {section.note}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Section */}
          <Card 
            className="backdrop-blur-sm border-2 mb-6"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.05)', 
              borderColor: 'rgba(212, 175, 55, 0.3)',
            }}
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                ℹ️ Important
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Le site est livré clé en main et hébergé sur le compte du client.<br />
                L’hébergement, les emails et la gestion serveur ne sont pas inclus.
              </p>
            </CardContent>
          </Card>

          {/* Result Card */}
          <Card 
            className="backdrop-blur-sm border-2 mb-12"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.1)', 
              borderColor: 'rgba(212, 175, 55, 0.4)',
              boxShadow: '0 10px 30px rgba(212,175,55,0.3)'
            }}
          >
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-script font-bold mb-4 sm:mb-6 text-center gold-text-gradient">
                ✅ Résultat
              </h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8">
                {[
                  "✔️ Plus aucune confusion sur l’hébergement",
                  "✔️ Client bien cadré dès le départ",
                  "✔️ Positionnement pro",
                  "✔️ Zéro prise de tête technique"
                ].map((benefit, index) => (
                  <div key={index} className="text-center w-full sm:w-auto">
                    <p className="font-semibold text-base sm:text-lg" style={{ color: '#D4AF37' }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center flex justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-2xl transition-all gold-gradient text-black font-semibold hover:scale-105" style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Prêt à commencer ? Contactez-moi 💌</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}