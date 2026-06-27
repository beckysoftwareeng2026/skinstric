import { useNavigate } from "react-router-dom";

function Select() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="flex items-start justify-between px-8 py-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <div className="mt-8 space-y-2 text-sm font-bold uppercase">
            <p>A.I. Analysis</p>
            <p>A.I. has estimated the following.</p>
            <p>Fix estimated information if needed.</p>
          </div>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="flex h-[70vh] items-center justify-center">
        <div className="grid h-[380px] w-[380px] rotate-45 grid-cols-2 grid-rows-2 gap-2">
          <button
            onClick={() => navigate("/demographics")}
            className="flex items-center justify-center bg-[#e8e8eb] transition hover:bg-black hover:text-white"
          >
            <span className="-rotate-45 text-center text-sm font-bold uppercase">
              Demographics
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-sm font-bold uppercase">
              Skin Type Details
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-sm font-bold uppercase">
              Cosmetic
              <br />
              Concerns
            </span>
          </button>

          <button className="flex items-center justify-center bg-[#f0f0f2] transition hover:bg-black hover:text-white">
            <span className="-rotate-45 text-center text-sm font-bold uppercase">
              Weather
            </span>
          </button>
        </div>
      </section>

      <button
        onClick={() => navigate("/result")}
        className="absolute bottom-10 left-8 flex items-center gap-4"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>

      <button
        onClick={() => navigate("/summary")}
        className="absolute bottom-10 right-8 flex items-center gap-4"
      >
        <span className="text-sm font-bold uppercase">Get Summary</span>

        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">›</span>
        </div>
      </button>
    </main>
  );
}

export default Select;
