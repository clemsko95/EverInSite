"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Info } from "lucide-react"
import { useState } from "react"

export default function TarifsPage() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  const pricingOptions = [
    {
      emoji: "🌐",
      title: "Création de site vitrine",
      subtitle: "(pros ou particuliers)",
      price: "Entre 120€ et 400€",
      description: "Selon : nombre de pages, design, personnalisations, fonctionnalités souhaitées.",
      details: {
        intro: "Un site vitrine sert uniquement à présenter une activité.",
        sections: [
          {
            title: "➜ À quoi ça sert ?",
            items: [
              "Montrer qui vous êtes",
              "Présenter vos services",
              "Donner des informations (horaires, contact, localisation)"
            ]
          },
          {
            title: "➜ Ce qu'il contient :",
            items: [
              "1 à 5 pages simples",
              "Un design propre",
              "Un formulaire de contact",
              "Pas de fonctionnalités complexes"
            ]
          },
          {
            title: "➜ En résumé :",
            items: [
              "👉 Site simple, informatif, sans interactions avancées.",
              "📌 Il ne permet pas de vendre, réserver ou gérer des comptes."
            ]
          }
        ]
      }
    },
    {
      emoji: "🛒",
      title: "Site avec fonctionnalités avancées",
      subtitle: "(boutique en ligne, réservations, formulaires complexes…)",
      price: "Entre 350€ et 800€",
      description: "",
      details: {
        intro: "Un site avancé sert à interagir, automatiser ou vendre.",
        sections: [
          {
            title: "➜ À quoi ça sert ?",
            items: [
              "Boutique en ligne (paiements, panier)",
              "Prises de rendez-vous / réservations",
              "Formulaires complexes",
              "Espace client / tableau de bord",
              "Gestion de produits ou de contenu"
            ]
          },
          {
            title: "➜ Ce qu'il contient :",
            items: [
              "Pages + fonctionnalités personnalisées",
              "Intégrations (paiement, calendrier…)",
              "Développement sur mesure"
            ]
          },
          {
            title: "➜ En résumé :",
            items: [
              "👉 Site interactif, avec fonctions avancées et outils connectés.",
              "📌 Il permet de vendre, réserver, gérer des données, automatiser."
            ]
          }
        ]
      }
    },
    {
      emoji: "🔧",
      title: "Maintenance mensuelle",
      subtitle: "(optionnelle)",
      price: "Entre 15€ et 40€ / mois",
      description: "(selon la fréquence des modifications, mises à jour, sauvegardes…)",
      details: {
        intro: "Maintenance mensuelle (optionnelle)",
        sections: [
          {
            title: "",
            items: [
              "Entre 15€ et 40€/mois",
              "Comprend : mises à jour, sauvegardes, petites modifications, optimisation et surveillance du site.",
              "Le tarif varie selon la fréquence et le volume d'interventions souhaitées."
            ]
          }
        ]
      }
    },
    {
      emoji: "📝",
      title: "Ajout de nouvelles pages",
      subtitle: "",
      price: "Entre 20€ et 60€ par page",
      description: "(selon le contenu, images, texte ou création graphique)",
      details: {
        intro: "Ajout de nouvelles pages",
        sections: [
          {
            title: "",
            items: [
              "Entre 20€ et 60€ par page",
              "Selon la quantité de contenu (texte, images), la mise en forme et les besoins graphiques éventuels."
            ]
          }
        ]
      }
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
              💰 Tarifs – ordre d'idée
            </h1>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide" style={{ color: '#D4AF37' }}>
                Des prix transparents et adaptés
              </p>
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Voici une fourchette de prix indicative, car chaque projet est unique :
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-6 mb-12">
            {pricingOptions.map((option, index) => (
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
                    <div className="text-4xl flex-shrink-0" style={{ color: '#D4AF37' }}>
                      {option.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1" style={{ color: '#D4AF37' }}>
                        {option.title}
                      </h3>
                      {option.subtitle && (
                        <p className="text-gray-400 text-sm mb-3">
                          {option.subtitle}
                        </p>
                      )}
                      <p className="text-2xl font-bold mb-2" style={{ color: '#DAA520' }}>
                        {option.price}
                      </p>
                      {option.description && (
                        <p className="text-gray-300 leading-relaxed">
                          {option.description}
                        </p>
                      )}
                    </div>
                    <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2 border-2 hover:scale-105 transition-all"
                          style={{ 
                            borderColor: 'rgba(212, 175, 55, 0.5)',
                            color: '#D4AF37',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)'
                          }}
                        >
                          <Info className="w-4 h-4" />
                          Détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent 
                        className="max-w-2xl max-h-[80vh] overflow-y-auto"
                        style={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                          borderColor: 'rgba(212, 175, 55, 0.5)',
                          border: '2px solid'
                        }}
                      >
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold flex items-center gap-3" style={{ color: '#D4AF37' }}>
                            <span className="text-3xl">{option.emoji}</span>
                            {option.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 pt-4">
                          <p className="text-lg text-gray-300 font-semibold">
                            {option.details.intro}
                          </p>
                          {option.details.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-3">
                              {section.title && (
                                <h4 className="text-lg font-semibold" style={{ color: '#D4AF37' }}>
                                  {section.title}
                                </h4>
                              )}
                              <ul className="space-y-2">
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx} className="text-gray-300 leading-relaxed pl-4">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Note */}
          <Card 
            className="backdrop-blur-sm border-2 mb-12"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.1)', 
              borderColor: 'rgba(212, 175, 55, 0.4)',
              boxShadow: '0 10px 30px rgba(212,175,55,0.3)'
            }}
          >
            <CardContent className="p-6 text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                💡 <span className="font-semibold" style={{ color: '#D4AF37' }}>Chaque projet est unique</span> – ces tarifs sont donnés à titre indicatif. 
                N'hésitez pas à me contacter pour un devis personnalisé et gratuit !
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl transition-all gold-gradient text-black font-semibold hover:scale-105" style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Demandez votre devis gratuit 💌</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}