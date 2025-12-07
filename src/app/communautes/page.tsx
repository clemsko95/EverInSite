"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CommunautesPage() {
  const subcategories = [
    {
      title: "Club sportif",
      icon: "⚽",
      description: "Site pour votre club de football, basketball, tennis et autres sports"
    },
    {
      title: "Crèche / école / classe",
      icon: "👦",
      description: "Plateforme pour votre établissement scolaire ou classe"
    },
    {
      title: "Association animale (adoption, dons)",
      icon: "🐶",
      description: "Site pour refuge d'animaux, adoptions et collecte de dons"
    },
    {
      title: "Groupe musical / danse",
      icon: "🎮",
      description: "Présentez votre groupe, vos concerts et événements"
    },
    {
      title: "Groupe musical / danse",
      icon: "🎤",
      description: "Site pour votre ensemble musical ou troupe de danse"
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-script font-bold text-primary mb-6">
                Communautés & associations
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Créez un site pour votre club, association ou groupe communautaire
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
