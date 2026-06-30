import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";

function Select() {
  const navigate = useNavigate();
  const [activeTile, setActiveTile] = useState("");

  const tiles = [
    {
      id: "demographics",
      label: "Demographics",
      route: "/summary",
    },
    {
      id: "skin",
      label: (
        <>
          Skin Type
          <br />
          Details
        </>
      ),
    },
    {
      id: "concerns",
      label: (
        <>
          Cosmetic
          <br />
          Concerns
        </>
      ),
    },
    {
      id: "weather",
      label: "Weather",
    },
  ];

  function handleTileClick(tile) {
    if (!tile.route) return;

    setActiveTile(tile.id);
    navigate(tile.route);
  }

  return (
    <PageLayout className="relative">
      <Navbar>
        <div className="space-y-2 text-xs font-bold uppercase sm:text-sm">
          <p>A.I. Analysis</p>
          <p>A.I. has estimated the following.</p>
          <p>Fix estimated information if needed.</p>
        </div>
      </Navbar>

      <section className="animate-fade-slide-up flex min-h-[62vh] items-center justify-center px-6 pb-28 pt-4 md:min-h-[68vh]">
        <div
          onMouseLeave={() => setActiveTile("")}
          className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[460px] sm:w-[460px] md:h-[560px] md:w-[560px]"
        >
          <div
            className={`pointer-events-none absolute h-[300px] w-[300px] rotate-45 border border-dashed border-black/30 transition-all duration-700 ease-out sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] ${
              activeTile ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute h-[260px] w-[260px] rotate-[70deg] border border-dashed border-black/15 transition-all duration-700 ease-out sm:h-[350px] sm:w-[350px] md:h-[440px] md:w-[440px] ${
              activeTile ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          />

          <div className="relative z-10 grid h-[250px] w-[250px] rotate-45 grid-cols-2 grid-rows-2 gap-2 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]">
            {tiles.map((tile) => {
              const isActive = activeTile === tile.id;
              const isDisabled = !tile.route;

              return (
                <button
                  key={tile.id}
                  onMouseEnter={() => !isDisabled && setActiveTile(tile.id)}
                  onFocus={() => !isDisabled && setActiveTile(tile.id)}
                  onClick={() => handleTileClick(tile)}
                  disabled={isDisabled}
                  className={`smooth-button flex items-center justify-center border transition-all duration-500 ease-out ${
                    isActive
                      ? "z-10 scale-[1.04] border-black bg-white text-black shadow-lg"
                      : "border-transparent bg-[#f0f0f2] text-black/60 opacity-75"
                  } ${
                    isDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-white hover:text-black hover:opacity-100"
                  }`}
                >
                  <span
                    className={`-rotate-45 text-center text-[10px] font-bold uppercase leading-tight sm:text-xs md:text-sm ${
                      isDisabled ? "opacity-60" : ""
                    }`}
                  >
                    {tile.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <BottomNavigation
        onBack={() => navigate("/result")}
        onNext={() => navigate("/summary")}
        nextText="Get Summary"
      />
    </PageLayout>
  );
}

export default Select;
