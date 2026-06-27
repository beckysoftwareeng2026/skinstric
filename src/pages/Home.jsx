import { Link } from "react-router-dom";
function App() {
  return (
    <main className="min-h-screen bg-[#f4f4f2]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-8">
        <div className="flex items-center gap-3 text-sm font-medium">
          <span>SKINSTRIC</span>
          <span className="text-gray-400">[ INTRO ]</span>
        </div>

        <button className="border border-black px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider">
          Enter Code
        </button>
      </nav>

      {/* Hero */}
      <section className="relative flex h-[82vh] items-center justify-center overflow-hidden">
        {/* Left Side */}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 xl:block">
          <div className="relative">
            <div className="h-[700px] w-[700px] border border-[#e4e4e4] rotate-45 -translate-x-80"></div>

            <div className="absolute left-28 top-1/2 flex items-center gap-4 -translate-y-1/2">
              <div className="flex h-10 w-10 items-center justify-center border border-black rotate-45">
                <span className="-rotate-45 text-lg">‹</span>
              </div>

              <span className="text-sm uppercase tracking-wide">
                Discover A.I.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <Link
          to="/testing"
          className="mt-8 inline-flex items-center gap-3 border border-black px-6 py-3 text-xs font-bold uppercase xl:hidden"
        >
          <span className="text-sm uppercase tracking-wide">Take Test</span>

          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
            <span className="-rotate-45 text-lg">›</span>
          </div>
        </Link>

        {/* Hero Text */}
        <div className="z-10 text-center translate-y-6 md:translate-y-12">
          <h1 className="text-[64px] sm:text-[84px] md:text-[110px] lg:text-[140px] leading-none font-[200] tracking-tight">
            Sophisticated
          </h1>

          <h1 className="text-[64px] sm:text-[84px] md:text-[110px] lg:text-[140px] leading-none font-[200] tracking-tight">
            skincare
          </h1>
          <Link
            to="/testing"
            className="mt-8 inline-flex items-center gap-3 border border-black px-6 py-3 text-xs font-bold uppercase md:hidden"
          >
            Take Test
            <span>›</span>
          </Link>
        </div>
        {/* Bottom Left Copy */}
        <div className="absolute bottom-10 left-8 max-w-xs">
          <p className="text-xs uppercase leading-relaxed text-gray-700">
            SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED
            ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
