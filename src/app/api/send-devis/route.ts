import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, pdfBase64 } = await request.json();

    if (!email || !pdfBase64) {
      return NextResponse.json(
        { error: 'Email et PDF requis' },
        { status: 400 }
      );
    }

    // Convertir le base64 en Buffer
    const pdfBuffer = Buffer.from(pdfBase64.split(',')[1], 'base64');

    // Envoyer l'email avec le PDF en pièce jointe
    const { data, error } = await resend.emails.send({
      from: 'EverInSite <onboarding@resend.dev>',
      to: email,
      subject: '📄 Votre devis vierge EverInSite',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
              }
              .logo {
                font-size: 32px;
                font-weight: bold;
                background: linear-gradient(135deg, #D4AF37, #C5A572, #DAA520);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 10px;
              }
              .subtitle {
                color: #666;
                font-size: 14px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 12px;
                border: 2px solid rgba(212, 175, 55, 0.2);
                margin: 30px 0;
              }
              .content p {
                margin: 15px 0;
                color: #555;
              }
              .highlight {
                color: #D4AF37;
                font-weight: bold;
              }
              .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e5e5e5;
                color: #999;
                font-size: 12px;
              }
              .icon {
                display: inline-block;
                margin-right: 8px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">✨ EverInSite</div>
              <div class="subtitle">Création de sites web professionnels</div>
            </div>

            <div class="content">
              <p><span class="icon">👋</span> Bonjour,</p>
              
              <p>Vous trouverez ci-joint votre <span class="highlight">modèle de devis vierge</span> au format PDF.</p>
              
              <p><span class="icon">📝</span> Ce document est prêt à être rempli et personnalisé pour vos clients.</p>
              
              <p><span class="icon">💼</span> <strong>Utilisez ce devis pour :</strong></p>
              <ul style="color: #555; line-height: 1.8;">
                <li>Présenter vos prestations de création de sites web</li>
                <li>Détailler les services proposés</li>
                <li>Formaliser vos tarifs et conditions</li>
              </ul>

              <p><span class="icon">💡</span> <strong>Conseil :</strong> Imprimez-le ou remplissez-le numériquement pour vos propositions commerciales.</p>
            </div>

            <div class="footer">
              <p>📅 Document généré le ${new Date().toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}</p>
              <p style="margin-top: 15px;">Ce message a été envoyé depuis EverInSite.com</p>
              <p style="margin-top: 10px; color: #D4AF37;">✨ Bonne création ! ✨</p>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: 'devis-everinsite-vierge.pdf',
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès',
      data 
    });
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}
