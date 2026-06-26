import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="flex items-start justify-between px-8 py-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase">To Start Analysis</p>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <div className="absolute right-10 top-40">
        <p className="mb-2 text-sm">Preview</p>
        <div className="h-32 w-32 border border-gray-300 bg-transparent"></div>
      </div>

      <section className="flex h-[75vh] items-center justify-center gap-48">
        <button
          onClick={() => alert("Camera scan coming soon")}
          className="relative flex h-[420px] w-[420px] items-center justify-center"
        >
          <div className="absolute h-[390px] w-[390px] rotate-45 border border-dashed border-gray-300"></div>
          <div className="absolute h-[340px] w-[340px] rotate-[75deg] border border-dashed border-gray-300"></div>

          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-black">
            <div className="h-20 w-20 rounded-full border-4 border-black">
              <div className="mx-auto mt-5 h-10 w-10 rotate-45 border-l-[28px] border-r-[28px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </div>

          <p className="absolute right-0 top-36 text-left text-sm uppercase leading-relaxed">
            Allow A.I.
            <br />
            To Scan Your Face
          </p>
        </button>

        <button
          onClick={() => navigate("/upload")}
          className="relative flex h-[420px] w-[420px] items-center justify-center"
        >
          <div className="absolute h-[390px] w-[390px] rotate-45 border border-dashed border-gray-300"></div>
          <div className="absolute h-[340px] w-[340px] rotate-[75deg] border border-dashed border-gray-300"></div>

          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-black">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-black">
              <div className="absolute bottom-0 h-10 w-full bg-black"></div>
              <div className="absolute right-5 top-4 h-5 w-5 rounded-full bg-black"></div>
            </div>
          </div>

          <p className="absolute left-0 bottom-28 text-right text-sm uppercase leading-relaxed">
            Allow A.I.
            <br />
            Access Gallery
          </p>
        </button>
      </section>

      <button
        onClick={() => navigate("/demographics")}
        className="absolute bottom-10 left-8 flex items-center gap-4"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
    </main>
  );
}

export default Result;
