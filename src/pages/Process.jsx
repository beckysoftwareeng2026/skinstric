import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Process() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/proceed");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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

      <section className="relative flex h-[75vh] items-center justify-center">
        <div className="absolute h-[520px] w-[520px] rotate-45 border border-dashed border-gray-300"></div>
        <div className="absolute h-[460px] w-[460px] rotate-[75deg] border border-dashed border-gray-300"></div>
        <div className="absolute h-[390px] w-[390px] rotate-[15deg] border border-dashed border-gray-300"></div>

        <div className="relative z-10 text-center">
          <p className="mb-8 text-lg text-gray-600">Processing submission</p>

          <div className="flex justify-center gap-5">
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-pulse [animation-delay:150ms]"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-pulse [animation-delay:300ms]"></span>
          </div>
        </div>
      </section>

      <button
        onClick={() => navigate("/location")}
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

export default Process;
