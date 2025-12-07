"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "@/components/Navigation"
import DecorativeElements from "@/components/DecorativeElements"
import { Mail, Instagram, Send } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

const MAX_DESCRIPTION_LENGTH = 3000

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    categorie: "",
    description: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const remainingChars = MAX_DESCRIPTION_LENGTH - formData.description.length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.description.length > MAX_DESCRIPTION_LENGTH) {
      toast.error(`La description ne peut pas dépasser ${MAX_DESCRIPTION_LENGTH} caractères`)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success("Votre demande a été envoyée avec succès ! Je vous répondrai dans les plus brefs délais.")
        
        setFormData({
          nom: "",
          email: "",
          categorie: "",
          description: ""
        })
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.")
      }
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      categorie: value
    })
  }

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

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #000000)' }}>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)' }}></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-script font-bold gold-text-gradient mb-6">
              Décrivez-moi votre projet ✨
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Parlez-moi de votre vision et je créerai le site web parfait pour vous
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #0a0a0a, #000000, #0a0a0a)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card className="border-2 hover:shadow-2xl transition-all backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 30px rgba(212,175,55,0.15)' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 10px 25px rgba(212,175,55,0.5)' }}>
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ color: '#D4AF37' }}>Email</h3>
                        <p className="text-gray-300 text-sm">EverInSite@outlook.fr</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-2xl transition-all backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 30px rgba(212,175,55,0.15)' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 10px 25px rgba(212,175,55,0.5)' }}>
                        <Instagram className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ color: '#D4AF37' }}>Instagram</h3>
                        <a 
                          href="https://www.instagram.com/everinsite?igsh=MXNwYmFkdDB4M3NpOA%3D%3D&utm_source=qr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 text-sm transition-colors"
                          onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                        >
                          @everinsite
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 shadow-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(212,175,55,0.2)' }}>
                  <CardHeader>
                    <CardTitle className="text-3xl font-script gold-text-gradient">Formulaire RSVP</CardTitle>
                    <CardDescription className="text-gray-300">
                      Remplissez ce formulaire pour me dire quel site vous voulez. Je vous recontacterai rapidement pour discuter de votre projet.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nom" style={{ color: '#D4AF37' }}>Votre nom *</Label>
                          <Input
                            id="nom"
                            name="nom"
                            placeholder="Jean Dupont"
                            required
                            value={formData.nom}
                            onChange={handleChange}
                            className="border-2 text-gray-200 placeholder:text-gray-500"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(212, 175, 55, 0.3)' }}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" style={{ color: '#D4AF37' }}>Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="jean@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="border-2 text-gray-200 placeholder:text-gray-500"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(212, 175, 55, 0.3)' }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="categorie" style={{ color: '#D4AF37' }}>Type de site souhaité *</Label>
                        <Select required value={formData.categorie} onValueChange={handleSelectChange}>
                          <SelectTrigger className="border-2 text-gray-200" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                            <SelectValue placeholder="Choisissez une catégorie" />
                          </SelectTrigger>
                          <SelectContent style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                            <SelectItem value="communautes">Communautés & associations</SelectItem>
                            <SelectItem value="professionnels">Professionnel</SelectItem>
                            <SelectItem value="creatifs">Créatif & artistique</SelectItem>
                            <SelectItem value="personnels">Personnel & émotionnel</SelectItem>
                            <SelectItem value="evenementiels">Événementiel</SelectItem>
                            <SelectItem value="autre">Autre / Je ne sais pas encore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" style={{ color: '#D4AF37' }}>Décrivez le site que vous voulez *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Expliquez-moi votre projet : quel type de site vous voulez, les fonctionnalités souhaitées, le style, les couleurs, le contenu à inclure, etc. Plus vous donnez de détails, mieux je pourrai répondre à vos attentes !"
                          required
                          rows={8}
                          maxLength={MAX_DESCRIPTION_LENGTH}
                          value={formData.description}
                          onChange={handleChange}
                          className="border-2 text-gray-200 placeholder:text-gray-500 resize-none"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(212, 175, 55, 0.3)' }}
                        />
                        <div className="flex items-center justify-between text-sm">
                          <p className={`transition-colors ${
                            remainingChars < 100 
                              ? 'text-red-400' 
                              : remainingChars < 500 
                                ? 'text-yellow-400' 
                                : 'text-gray-400'
                          }`}>
                            {remainingChars} caractères restants
                          </p>
                          <p className="text-gray-500">
                            {formData.description.length} / {MAX_DESCRIPTION_LENGTH}
                          </p>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-lg"
                        style={{ boxShadow: '0 10px 30px rgba(212,175,55,0.5)' }}
                      >
                        {isSubmitting ? (
                          <>Envoi en cours...</>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer ma demande
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10" style={{ background: 'linear-gradient(to bottom right, #000000, #0a0a0a, #1a1a1a)' }}>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)' }}></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-script font-bold gold-text-gradient mb-6">
              Prêt à créer votre site de rêve ? 💎
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez mes clients satisfaits qui ont leur site web unique créé sur mesure
            </p>
            <Button 
              asChild
              size="lg" 
              className="text-lg px-8 py-6 rounded-full gold-gradient text-black font-semibold hover:scale-105 transition-all shadow-2xl"
              style={{ boxShadow: '0 20px 50px rgba(212,175,55,0.5)' }}
            >
              <a href="https://www.instagram.com/everinsite?igsh=MXNwYmFkdDB4M3NpOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Voir mes réalisations sur Instagram ✨
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}