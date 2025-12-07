"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import WelcomeOverlay from "@/components/WelcomeOverlay"
import Image from "next/image"

export default function Home() {
  const categories = [
    {
      title: "Toutes les activités",
      description: "Découvrez la liste complète de tous les types de sites que je peux créer pour vous",
      details: [
        "🌟 Plus de 40 types de sites différents",
        "💡 Projets personnalisés sur mesure",
        "✨ Aucune limite à votre imagination",
        "🎯 Trouvez exactement ce qu'il vous faut"
      ],
      href: "/toutes-activites",
      gradient: "from-[#B8860B] via-[#D4AF37] to-[#B8860B]",
      emoji: "📋"
    },
    {
      title: "Contactez-moi",
      description: "Parlez-moi de votre projet et je créerai votre site web unique et personnalisé",
      details: [
        "✉️ Formulaire de contact simple",
        "⚡ Réponse rapide garantie",
        "🎯 Devis personnalisé gratuit",
        "🤝 Accompagnement complet"
      ],
      href: "/contact",
      gradient: "from-[#C5A572] via-[#D4AF37] to-[#C5A572]",
      emoji: "📬"
    }
  ]

  return (
    <>
      <WelcomeOverlay />
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

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #000000)' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)' }}></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-script font-bold mb-6 gold-text-gradient">
              Je crée votre site parfait ✨
            </h1>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide" style={{ color: '#D4AF37' }}>
                𝙑𝙤𝙩𝙧𝙚 𝙨𝙞𝙩𝙚. 𝙑𝙤𝙩𝙧𝙚 𝙫𝙤𝙞𝙭. 𝙇𝙚 𝙢𝙤𝙣𝙙𝙚 𝙫𝙤𝙪𝙨 𝙫𝙤𝙞𝙩.
              </p>
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Partagez-moi votre vision et je donnerai vie au site web de vos rêves : professionnel, créatif, personnel ou événementiel
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl transition-all gold-gradient text-black font-semibold hover:scale-105" style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Contactez-moi 💌</Link>
            </Button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #0a0a0a, #000000, #0a0a0a)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-script font-bold text-center mb-4 gold-text-gradient">
              Explorez mes services 🌟
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Découvrez toutes les activités que je propose et contactez-moi pour votre projet
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {categories.map((category) => (
                <Link key={category.href} href={category.href}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden group backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }}>
                    <div className={`h-3 bg-gradient-to-r ${category.gradient}`}></div>
                    <CardContent className="p-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`} style={{ boxShadow: '0 10px 25px rgba(212,175,55,0.5)' }}>
                        <span className="text-4xl">{category.emoji}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#C5A572] transition-colors" style={{ color: '#D4AF37' }}>
                        {category.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4 font-medium">
                        {category.description}
                      </p>
                      
                      {/* Details list with emojis */}
                      <div className="space-y-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
                        {category.details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="mt-0.5">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: '#DAA520' }}>
                        En savoir plus
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #1a1a1a)' }}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-script font-bold mb-12 gold-text-gradient">
              Pourquoi me choisir ? 💎
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(197,165,114,0.05))', borderColor: 'rgba(212, 175, 55, 0.2)', boxShadow: '0 10px 30px rgba(212,175,55,0.1)' }}>
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4AF37' }}>Design moderne & unique</h3>
                <p className="text-gray-300 leading-relaxed">Je crée des designs élégants et personnalisés qui correspondent parfaitement à votre vision et vous démarquent</p>
              </div>
              
              <div className="p-8 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(197,165,114,0.05))', borderColor: 'rgba(212, 175, 55, 0.2)', boxShadow: '0 10px 30px rgba(212,175,55,0.1)' }}>
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4AF37' }}>Simple et rapide</h3>
                <p className="text-gray-300 leading-relaxed">Vous me dites ce que vous voulez, je m'occupe de tout. Pas de compétences techniques nécessaires de votre côté</p>
              </div>
              
              <div className="p-8 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(197,165,114,0.05))', borderColor: 'rgba(212, 175, 55, 0.2)', boxShadow: '0 10px 30px rgba(212,175,55,0.1)' }}>
                <div className="text-6xl mb-4">💝</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4AF37' }}>Pour tous vos projets</h3>
                <p className="text-gray-300 leading-relaxed">Du site professionnel au site émotionnel, je m'adapte à tous vos besoins et envies avec passion</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}