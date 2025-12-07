"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function ToutesActivitesPage() {
  const allActivities = [
    {
      category: "Communautés & associations",
      color: "from-[#B8860B] via-[#D4AF37] to-[#B8860B]",
      items: [
        { title: "Club sportif", icon: "⚽", description: "Site pour votre club de football, basketball, tennis et autres sports" },
        { title: "Crèche / école / classe", icon: "👦", description: "Plateforme pour votre établissement scolaire ou classe" },
        { title: "Association animale (adoption, dons)", icon: "🐶", description: "Site pour refuge d'animaux, adoptions et collecte de dons" },
        { title: "Team gaming / e-sport", icon: "🎮", description: "Site pour votre équipe de gaming avec classements et tournois" },
        { title: "Groupe musical / danse", icon: "🎤", description: "Site pour votre ensemble musical ou troupe de danse" }
      ]
    },
    {
      category: "Professionnels",
      color: "from-[#C5A572] via-[#D4AF37] to-[#C5A572]",
      items: [
        { title: "Site vitrine professionnel", icon: "💼", description: "Présentez vos services avec élégance et professionnalisme" },
        { title: "Boutique simple (catalogue sans paiement)", icon: "🛍️", description: "Catalogue de produits pour présenter votre offre" },
        { title: "Coach / bien-être / thérapeute", icon: "🧘", description: "Site pour coach de vie, thérapeute ou praticien bien-être" },
        { title: "Femme de ménage / services", icon: "🧹", description: "Site pour services à domicile et ménage" },
        { title: "Location saisonnière (Airbnb / gîte)", icon: "🏠", description: "Présentez votre location de vacances avec photos et réservations" },
        { title: "Artisans (plombier, peintre, maçon, etc.)", icon: "👷", description: "Site pour artisan avec portfolio de réalisations" },
        { title: "Coiffure / esthétique / beauté", icon: "💇", description: "Site pour salon de coiffure ou institut de beauté" },
        { title: "Auto-entrepreneurs de tous secteurs", icon: "💼", description: "Site professionnel pour freelances et entrepreneurs" }
      ]
    },
    {
      category: "Créatifs & artistiques",
      color: "from-[#DAA520] via-[#D4AF37] to-[#DAA520]",
      items: [
        { title: "Portfolio artiste", icon: "🎨", description: "Galerie pour présenter vos œuvres artistiques" },
        { title: "Portfolio photographe", icon: "📸", description: "Site pour photographe avec galeries et services" },
        { title: "Site artiste / DJ / musique", icon: "🎧", description: "Page pour musicien, DJ avec morceaux et événements" },
        { title: "Site créatif (modèles, designers)", icon: "🎬", description: "Portfolio pour créatifs, modèles et designers" },
        { title: "Blog personnel", icon: "📖", description: "Blog pour partager vos articles et passions" }
      ]
    },
    {
      category: "Personnels & émotionnels",
      color: "from-[#C5A572] via-[#DAA520] to-[#C5A572]",
      items: [
        { title: "Site hommage / mémorial", icon: "🕊️", description: "Page en mémoire d'un être cher avec témoignages" },
        { title: "Histoire d'amour", icon: "💝", description: "Racontez votre histoire d'amour en timeline romantique" },
        { title: "Album bébé / enfants", icon: "👶", description: "Album photo pour immortaliser la croissance de bébé" },
        { title: "Album animal de compagnie", icon: "🐾", description: "Page dédiée à votre animal avec photos et anecdotes" },
        { title: "Album photo / galerie souvenirs", icon: "📷", description: "Galerie de photos pour partager vos souvenirs" }
      ]
    },
    {
      category: "Événementiels",
      color: "from-[#B8860B] via-[#D4AF37] to-[#B8860B]",
      items: [
        { title: "Site de mariage", icon: "💍", description: "Site pour votre mariage avec RSVP et infos pratiques" },
        { title: "Pré-mariage / Save The Date", icon: "💌", description: "Annoncez votre mariage avec style" },
        { title: "Site d'anniversaire", icon: "🎂", description: "Invitations et informations pour votre anniversaire" },
        { title: "Site de baptême", icon: "🙏", description: "Page pour baptême avec détails de la cérémonie" },
        { title: "Site de baby shower", icon: "🍼", description: "Annoncez l'arrivée de bébé avec une page dédiée" },
        { title: "Gender reveal", icon: "🎀", description: "Révélez le sexe de bébé de façon originale" },
        { title: "EVJF / EVG", icon: "🎉", description: "Page pour enterrement de vie de célibataire" },
        { title: "Cérémonie de diplôme", icon: "🎓", description: "Célébrez votre réussite académique" },
        { title: "Fête de famille / réunion familiale", icon: "🥂", description: "Organisez votre événement familial" },
        { title: "Événements / spectacles / soirées", icon: "🎭", description: "Site pour événements culturels et spectacles" },
        { title: "Souvenirs de voyage", icon: "✈️", description: "Partagez vos aventures et photos de voyage" }
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-16">
        {/* Logo en arrière-plan fixe */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[800px] h-[800px] opacity-[0.03]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=1000&height=1000&resize=contain"
              alt="EverInSite Background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #1a1a1a)' }}>
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6 border" style={{ color: '#D4AF37', borderColor: 'rgba(212, 175, 55, 0.3)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-script font-bold gold-text-gradient mb-6">
                Toutes les activités 🌟
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Découvrez tous les types de sites que je peux créer pour vous
              </p>
              
              {/* Message personnalisé */}
              <div className="max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.15), rgba(197,165,114,0.15), rgba(212,175,55,0.15))', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(212,175,55,0.2)' }}>
                <div className="text-4xl mb-4">💡</div>
                <h2 className="text-2xl font-bold gold-text-gradient mb-3">
                  Vous ne trouvez pas ce que vous cherchez ?
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  <strong style={{ color: '#D4AF37' }}>Chaque site est unique et personnalisé !</strong> Si vous avez un projet spécifique en tête qui n&apos;est pas dans cette liste, 
                  <span className="font-semibold" style={{ color: '#D4AF37' }}> contactez-moi</span> et je créerai exactement le site dont vous rêvez.
                </p>
                <p className="text-base text-gray-400 italic">
                  ✨ Aucune limite à votre imagination - je m&apos;adapte à tous vos besoins !
                </p>
                <Link href="/contact">
                  <Button size="lg" className="mt-6 gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-lg" style={{ boxShadow: '0 10px 30px rgba(212,175,55,0.5)' }}>
                    Contactez-moi pour un projet sur mesure 💌
                  </Button>
                </Link>
              </div>
            </div>

            {/* Liste de toutes les activités par catégorie */}
            <div className="space-y-16">
              {allActivities.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="text-center mb-8">
                    <h2 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                      {category.category}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 backdrop-blur-sm group" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }}>
                        <CardContent className="p-6">
                          <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform">{item.icon}</div>
                          <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#D4AF37' }}>
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-center leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA final */}
            <div className="text-center mt-16 p-12 backdrop-blur-sm rounded-3xl shadow-2xl border-2" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(197,165,114,0.05))', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(212,175,55,0.2)' }}>
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold gold-text-gradient mb-4">
                Prêt à créer votre site ?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Que votre projet soit dans cette liste ou complètement unique, je suis là pour le réaliser avec vous !
              </p>
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-lg" style={{ boxShadow: '0 10px 30px rgba(212,175,55,0.5)' }}>
                  Démarrer mon projet ✨
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}