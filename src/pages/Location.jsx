import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Location() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = /^[A-Za-z\s]+$/.test(location.trim());

    if (!location.trim()) {
      setError("Please enter your location.");
      return;
    }

    if (!isValid) {
      setError("Location can only contain letters and spaces.");
      return;
    }

    const name = localStorage.getItem("skinstricName");

    localStorage.setItem("skinstricLocation", location.trim());

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location: location.trim(),
          }),
        },
      );

      const data = await response.json();

      console.log("Phase One Response:", data);

      localStorage.setItem("skinstricPhaseOneResponse", JSON.stringify(data));

      navigate("/summary");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f4f2] text-black">
      <nav className="flex items-center justify-between px-8 py-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase">Your Location</p>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden">
        <div className="absolute h-[420px] w-[420px] rotate-45 border border-dashed border-gray-300"></div>
        <div className="absolute h-[360px] w-[360px] rotate-[75deg] border border-dashed border-gray-300"></div>
        <div className="absolute h-[300px] w-[300px] rotate-[15deg] border border-dashed border-gray-300"></div>

        <form onSubmit={handleSubmit} className="relative z-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase text-gray-400">
            Click To Type
          </p>

          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setError("");
            }}
            autoFocus
            placeholder="Enter your location"
            className="w-[520px] border-b border-black bg-transparent text-center text-[56px] font-[200] leading-none outline-none placeholder:text-gray-300"
          />

          {error && (
            <p className="mt-4 text-xs font-bold uppercase text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 border border-black px-6 py-3 text-xs font-bold uppercase transition hover:bg-black hover:text-white"
          >
            Continue
          </button>
        </form>
      </section>

      <button
        onClick={() => navigate("/testing")}
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

export default Location;
