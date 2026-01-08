"use client"

import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FonctionnementPage() {
  const sections = [
    {
      number: "1",
      title: "1. Création du site",
      content: (
        <p>Le site est conçu à l’aide d’outils professionnels de création web afin de fournir un site moderne, rapide et fonctionnel, conforme aux besoins définis avec le client.</p>
      )
    },
    {
      number: "2",
      title: "2. Livraison du site",
      content: (
        <div className="space-y-2">
          <p>Une fois le site validé :</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>le site est mis en ligne</li>
            <li>toutes les pages et fonctionnalités sont opérationnelles</li>
            <li>le site est accessible publiquement</li>
          </ul>
          <p>Le client dispose d’un site prêt à l’utilisation.</p>
        </div>
      )
    },
    {
      number: "3",
      title: "3. Hébergement du site",
      content: (
        <div className="space-y-4">
          <p>Le site est hébergé exclusivement sur Vercel.</p>
          <div className="space-y-2">
            <p className="text-gold-500 font-medium">👉 L’hébergement est à la charge du client.</p>
            <p className="text-gold-500 font-medium">👉 La gestion serveur, les DNS et les emails ne sont pas inclus dans la prestation.</p>
          </div>
        </div>
      )
    },
    {
      number: "4",
      title: "4. Création du compte Vercel (obligatoire)",
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-bold text-gold-400">Étape 1 — Créer le compte</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Aller sur <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-400 transition-colors">https://vercel.com</a></li>
              <li>Cliquer sur “Sign Up” (en haut à droite)</li>
              <li>Choisir “Continue with Google” ou créer un compte avec une adresse email</li>
              <li>Finaliser l’inscription</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-bold text-gold-400">Étape 2 — Créer une Team</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Une fois connecté, cliquer sur votre photo ou nom en haut à gauche</li>
              <li>Cliquer sur “Create Team”</li>
              <li>Donner un nom à la Team (ex : nom de votre entreprise)</li>
              <li>Choisir le plan gratuit</li>
              <li>Valider</li>
            </ul>
            <p className="text-red-400 font-medium">⚠️ Cette étape est obligatoire pour pouvoir recevoir le site.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gold-400">Étape 3 — M’ajouter à la Team (accès nécessaire)</h4>
            <p className="text-sm italic">Pour que je puisse mettre le site en ligne et effectuer des modifications :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Cliquer sur Team Settings</li>
              <li>Ouvrir l’onglet Members</li>
              <li>Cliquer sur “Invite”</li>
              <li>Entrer mon adresse email</li>
              <li>Choisir le rôle “Developer”</li>
              <li>Cliquer sur “Send Invite”</li>
            </ul>
            <p className="text-gold-500 font-medium">👉 Je ne gère ni la facturation, ni l’hébergement, uniquement le site.</p>
          </div>
        </div>
      )
    },
    {
      number: "5",
      title: "5. Mise en ligne du site (ce que JE fais)",
      content: (
        <div className="space-y-4">
          <p>Une fois invité :</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>j’accepte l’invitation</li>
            <li>je déploie le site sur votre Team Vercel</li>
            <li>le site apparaît dans votre tableau de bord Vercel</li>
          </ul>
          <div className="space-y-2">
            <p className="text-gold-500 font-medium">👉 Le site est maintenant hébergé sur votre compte</p>
            <p className="text-gold-500 font-medium">👉 Vous en êtes pleinement propriétaire</p>
          </div>
        </div>
      )
    },
    {
      number: "6",
      title: "6. Accès au site (côté client)",
      content: (
        <div className="space-y-2">
          <p>Après la mise en ligne :</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>vous voyez le projet dans votre dashboard Vercel</li>
            <li>le site est accessible via une URL publique</li>
            <li>vous pouvez gérer votre hébergement depuis Vercel</li>
          </ul>
        </div>
      )
    },
    {
      number: "7",
      title: "7. Modifications après mise en ligne (IMPORTANT)",
      content: (
        <div className="space-y-3">
          <p className="text-gold-500 font-medium">👉 Les modifications du site (textes, images, pages) sont réalisées uniquement par mes soins.</p>
          <p className="text-gold-500 font-medium">👉 Ces modifications sont possibles uniquement tant que le site reste hébergé sur Vercel.</p>
          <p className="text-gold-500 font-medium">👉 Si le site est hébergé ailleurs que sur Vercel, je ne pourrai plus assurer les modifications du site.</p>
        </div>
      )
    },
    {
      number: "8",
      title: "8. Modifications après livraison",
      content: (
        <p>Les demandes de modification sont possibles après livraison et sont facturées à l’acte, sans abonnement ni engagement mensuel.</p>
      )
    },
    {
      number: "9",
      title: "9. Responsabilités et transparence",
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>le client est propriétaire du site et de son contenu</li>
          <li>l’hébergement est sur son compte Vercel</li>
          <li>aucune maintenance technique serveur n’est incluse</li>
          <li>aucune assistance hors site (emails, DNS, incidents serveur)</li>
        </ul>
      )
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
              📌 Mise en ligne du site
            </h1>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide" style={{ color: '#D4AF37' }}>
                Fonctionnement & Livraison
              </p>
              <div className="h-0.5 w-16 sm:w-20 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}></div>
            </div>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            {sections.map((section, index) => (
              <Card 
                key={index}
                className="backdrop-blur-sm border-2 hover:shadow-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.1)'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold border-2" style={{ borderColor: '#D4AF37', color: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      {section.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                        {section.title}
                      </h3>
                      <div className="text-gray-300 leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Section */}
          <Card 
            className="backdrop-blur-sm border-2 overflow-hidden"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              borderColor: '#D4AF37',
              boxShadow: '0 20px 50px rgba(212,175,55,0.2)'
            }}
          >
            <div className="gold-gradient h-2 w-full"></div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#D4AF37' }}>
                <span>✅</span> Résumé clair
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-500 font-bold">✔️</span> Où cliquer sur Vercel : expliqué
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-500 font-bold">✔️</span> Comment me donner l’accès : expliqué
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-500 font-bold">✔️</span> Qui fait quoi : clair
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-500 font-bold">✔️</span> Hébergement ailleurs = plus de modifications
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-500 font-bold">✔️</span> Aucun flou possible
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="text-lg px-10 py-8 rounded-full shadow-2xl transition-all gold-gradient text-black font-bold hover:scale-105" style={{ boxShadow: '0 20px 60px rgba(212,175,55,0.5)' }}>
              <Link href="/contact">Démarrer mon projet maintenant 🚀</Link>
            </Button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .gold-text-gradient {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gold-gradient {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        }
        .text-gold-400 { color: #FBF5B7; }
        .text-gold-500 { color: #D4AF37; }
        .border-gold-500 { border-color: #D4AF37; }
      `}</style>
    </>
  )
}
