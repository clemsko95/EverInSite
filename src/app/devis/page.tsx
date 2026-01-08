"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Printer, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DevisPage() {
  const [devisData, setDevisData] = useState({
    numero: "2024-001",
    date: new Date().toLocaleDateString("fr-FR"),
    clientNom: "",
    clientEmail: "",
    clientTelephone: "",
    typeSite: "",
    description: "",
  })

  const services = [
    { nom: "Conception et Design", prix: 800 },
    { nom: "Développement", prix: 1200 },
    { nom: "Contenu et Images", prix: 300 },
    { nom: "Optimisation SEO", prix: 200 },
  ]

  const total = services.reduce((sum, service) => sum + service.prix, 0)
  const acompte = Math.round(total * 0.3)
  const solde = total - acompte

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #000000)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Boutons d'action - Masqués à l'impression */}
        <div className="no-print mb-6 flex flex-wrap gap-4 justify-between items-center">
          <Button asChild variant="outline" style={{ borderColor: 'rgba(212, 175, 55, 0.5)', color: '#D4AF37' }}>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button onClick={handlePrint} className="flex items-center gap-2 gold-gradient text-black font-semibold">
              <Printer className="w-4 h-4" />
              Imprimer
            </Button>
          </div>
        </div>

        {/* Contenu du devis */}
        <Card id="devis-content" className="border-2 shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderColor: 'rgba(212, 175, 55, 0.5)' }}>
          <CardContent className="p-8 sm:p-12">
            {/* En-tête avec logo */}
            <div className="flex items-start justify-between mb-8 pb-6 border-b-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=200&height=200&resize=contain"
                    alt="EverInSite Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-script font-bold gold-text-gradient">EverInSite</h1>
                  <p className="text-sm text-gray-600">Création de sites web</p>
                </div>
              </div>
              
              <div className="text-right">
                <h2 className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>DEVIS</h2>
                <p className="text-sm text-gray-600">N°: {devisData.numero}</p>
                <p className="text-sm text-gray-600">Date: {devisData.date}</p>
              </div>
            </div>

            {/* Informations EverInSite */}
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#D4AF37' }}>EverInSite</h3>
              <p className="text-sm text-gray-700">Email: EverInSite@outlook.fr</p>
              <p className="text-sm text-gray-700">Web: www.everinsite.com</p>
            </div>

            {/* Informations Client */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>INFORMATIONS CLIENT</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <Input
                    value={devisData.clientNom}
                    onChange={(e) => setDevisData({ ...devisData, clientNom: e.target.value })}
                    placeholder="Nom et prénom du client"
                    className="border-2 no-print:focus:ring-2"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    value={devisData.clientEmail}
                    onChange={(e) => setDevisData({ ...devisData, clientEmail: e.target.value })}
                    placeholder="email@exemple.fr"
                    className="border-2"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <Input
                    type="tel"
                    value={devisData.clientTelephone}
                    onChange={(e) => setDevisData({ ...devisData, clientTelephone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                    className="border-2"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  />
                </div>
              </div>
            </div>

            {/* Détails du Projet */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>DÉTAILS DU PROJET</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type de site</label>
                  <Input
                    value={devisData.typeSite}
                    onChange={(e) => setDevisData({ ...devisData, typeSite: e.target.value })}
                    placeholder="Ex: Site vitrine, E-commerce, Portfolio..."
                    className="border-2"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description du projet</label>
                  <Textarea
                    value={devisData.description}
                    onChange={(e) => setDevisData({ ...devisData, description: e.target.value })}
                    placeholder="Décrivez brièvement les besoins et objectifs du projet..."
                    rows={4}
                    className="border-2"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  />
                </div>
              </div>
            </div>

            {/* Tarification */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>TARIFICATION DÉTAILLÉE</h3>
              <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#D4AF37' }}>Prestation</th>
                      <th className="text-right p-4 font-semibold" style={{ color: '#D4AF37' }}>Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr key={index} className="border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                        <td className="p-4 text-gray-700">{service.nom}</td>
                        <td className="p-4 text-right text-gray-700">{service.prix}€</td>
                      </tr>
                    ))}
                    <tr className="border-t-2" style={{ borderColor: 'rgba(212, 175, 55, 0.5)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                      <td className="p-4 font-bold text-lg" style={{ color: '#D4AF37' }}>TOTAL</td>
                      <td className="p-4 text-right font-bold text-2xl" style={{ color: '#D4AF37' }}>{total}€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conditions */}
            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>CONDITIONS</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📋 <strong>Modalités de paiement :</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Acompte de 30% : <span className="font-semibold">{acompte}€</span> à la signature du devis</li>
                  <li>• Solde : <span className="font-semibold">{solde}€</span> à la livraison du site</li>
                </ul>
                <p className="mt-3">⏱️ <strong>Délai de réalisation :</strong> 2 à 3 semaines après validation du cahier des charges</p>
                <p className="mt-3">✅ <strong>Validité du devis :</strong> 30 jours à compter de la date d'émission</p>
                <p className="mt-3">🔄 <strong>Révisions :</strong> Révisions illimitées incluses pendant la phase de développement</p>
                <p className="mt-3">📞 <strong>Support :</strong> Assistance et formation à l'utilisation du site incluses</p>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div>
                <p className="text-sm font-semibold mb-2 text-gray-700">Signature EverInSite</p>
                <div className="h-20 border-2 rounded" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}></div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-gray-700">Signature Client (Bon pour accord)</p>
                <div className="h-20 border-2 rounded" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}></div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 text-center border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <p className="text-xs text-gray-500">
                EverInSite - Création de sites web professionnels et personnalisés
              </p>
              <p className="text-xs text-gray-500">
                Email: EverInSite@outlook.fr | Instagram: @everinsite
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Note explicative - Masquée à l'impression */}
        <div className="no-print mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid #D4AF37' }}>
          <p className="text-sm text-gray-300">
            💡 <strong>Conseil :</strong> Remplissez les informations du client et du projet, puis cliquez sur "Imprimer" pour obtenir un PDF du devis. Vous pouvez également l'envoyer directement par email.
          </p>
        </div>
      </div>
    </div>
  )
}
