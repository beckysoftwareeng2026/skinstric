import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

function SummaryCard() {
  const navigate = useNavigate();

  const response = JSON.parse(
    localStorage.getItem("skinstricPhaseTwoResponse"),
  );

  const data = response?.data || {};

  const sortScores = (scores = {}) => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1]);
  };

  const categories = [
    { key: "race", label: "Race", displayLabel: "RACE" },
    { key: "age", label: "Age", displayLabel: "AGE" },
    { key: "gender", label: "Sex", displayLabel: "SEX" },
  ];

  const [activeCategory, setActiveCategory] = useState("race");

  const [selected, setSelected] = useState({
    race: sortScores(data.race)?.[0]?.[0] || "Unknown",
    age: sortScores(data.age)?.[0]?.[0] || "Unknown",
    gender: sortScores(data.gender)?.[0]?.[0] || "Unknown",
  });

  const currentCategory = categories.find(
    (category) => category.key === activeCategory,
  );

  const currentOptions = sortScores(data[activeCategory]);
  const selectedScore =
    currentOptions.find(([label]) => label === selected[activeCategory])?.[1] ||
    currentOptions[0]?.[1] ||
    0;

  const selectedPercent = Math.round(selectedScore * 100);

  function formatValue(value, key) {
    if (key === "age" && value !== "Unknown") {
      return `${value} y.o.`;
    }

    return value;
  }

  return (
    <div className="px-6 pb-24 pt-4 md:px-8">
      <section className="animate-fade-slide-up">
        <h1 className="mt-3 text-[44px] font-[200] uppercase leading-none sm:text-[60px] md:text-[76px]">
          Demographics
        </h1>

        <p className="mt-4 text-sm uppercase">
          Predicted {currentCategory.displayLabel}
        </p>
      </section>

      <section className="animate-fade-slide-up mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[190px_1fr_360px]">
        <div className="space-y-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`smooth-button w-full border-t border-black p-4 text-left uppercase ${
                  isActive ? "bg-black text-white" : "bg-[#eeeeef] text-black"
                }`}
              >
                <p className="text-lg font-bold">
                  {formatValue(selected[category.key], category.key)}
                </p>
                <p className="mt-3 text-lg font-bold">
                  {category.displayLabel}
                </p>
              </button>
            );
          })}
        </div>

        <div className="border-t border-black bg-[#f1f1f2] p-6">
          <h2 className="text-[42px] font-[200] leading-none md:text-[46px]">
            {formatValue(selected[activeCategory], activeCategory)}
          </h2>

          <div className="mt-8 flex justify-center">
            <div
              className="flex h-60 w-60 items-center justify-center rounded-full md:h-96 md:w-96"
              style={{
                background: `conic-gradient(#1a1a1a ${selectedPercent}%, #d9d9d9 ${selectedPercent}% 100%)`,
              }}
            >
              <div className="flex h-[88%] w-[88%] items-center justify-center rounded-full bg-[#f1f1f2]">
                <span className="text-4xl font-[200]">{selectedPercent}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black bg-[#f1f1f2]">
          <div className="flex items-center justify-between p-4 text-lg uppercase">
            <span>{currentCategory.displayLabel}</span>
            <span>A.I. Confidence</span>
          </div>

          <div>
            {currentOptions.map(([label, score]) => {
              const isSelected = selected[activeCategory] === label;

              return (
                <button
                  key={label}
                  onClick={() =>
                    setSelected((prev) => ({
                      ...prev,
                      [activeCategory]: label,
                    }))
                  }
                  className={`smooth-button flex w-full items-center justify-between px-4 py-3 text-left text-lg ${
                    isSelected ? "bg-black text-white" : "hover:bg-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xl">◇</span>
                    {formatValue(label, activeCategory)}
                  </span>

                  <span>{Math.round(score * 100)}%</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <BottomNavigation onBack={() => navigate("/select")} showNext={false} />
    </div>
  );
}

export default SummaryCard;
