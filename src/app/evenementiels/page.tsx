"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EvenementielsPage() {
  const subcategories = [
    {
      title: "Site de mariage",
      icon: "💍",
      description: "Site élégant pour votre jour spécial"
    },
    {
      title: "Pré-mariage / Save The Date",
      icon: "👰‍♀️",
      description: "Annoncez votre mariage avec style"
    },
    {
      title: "Site d'anniversaire",
      icon: "🎂",
      description: "Célébrez votre anniversaire en grand"
    },
    {
      title: "Site de baptême",
      icon: "👶",
      description: "Partagez ce moment sacré avec vos proches"
    },
    {
      title: "Site de baby shower",
      icon: "🍼",
      description: "Organisez une baby shower mémorable"
    },
    {
      title: "Gender reveal",
      icon: "🎁",
      description: "Révélez le sexe de bébé de façon originale"
    },
    {
      title: "EVJF / EVG",
      icon: "🎉",
      description: "Organisez un enterrement de vie inoubliable"
    },
    {
      title: "Cérémonie de diplôme",
      icon: "🎓",
      description: "Célébrez votre réussite académique"
    },
    {
      title: "Fête de famille / réunion familiale",
      icon: "🥂",
      description: "Rassemblez votre famille pour un moment convivial"
    },
    {
      title: "Événements / spectacles / soirées",
      icon: "🎭",
      description: "Créez le buzz autour de votre événement"
    },
    {
      title: "Souvenirs de voyage",
      icon: "🧳",
      description: "Partagez vos aventures autour du monde"
    }
  ]

  return (
    <>
      <Navigation />
      <DecorativeElements />
      
      <main className="relative min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-script font-bold text-primary mb-6">
                Événementiels
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Créez un site unique pour tous vos événements spéciaux
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
