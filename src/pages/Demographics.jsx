import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Demographics() {
  const navigate = useNavigate();

  const response = JSON.parse(
    localStorage.getItem("skinstricPhaseTwoResponse"),
  );

  const data = response?.data || {};

  const sortScores = (scores = {}) => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1]);
  };

  const [selected, setSelected] = useState({
    race: sortScores(data.race)?.[0]?.[0] || "",
    age: sortScores(data.age)?.[0]?.[0] || "",
    gender: sortScores(data.gender)?.[0]?.[0] || "",
  });

  const categories = [
    { key: "race", title: "Race" },
    { key: "age", title: "Age" },
    { key: "gender", title: "Gender" },
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f2] px-8 py-8 text-black">
      <nav className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8  mb-20 text-xs font-bold uppercase">
            A.I. Analysis
          </p>
        </div>

        <button className="border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Enter Code
        </button>
      </nav>

      <section className="mt-10">
        <p className="text-sm font-bold uppercase">Demographics</p>

        <h1 className="mt-2 text-[64px] font-[200] leading-none">
          Predicted Race & Age
        </h1>

        <p className="mt-4 text-sm uppercase text-gray-500">
          Skinstric estimated your demographics from your image.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.key}
              className="border border-black/20 bg-white/40 p-6"
            >
              <h2 className="mb-6 text-lg font-bold uppercase">
                {category.title}
              </h2>

              <div className="space-y-3">
                {sortScores(data[category.key]).map(([label, score]) => {
                  const isSelected = selected[category.key] === label;

                  return (
                    <button
                      key={label}
                      onClick={() =>
                        setSelected((prev) => ({
                          ...prev,
                          [category.key]: label,
                        }))
                      }
                      className={`flex w-full items-center justify-between border px-4 py-3 text-left text-sm uppercase transition ${
                        isSelected
                          ? "border-black bg-black text-white"
                          : "border-black/20 hover:border-black"
                      }`}
                    >
                      <span>{label}</span>
                      <span>{(score * 100).toFixed(2)}%</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-black/20 bg-white/40 p-6">
          <p className="text-xs font-bold uppercase text-gray-500">
            Selected Actual Attributes
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 text-sm uppercase md:grid-cols-3">
            <p>
              <strong>Race:</strong> {selected.race}
            </p>
            <p>
              <strong>Age:</strong> {selected.age}
            </p>
            <p>
              <strong>Gender:</strong> {selected.gender}
            </p>
          </div>
        </div>
      </section>

      <button
        onClick={() => navigate("/upload")}
        className="fixed bottom-10 left-8 flex items-center gap-4"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
      <button
        onClick={() => navigate("/result")}
        className="fixed bottom-10 right-8 flex items-center gap-4"
      >
        <span className="text-sm font-bold uppercase">Proceed</span>

        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">›</span>
        </div>
      </button>
    </main>
  );
}

export default Demographics;
