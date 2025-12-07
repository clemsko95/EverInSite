import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmail } from "@/lib/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, email, categorie, description } = body

    // Validation des champs requis
    if (!nom || !email || !categorie || !description) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Vérifier que la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY n'est pas configurée")
      return NextResponse.json(
        { error: "Le service d'envoi d'email n'est pas configuré" },
        { status: 500 }
      )
    }

    // Envoyer l'email avec Resend à l'adresse vérifiée
    const { data, error } = await resend.emails.send({
      from: "EverInSite <onboarding@resend.dev>",
      to: "clem952@outlook.fr", // Adresse vérifiée sur Resend
      replyTo: email,
      subject: `Nouvelle demande de ${nom} - ${categorie}`,
      react: ContactEmail({ nom, email, categorie, description })
    })

    if (error) {
      console.error("Erreur Resend:", error)
      return NextResponse.json(
        { error: "Échec de l'envoi de l'email" },
        { status: 500 }
      )
    }

    console.log("Email envoyé avec succès:", data?.id)
    return NextResponse.json(
      { 
        success: true,
        message: "Demande reçue avec succès",
        emailId: data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error)
    return NextResponse.json(
      { error: "Une erreur s'est produite" },
      { status: 500 }
    )
  }
}