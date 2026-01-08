import Navigation from "@/components/Navigation";
import DecorativeElements from "@/components/DecorativeElements";
import WelcomeOverlay from "@/components/WelcomeOverlay";

export default function HomePage() {
  return (
    <>
      <WelcomeOverlay />
      <Navigation />
      <DecorativeElements />

      <main className="relative min-h-screen pt-16">
        {/* Logo en arrière-plan fixe */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[800px] h-[800px] opacity-[0.08]">
            <img
              src="/logo.png"
              alt="EverInSite Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Bienvenue chez <span className="text-[#d4af37]">EverInSite</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Création de sites web modernes, performants et optimisés pour le
              référencement (SEO).
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
