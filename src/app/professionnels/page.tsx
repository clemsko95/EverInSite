"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProfessionnelsPage() {
  const subcategories = [
    {
      title: "Site vitrine professionnel",
      icon: "💼",
      description: "Présentez votre entreprise et vos services professionnellement"
    },
    {
      title: "Boutique simple (catalogue sans paiement)",
      icon: "🛍️",
      description: "Affichez vos produits avec un catalogue élégant"
    },
    {
      title: "Coach / bien-être / thérapeute",
      icon: "🧘",
      description: "Site pour coach de vie, thérapeute ou professionnel du bien-être"
    },
    {
      title: "Femme de ménage / services",
      icon: "🧹",
      description: "Présentez vos services de ménage et d'entretien"
    },
    {
      title: "Location saisonnière (Airbnb / gîte)",
      icon: "🔧",
      description: "Site pour votre location de vacances ou gîte"
    },
    {
      title: "Artisans (plombier, peintre, maçon, etc.)",
      icon: "👩",
      description: "Plateforme pour artisans et professionnels du bâtiment"
    },
    {
      title: "Coiffure / esthétique / beauté",
      icon: "💇",
      description: "Site pour salon de coiffure, esthétique ou beauté"
    },
    {
      title: "Auto-entrepreneurs de tous secteurs",
      icon: "💼",
      description: "Solution pour tous les auto-entrepreneurs et freelances"
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-script font-bold text-primary mb-6">
                Professionnels
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Solutions web professionnelles pour développer votre activité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <Button className="w-full">Créer mon site</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
