import { useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  const name = localStorage.getItem("skinstricName");
  const location = localStorage.getItem("skinstricLocation");

  const apiResponse = JSON.parse(
    localStorage.getItem("skinstricPhaseOneResponse"),
  );

  return (
    <main className="min-h-screen bg-[#f4f4f2] text-black">
      <nav className="flex items-center justify-between px-8 py-8">
        <div className="flex items-center gap-3 text-sm font-bold">
          <span>SKINSTRIC</span>
          <span className="font-normal text-gray-400">[ INTRO ]</span>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="flex h-[75vh] items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase text-gray-500">
            Analysis Started
          </p>

          <h1 className="text-[64px] font-[200] leading-none">
            Thank you, {name || "Guest"}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm uppercase leading-relaxed text-gray-600">
            Your Skinstric analysis has started from{" "}
            {location || "your location"}. Your profile information has been
            saved successfully.
          </p>
          {apiResponse?.success && (
            <p className="mt-8 text-xs uppercase text-green-600">
              Analysis initialized successfully
            </p>
          )}

          <button
            onClick={() => navigate("/")}
            className="mt-10 border border-black px-6 py-3 text-xs font-bold uppercase transition hover:bg-black hover:text-white"
          >
            Return Home
          </button>
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

export default Summary;
