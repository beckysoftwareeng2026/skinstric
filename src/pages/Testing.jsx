import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Testing() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = /^[A-Za-z\s]+$/.test(name.trim());

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!isValid) {
      setError("Name can only contain letters and spaces.");
      return;
    }

    localStorage.setItem("skinstricName", name.trim());
    navigate("/location");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="flex items-start justify-between px-6 py-8 md:px-8">
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

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
        <div className="absolute h-[300px] w-[300px] rotate-45 border border-dashed border-gray-300 sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]"></div>
        <div className="absolute h-[260px] w-[260px] rotate-[75deg] border border-dashed border-gray-300 sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]"></div>
        <div className="absolute h-[220px] w-[220px] rotate-[15deg] border border-dashed border-gray-300 sm:h-[300px] sm:w-[300px] md:h-[390px] md:w-[390px]"></div>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex w-full -translate-y-8 flex-col items-center text-center md:-translate-y-10"
        >
          <p className="mb-3 text-xs font-medium uppercase text-gray-400">
            Click To Type
          </p>

          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            autoFocus
            placeholder="Enter your name"
            className="w-full max-w-[520px] border-b border-black bg-transparent text-center text-[30px] font-[200] leading-none outline-none placeholder:text-gray-300 sm:text-[42px] md:text-[56px]"
          />

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 border border-black px-6 py-3 text-xs font-bold uppercase"
          >
            Continue
          </button>
        </form>
      </section>

      <button
        onClick={() => navigate("/")}
        className="absolute bottom-10 left-6 flex items-center gap-4 md:bottom-12 md:left-8"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
    </main>
  );
}

export default Testing;
