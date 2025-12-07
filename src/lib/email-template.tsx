import { Html, Container, Heading, Text, Section, Hr } from '@react-email/components';

interface ContactEmailProps {
  nom: string;
  email: string;
  categorie: string;
  description: string;
}

export function ContactEmail({ nom, email, categorie, description }: ContactEmailProps) {
  return (
    <Html>
      <Container style={{ 
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <Heading 
          as="h1" 
          style={{ 
            color: '#7c3aed',
            fontSize: '28px',
            marginBottom: '10px',
            textAlign: 'center'
          }}
        >
          ✨ Nouvelle demande de site web
        </Heading>
        
        <Text style={{ 
          textAlign: 'center', 
          color: '#666',
          fontSize: '14px',
          marginBottom: '30px'
        }}>
          Demande reçue depuis EverInSite.com
        </Text>

        <Hr style={{ borderColor: '#e5e7eb', margin: '30px 0' }} />
        
        <Section style={{ marginBottom: '25px' }}>
          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: '16px',
            color: '#333',
            marginBottom: '8px'
          }}>
            👤 Nom du client
          </Text>
          <Text style={{ 
            fontSize: '15px',
            color: '#555',
            margin: '0 0 20px 0'
          }}>
            {nom}
          </Text>

          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: '16px',
            color: '#333',
            marginBottom: '8px'
          }}>
            📧 Email de contact
          </Text>
          <Text style={{ 
            fontSize: '15px',
            color: '#555',
            margin: '0 0 20px 0'
          }}>
            {email}
          </Text>

          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: '16px',
            color: '#333',
            marginBottom: '8px'
          }}>
            🎯 Type de site souhaité
          </Text>
          <Text style={{ 
            fontSize: '15px',
            color: '#555',
            margin: '0 0 20px 0',
            padding: '8px 12px',
            backgroundColor: '#f3f4f6',
            borderRadius: '6px',
            display: 'inline-block'
          }}>
            {categorie}
          </Text>
        </Section>

        <Hr style={{ borderColor: '#e5e7eb', margin: '30px 0' }} />

        <Section>
          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: '16px',
            color: '#333',
            marginBottom: '12px'
          }}>
            💬 Description du projet
          </Text>
          <Text style={{ 
            fontSize: '15px',
            color: '#555',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6',
            backgroundColor: '#fafafa',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            {description}
          </Text>
        </Section>

        <Hr style={{ borderColor: '#e5e7eb', margin: '30px 0' }} />

        <Section>
          <Text style={{ 
            fontSize: '13px', 
            color: '#999',
            textAlign: 'center',
            margin: '20px 0 10px 0'
          }}>
            📅 Reçu le {new Date().toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
          <Text style={{ 
            fontSize: '12px', 
            color: '#bbb',
            textAlign: 'center',
            margin: '0'
          }}>
            Ce message a été envoyé depuis le formulaire de contact d'EverInSite
          </Text>
        </Section>
      </Container>
    </Html>
  );
}
