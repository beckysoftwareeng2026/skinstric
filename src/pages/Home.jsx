import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import NavBarHome from "../components/NavBarHome";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageLayout>
      <NavBarHome menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden">
        {/* Left Side - wide screens only */}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 2xl:block">
          <div className="relative">
            <div className="h-[700px] w-[700px] rotate-45 border border-[#d9d9d9] -translate-x-[420px]" />

            <Link
              to="/"
              className="smooth-button absolute left-14 top-1/2 flex -translate-y-1/2 items-center gap-4"
            >
              <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
                <span className="-rotate-45 text-lg">‹</span>
              </div>

              <span className="text-sm uppercase tracking-wide">
                Discover A.I.
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side - wide screens only */}
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 2xl:block">
          <div className="relative">
            <div className="h-[700px] w-[700px] rotate-45 border border-[#d9d9d9] translate-x-[420px]" />

            <Link
              to="/testing"
              className="smooth-button absolute right-14 top-1/2 flex -translate-y-1/2 items-center gap-4"
            >
              <span className="text-sm uppercase tracking-wide">Take Test</span>

              <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
                <span className="-rotate-45 text-lg">›</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Text */}
        <div className="z-10 flex animate-fade-slide-up flex-col items-center px-4 text-center">
          <h1 className="text-[56px] font-[200] leading-none tracking-tight sm:text-[76px] md:text-[100px] lg:text-[120px] xl:text-[140px]">
            Sophisticated
          </h1>

          <h1 className="text-[56px] font-[200] leading-none tracking-tight sm:text-[76px] md:text-[100px] lg:text-[120px] xl:text-[140px]">
            skincare
          </h1>

          <Link
            to="/testing"
            className="smooth-button mt-8 inline-flex items-center gap-3 border border-black px-6 py-3 text-xs font-bold uppercase hover:bg-black hover:text-white 2xl:hidden"
          >
            Take Test
            <span>›</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-6 max-w-xs animate-fade-slide-up md:left-8">
          <p className="text-xs uppercase leading-relaxed text-gray-700">
            SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED
            ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
