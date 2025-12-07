"use client"

import Image from "next/image"

export default function DecorativeElements() {
  return (
    <>
      {/* Logo en arrière-plan - centre avec opacité très faible */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] opacity-[0.03]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764781489676.PNG?width=800&height=800&resize=contain"
            alt="EverInSite Background Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Stars dorées */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="decorative-star text-yellow-400 text-4xl opacity-70" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>✨</div>
        <div className="decorative-star text-yellow-300 text-3xl opacity-60" style={{ top: '20%', right: '10%', animationDelay: '1s' }}>⭐</div>
        <div className="decorative-star text-amber-400 text-2xl opacity-50" style={{ top: '60%', left: '8%', animationDelay: '2s' }}>💫</div>
        <div className="decorative-star text-yellow-500 text-3xl opacity-60" style={{ bottom: '15%', right: '15%', animationDelay: '3s' }}>🌟</div>
        <div className="decorative-star text-amber-300 text-2xl opacity-50" style={{ top: '40%', right: '5%', animationDelay: '1.5s' }}>✦</div>
        <div className="decorative-star text-yellow-400 text-3xl opacity-60" style={{ top: '80%', left: '20%', animationDelay: '2.5s' }}>★</div>
        <div className="decorative-star text-amber-500 text-2xl opacity-50" style={{ top: '30%', left: '15%', animationDelay: '3.5s' }}>✨</div>
        <div className="decorative-star text-yellow-300 text-4xl opacity-70" style={{ bottom: '30%', right: '8%', animationDelay: '1.8s' }}>💫</div>
      </div>
    </>
  )
}