"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MaintenancePage() {
  const services = [
    {
      emoji: "🔹",
      title: "Maintenance complète",
      description: "Surveillance du site, corrections éventuelles, sécurité et bon fonctionnement."
    },
    {
      emoji: "🔹",
      title: "Mises à jour",
      description: "Mise à jour du contenu, des textes, des images, ou des extensions nécessaires."
    },
    {
      emoji: "🔹",
      title: "Modifications",
      description: "Petits changements, ajustements, optimisation des pages, nouvelles sections, etc."
    },
    {
      emoji: "🔹",
      title: "Ajout de nouvelles pages",
      description: "Création de pages supplémentaires selon vos besoins (nouveau service, portfolio, événements…)."
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
              🔧✨ Maintenance & Suivi ✨💻
            </h1>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide" style={{ color: '#D4AF37' }}>
                Votre site web & Tarifs
              </p>
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              En plus de la création de votre site, je m'occupe également de tout le suivi technique pour qu'il reste toujours à jour, sécurisé et évolutif.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-script font-bold text-center mb-8 gold-text-gradient">
              Voici ce que je peux gérer pour vous :
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="backdrop-blur-sm border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 10px 30px rgba(212,175,55,0.2)'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0" style={{ color: '#D4AF37' }}>
                        {service.emoji}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl transition-all gold-gradient text-black font-semibold hover:scale-105" style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Contactez-moi pour en savoir plus 💌</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
