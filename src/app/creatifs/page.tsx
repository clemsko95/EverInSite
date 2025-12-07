"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CreatifsPage() {
  const subcategories = [
    {
      title: "Portfolio artiste",
      icon: "🎨",
      description: "Présentez votre travail artistique avec élégance"
    },
    {
      title: "Portfolio photographe",
      icon: "📷",
      description: "Galerie professionnelle pour vos photographies"
    },
    {
      title: "Site artiste / DJ / musique",
      icon: "👨‍🎤",
      description: "Plateforme pour musiciens, DJ et artistes de scène"
    },
    {
      title: "Site créatif (modèles, designers)",
      icon: "🎬",
      description: "Portfolio pour modèles, designers et créatifs"
    },
    {
      title: "Blog personnel",
      icon: "📖",
      description: "Votre espace d'expression et de partage personnel"
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-script font-bold text-primary mb-6">
                Créatifs & artistiques
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mettez en valeur votre talent et votre créativité
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
