import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function Select() {
  const navigate = useNavigate();
  const [activeTile, setActiveTile] = useState("demographics");

  const tiles = [
    {
      id: "demographics",
      label: "Demographics",
      route: "/summary",
      active: true,
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
      active: false,
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
      active: false,
    },
    {
      id: "weather",
      label: "Weather",
      active: false,
    },
  ];

  function handleTileClick(tile) {
    setActiveTile(tile.id);

    if (tile.route) {
      navigate(tile.route);
    }
  }

  return (
    <PageLayout className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="animate-fade-slide-up flex items-start justify-between px-6 py-8 md:px-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <div className="mt-8 space-y-2 text-xs font-bold uppercase sm:text-sm">
            <p>A.I. Analysis</p>
            <p>A.I. has estimated the following.</p>
            <p>Fix estimated information if needed.</p>
          </div>
        </div>

        <button className="smooth-button border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white hover:bg-transparent hover:text-black">
          Enter Code
        </button>
      </nav>

      <section className="animate-fade-slide-up flex min-h-[62vh] items-center justify-center px-6 pb-28 pt-4 md:min-h-[68vh]">
        <div className="relative grid h-[250px] w-[250px] rotate-45 grid-cols-2 grid-rows-2 gap-2 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]">
          {tiles.map((tile) => {
            const isActive = activeTile === tile.id;

            return (
              <button
                key={tile.id}
                onMouseEnter={() => setActiveTile(tile.id)}
                onFocus={() => setActiveTile(tile.id)}
                onClick={() => handleTileClick(tile)}
                className={`smooth-button flex items-center justify-center border transition-all duration-300 ease-out ${
                  isActive
                    ? "z-10 border-black bg-white text-black shadow-md scale-[1.03]"
                    : "border-transparent bg-[#f0f0f2] text-black/60 opacity-80 hover:bg-white hover:text-black hover:opacity-100"
                }`}
              >
                <span className="-rotate-45 text-center text-[10px] font-bold uppercase leading-tight sm:text-xs md:text-sm">
                  {tile.label}
                </span>
              </button>
            );
          })}

          <div
            className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm transition-all duration-500 ease-out ${
              activeTile === "demographics"
                ? "left-[24%] top-[24%]"
                : activeTile === "skin"
                  ? "left-[74%] top-[24%]"
                  : activeTile === "concerns"
                    ? "left-[24%] top-[74%]"
                    : "left-[74%] top-[74%]"
            }`}
          ></div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-[#f4f4f2]/95 px-6 py-5 md:px-8">
        <button
          onClick={() => navigate("/result")}
          className="smooth-button flex items-center gap-4"
        >
          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
            <span className="-rotate-45 text-lg">‹</span>
          </div>

          <span className="text-sm font-bold uppercase">Back</span>
        </button>

        <button
          onClick={() => navigate("/summary")}
          className="smooth-button flex items-center gap-4"
        >
          <span className="text-sm font-bold uppercase">Get Summary</span>

          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
            <span className="-rotate-45 text-lg">›</span>
          </div>
        </button>
      </div>
    </PageLayout>
  );
}

export default Select;
