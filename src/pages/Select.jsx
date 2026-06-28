import { useNavigate } from "react-router-dom";

function Select() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="flex items-start justify-between px-6 py-8 md:px-8">
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

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="flex min-h-[62vh] items-center justify-center px-6 pb-28 pt-4 md:min-h-[68vh]">
        <div className="grid h-[250px] w-[250px] rotate-45 grid-cols-2 grid-rows-2 gap-2 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]">
          <button
            onClick={() => navigate("/demographics")}
            className="flex items-center justify-center bg-[#e8e8eb] transition hover:bg-black hover:text-white"
          >
            <span className="-rotate-45 text-center text-[10px] font-bold uppercase sm:text-xs md:text-sm">
              Demographics
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-[10px] font-bold uppercase leading-tight sm:text-xs md:text-sm">
              Skin Type
              <br />
              Details
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-[10px] font-bold uppercase leading-tight sm:text-xs md:text-sm">
              Cosmetic
              <br />
              Concerns
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-[10px] font-bold uppercase sm:text-xs md:text-sm">
              Weather
            </span>
          </button>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-[#f4f4f2]/95 px-6 py-5 md:px-8">
        <button
          onClick={() => navigate("/result")}
          className="flex items-center gap-4"
        >
          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
            <span className="-rotate-45 text-lg">‹</span>
          </div>

          <span className="text-sm font-bold uppercase">Back</span>
        </button>

        <button
          onClick={() => navigate("/summary")}
          className="flex items-center gap-4"
        >
          <span className="text-sm font-bold uppercase">Get Summary</span>

          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
            <span className="-rotate-45 text-lg">›</span>
          </div>
        </button>
      </div>
    </main>
  );
}

export default Select;
