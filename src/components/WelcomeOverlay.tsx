"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Fermer l'overlay après 2.5 secondes (temps de lire le slogan)
    const closeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => {
      clearTimeout(closeTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #1a1a1a 60%, #0a0a0a 100%)' }}
        >
          {/* Logo en arrière-plan géant avec effet lumineux */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-[600px] h-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=800&height=800&resize=contain"
                alt="EverInSite Logo Background"
                fill
                className="object-contain"
                style={{ filter: 'drop-shadow(0 0 80px rgba(212,175,55,0.3))' }}
                priority
              />
            </div>
          </motion.div>

          {/* Cercles dorés animés en arrière-plan */}
          <motion.div
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ scale: 5, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 3.5, opacity: 0 }}
            exit={{ scale: 4.5, opacity: 0 }}
            transition={{ duration: 2.2, delay: 0.2, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(197,165,114,0.4) 0%, transparent 70%)' }}
          />

          {/* Éclats brillants scintillants */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 1
              }}
              className="absolute text-2xl pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.9))',
                color: '#D4AF37'
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Contenu principal - Nom du site + Slogan */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-8 relative z-10 pointer-events-none"
          >
            {/* Logo animé avec rotation élégante */}
            <motion.div
              initial={{ y: -80, opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
              exit={{ y: -30, opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1, duration: 1, type: "spring", bounce: 0.5 }}
              className="mb-10"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(212,175,55,0.5)',
                      '0 0 80px rgba(212,175,55,0.9)',
                      '0 0 40px rgba(212,175,55,0.5)'
                    ],
                    filter: [
                      'drop-shadow(0 0 20px rgba(212,175,55,0.5))',
                      'drop-shadow(0 0 40px rgba(212,175,55,0.9))',
                      'drop-shadow(0 0 20px rgba(212,175,55,0.5))'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=200&height=200&resize=contain"
                    alt="EverInSite Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Titre principal avec gradient doré */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-script font-bold mb-8 relative">
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 30px rgba(212,175,55,0.6)',
                      '0 0 60px rgba(212,175,55,1)',
                      '0 0 30px rgba(212,175,55,0.6)'
                    ]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="gold-text-gradient inline-block"
                >
                  EverInSite
                </motion.span>
              </h1>
              
              {/* Slogan avec lignes décoratives dorées */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "80px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(to right, transparent, #D4AF37, #C5A572)' }}
                />
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-center"
                  style={{ color: '#D4AF37' }}
                >
                  𝙑𝙤𝙩𝙧𝙚 𝙨𝙞𝙩𝙚. 𝙑𝙤𝙩𝙧𝙚 𝙫𝙤𝙞𝙭. 𝙇𝙚 𝙢𝙤𝙣𝙙𝙚 𝙫𝙤𝙪𝙨 𝙫𝙤𝙞𝙩.
                </motion.p>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "80px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(to left, transparent, #D4AF37, #C5A572)' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}