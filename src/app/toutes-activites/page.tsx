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
        { title: "Groupe musical / danse", icon: "🎤", description: "Site pour votre ensemble musical ou troupe de danse" },
        { title: "Association caritative", icon: "🤝", description: "Plateforme pour collecter des dons et présenter vos actions solidaires" }
      ]
    },
    {
      category: "Professionnels & Services",
      color: "from-[#C5A572] via-[#D4AF37] to-[#C5A572]",
      items: [
        { title: "Site vitrine professionnel", icon: "💼", description: "Présentez vos services avec élégance et professionnalisme" },
        { title: "Boutique simple (catalogue sans paiement)", icon: "🛍️", description: "Catalogue de produits pour présenter votre offre" },
        { title: "Coach / bien-être / thérapeute", icon: "🧘", description: "Site pour coach de vie, thérapeute ou praticien bien-être" },
        { title: "Femme de ménage / services", icon: "🧹", description: "Site pour services à domicile et ménage" },
        { title: "Location saisonnière (Airbnb / gîte)", icon: "🏠", description: "Présentez votre location de vacances avec photos et réservations" },
        { title: "Artisans (plombier, peintre, maçon, etc.)", icon: "👷", description: "Site pour artisan avec portfolio de réalisations" },
        { title: "Coiffure / esthétique / beauté", icon: "💇", description: "Site pour salon de coiffure ou institut de beauté" },
        { title: "Auto-entrepreneurs de tous secteurs", icon: "💼", description: "Site professionnel pour freelances et entrepreneurs" },
        { title: "Garage / Mécanique", icon: "🚗", description: "Présentez vos services d'entretien et réparation automobile" },
        { title: "Services de sécurité", icon: "🛡️", description: "Site pour agence de gardiennage et sécurité" }
      ]
    },
    {
      category: "Hôtellerie & Restauration",
      color: "from-[#B8860B] via-[#D4AF37] to-[#B8860B]",
      items: [
        { title: "Restaurant / Café / Bar", icon: "🍽️", description: "Présentez votre carte, votre ambiance et facilitez les réservations" },
        { title: "Hôtel / Chambre d'hôtes", icon: "🏨", description: "Vitrine pour vos chambres, services et environnement" },
        { title: "Food Truck / Traiteur", icon: "🚚", description: "Informez sur vos emplacements et prestations événementielles" }
      ]
    },
    {
      category: "Santé & Juridique",
      color: "from-[#DAA520] via-[#D4AF37] to-[#DAA520]",
      items: [
        { title: "Cabinet Médical / Dentaire", icon: "🏥", description: "Présentation du cabinet, des praticiens et informations pratiques" },
        { title: "Avocat / Notaire", icon: "⚖️", description: "Site institutionnel pour votre cabinet et vos domaines d'expertise" },
        { title: "Psychologue / Thérapeute", icon: "🧠", description: "Espace de confiance pour présenter votre approche et vos consultations" },
        { title: "Pharmacie", icon: "💊", description: "Informations pratiques, horaires et services de santé de proximité" }
      ]
    },
    {
      category: "Immobilier & Architecture",
      color: "from-[#C5A572] via-[#DAA520] to-[#C5A572]",
      items: [
        { title: "Agence immobilière", icon: "🏠", description: "Vitrine pour vos mandats et services de transaction" },
        { title: "Architecte / Décorateur", icon: "📐", description: "Portfolio de vos projets, plans et réalisations d'intérieur" },
        { title: "Entreprise de BTP / Travaux", icon: "🏗️", description: "Présentez vos chantiers et demandez des devis en ligne" }
      ]
    },
    {
      category: "Éducation & Formation",
      color: "from-[#B8860B] via-[#D4AF37] to-[#B8860B]",
      items: [
        { title: "Formation en ligne / E-learning", icon: "💻", description: "Plateforme pour vendre et diffuser vos cours et formations" },
        { title: "Soutien scolaire", icon: "📚", description: "Site pour professeurs particuliers ou centres d'aide aux devoirs" },
        { title: "Auto-école", icon: "🚗", description: "Présentez vos forfaits permis et facilitez l'inscription" }
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

        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #1a1a1a)' }}>
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-4 sm:mb-6 border text-sm sm:text-base" style={{ color: '#D4AF37', borderColor: 'rgba(212, 175, 55, 0.3)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-script font-bold gold-text-gradient mb-4 sm:mb-6">
                Toutes les activités 🌟
              </h1>
              <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
                Découvrez tous les types de sites que je peux créer pour vous
              </p>
              
              {/* Message personnalisé */}
              <div className="max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.15), rgba(197,165,114,0.15), rgba(212,175,55,0.15))', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(212,175,55,0.2)' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💡</div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold gold-text-gradient mb-2 sm:mb-3 px-2">
                  Vous ne trouvez pas ce que vous cherchez ?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 px-2">
                  <strong style={{ color: '#D4AF37' }}>Chaque site est unique et personnalisé !</strong> Si vous avez un projet spécifique en tête qui n&apos;est pas dans cette liste, 
                  <span className="font-semibold" style={{ color: '#D4AF37' }}> contactez-moi</span> et je créerai exactement le site dont vous rêvez.
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 italic mb-4 sm:mb-6 px-2">
                  ✨ Aucune limite à votre imagination - je m&apos;adapte à tous vos besoins !
                </p>
                <div className="px-2">
                  <Button asChild size="lg" className="w-full text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-lg" style={{ boxShadow: '0 10px 30px rgba(212,175,55,0.5)' }}>
                    <Link href="/contact">Contactez-moi pour un projet sur mesure 💌</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Liste de toutes les activités par catégorie */}
            <div className="space-y-12 sm:space-y-16">
              {allActivities.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block px-2`}>
                      {category.category}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.items.map((item, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 backdrop-blur-sm group" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }}>
                        <CardContent className="p-4 sm:p-6 flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 border-2 bg-black/40 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                            <span className="text-3xl sm:text-4xl">{item.icon}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center" style={{ color: '#D4AF37' }}>
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-center leading-relaxed text-xs sm:text-sm">
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
            <div className="text-center mt-12 sm:mt-16 p-6 sm:p-8 lg:p-12 backdrop-blur-sm rounded-3xl shadow-2xl border-2" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(197,165,114,0.05))', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(212,175,55,0.2)' }}>
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🚀</div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold gold-text-gradient mb-3 sm:mb-4 px-2">
                Prêt à créer votre site ?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Que votre projet soit dans cette liste ou complètement unique, je suis là pour le réaliser avec vous !
              </p>
              <div className="flex justify-center px-2">
                <Button asChild size="lg" className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-lg" style={{ boxShadow: '0 10px 30px rgba(212,175,55,0.5)' }}>
                  <Link href="/contact">Démarrer mon projet ✨</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}