"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

    const categories = [
      { name: "Toutes les activités", href: "/toutes-activites" },
      { name: "Informations nécessaires", href: "/informations" },
      { name: "Tarifs", href: "/tarifs" },
      { name: "Fonctionnement", href: "/fonctionnement" },
      { name: "Contact", href: "/contact" },
    ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: Logo + Site Name */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-110">
              <Image
                <Image
  src="/logo.png"
  alt="EverInSite Logo"
  ...
/>

                alt="EverInSite Logo"
                width={64}
                height={64}
                className="object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-script font-bold gold-text-gradient drop-shadow-lg">
              EverInSite
            </span>
          </Link>

          {/* CENTER: Categories - Now showing all 10 items */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-1 px-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="px-2 py-2 rounded-lg text-xs font-medium transition-all border border-transparent whitespace-nowrap"
                style={{ 
                  color: '#D4AF37',
                  borderColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C5A572'
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#D4AF37'
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: Social Media + Email */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/everinsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-medium transition-all border flex items-center gap-2"
              style={{ 
                color: '#D4AF37',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C5A572'
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#D4AF37'
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
              }}
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:EverInSite@outlook.fr"
              className="px-3 py-2 rounded-lg text-sm font-medium transition-all border flex items-center gap-2"
              style={{ 
                color: '#D4AF37',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C5A572'
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#D4AF37'
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
              }}
            >
              <Mail className="w-4 h-4" />
              <span>EverInSite@outlook.fr</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            style={{ color: '#D4AF37' }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t" style={{ background: 'rgba(0, 0, 0, 0.95)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block px-3 py-2 rounded-md text-base font-medium transition-all"
                style={{ color: '#D4AF37' }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C5A572'
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#D4AF37'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {category.name}
              </Link>
            ))}
            
            {/* Instagram Link Mobile */}
            <a
              href="https://www.instagram.com/everinsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all border"
              style={{ 
                color: '#D4AF37',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C5A572'
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#D4AF37'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>

              {/* Email Link Mobile */}
              <a
                href="mailto:EverInSite@outlook.fr"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all border"
                style={{ 
                  color: '#D4AF37',
                  borderColor: 'rgba(212, 175, 55, 0.3)'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C5A572'
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#D4AF37'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Mail className="w-5 h-5" />
                EverInSite@outlook.fr
              </a>
          </div>
        </div>
      )}
    </nav>
  )
}