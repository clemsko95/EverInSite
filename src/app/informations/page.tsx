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
        "📛 Nom de votre entreprise / marque (si pro)",
        "🏷️ Votre slogan (optionnel)",
        "📍 Localisation (si utile)"
      ]
    },
    {
      title: "2. Votre activité",
      items: [
        "📝 Description claire de ce que vous faites",
        "🎯 Vos objectifs (vendre, présenter, attirer des clients, portfolio…)",
        "⭐ Vos forces / valeurs / spécialités"
      ]
    },
    {
      title: "3. Contenu texte",
      description: "📝 Les textes complets que vous souhaitez voir sur le site :",
      items: [
        "• Présentation",
        "• Services / prestations",
        "• Tarifs (si souhaité)",
        "• À propos / histoire",
        "• Questions fréquentes (FAQ)",
        "• Mentions légales / CGV (si e-commerce)"
      ],
      note: "(Si vous n'en avez pas, je peux vous aider à les rédiger.)"
    },
    {
      title: "4. Images & médias",
      items: [
        "🖼️ Photos (de vous, de vos produits, de vos services, de votre établissement…)",
        "🎥 Vidéos (si vous en avez)",
        "🎨 Couleurs / styles que vous aimez",
        "🔤 Police / ambiance souhaitée (moderne, chic, fun, minimaliste…)"
      ]
    },
    {
      title: "5. Réseaux sociaux & liens",
      items: [
        "📲 Vos réseaux sociaux (Instagram, Facebook, TikTok, etc.)",
        "🔗 Liens utiles (Google Maps, calendriers, booking…)"
      ]
    },
    {
      title: "6. Fonctionnalités souhaitées",
      description: "Cochez / indiquez ce dont vous avez besoin :",
      items: [
        "🛒 Boutique en ligne",
        "📅 Prise de rendez-vous",
        "🧾 Formulaire de contact",
        "💬 Chat en direct",
        "🖼️ Portfolio / galerie photos",
        "📁 Téléchargements (catalogues, fichiers…)",
        "🔐 Espace membre",
        "➕ Autres besoins spécifiques…"
      ]
    },
    {
      title: "7. Modèles inspirants",
      items: [
        "📌 Screenshots ou liens vers des sites que vous aimez",
        "🖌️ Ce que vous aimez / n'aimez pas (couleurs, style, structure…)"
      ]
    },
    {
      title: "8. Informations techniques",
      description: "(Si vous en avez déjà)",
      items: [
        "🌐 Nom de domaine",
        "🏠 Hébergement",
        "📧 Adresse email professionnelle"
      ]
    },
    {
      title: "9. Contact",
      items: [
        "📞 Téléphone",
        "📧 Email",
        "🕑 Horaires (si entreprise)"
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

          {/* Conclusion Card */}
          <Card 
            className="backdrop-blur-sm border-2 mb-12"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.1)', 
              borderColor: 'rgba(212, 175, 55, 0.4)',
              boxShadow: '0 10px 30px rgba(212,175,55,0.3)'
            }}
          >
            <CardContent className="p-8">
              <h3 className="text-3xl font-script font-bold mb-6 text-center gold-text-gradient">
                ✨ Conclusion
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                Plus vous me donnez d'informations, plus votre site sera :
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {["✔️ Clair", "✔️ Professionnel", "✔️ Personnalisé", "✔️ Adapté à vos besoins", "✔️ Attrayant pour vos visiteurs"].map((benefit, index) => (
                  <div key={index} className="text-center min-w-[140px]">
                    <p className="font-semibold text-lg" style={{ color: '#D4AF37' }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl transition-all gold-gradient text-black font-semibold hover:scale-105" style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Prêt à commencer ? Contactez-moi 💌</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}