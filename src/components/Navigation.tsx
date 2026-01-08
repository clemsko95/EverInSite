"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(0, 0, 0, 0.9)",
        borderColor: "rgba(212, 175, 55, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: Logo + Site Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="EverInSite Logo"
                fill
                className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.55)]"
                sizes="64px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] uppercase text-[#f5f5f5]">
                EverInSite
              </span>
              <span className="text-xs sm:text-sm text-[#d4af37]">
                Création de sites web & SEO
              </span>
            </div>
          </Link>

          {/* RIGHT: liens simples */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/toutes-activites" className="hover:text-[#d4af37] transition-colors">
              Activités
            </Link>
            <Link href="/devis" className="hover:text-[#d4af37] transition-colors">
              Devis
            </Link>
            <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
