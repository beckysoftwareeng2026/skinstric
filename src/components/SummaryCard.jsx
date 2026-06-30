import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

function SummaryCard() {
  const navigate = useNavigate();

  const response = JSON.parse(
    localStorage.getItem("skinstricPhaseTwoResponse"),
  );

  const data = response?.data || {};

  const steps = [
    { key: "race", label: "Race" },
    { key: "age", label: "Age" },
    { key: "gender", label: "Gender" },
  ];

  const sortScores = (scores = {}) => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1]);
  };

  const [stepIndex, setStepIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const currentStep = steps[stepIndex];
  const currentOptions = sortScores(data[currentStep.key]);
  const topPrediction = currentOptions[0]?.[0] || "Unknown";
  const topScore = currentOptions[0]?.[1] || 0;

  const [selected, setSelected] = useState({
    race: sortScores(data.race)?.[0]?.[0] || "",
    age: sortScores(data.age)?.[0]?.[0] || "",
    gender: sortScores(data.gender)?.[0]?.[0] || "",
  });

  function scrollPageToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function handleNext() {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setAnimationKey((prev) => prev + 1);
      scrollPageToTop();
      return;
    }

    localStorage.setItem(
      "skinstricSelectedAttributes",
      JSON.stringify(selected),
    );

    navigate("/select");
  }

  function handleBack() {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
      setAnimationKey((prev) => prev + 1);
      scrollPageToTop();
      return;
    }

    navigate("/select");
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-6xl flex-col px-6 pb-32 pt-8">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Demographics
        </p>

        <h1 className="mt-3 text-[44px] font-[200] leading-none md:text-[72px]">
          Predicted {currentStep.label}
        </h1>

        <p className="mt-6 max-w-xl text-sm uppercase leading-relaxed text-gray-500">
          Skinstric estimated your demographics based on your selfie. If
          something doesn't look right, you can change it below.
        </p>
      </div>

      <div
        key={animationKey}
        className="flex flex-1 animate-fade-slide-up flex-col items-center justify-center gap-16 lg:flex-row"
      >
        <div
          key={`heading-${animationKey}`}
          className="animate-fade-slide-up text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            {currentStep.label}
          </p>

          <h2 className="mt-3 text-5xl font-[200] md:text-7xl">
            {selected[currentStep.key] || topPrediction}
          </h2>
        </div>

        <div
          key={`confidence-${animationKey}`}
          className="animate-fade-slide-up flex flex-col items-center"
        >
          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-black">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-black">
              <span className="text-4xl font-[200]">
                {(topScore * 100).toFixed(0)}%
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest">
            A.I. Confidence
          </p>
        </div>

        <div
          key={`options-${animationKey}`}
          className="animate-fade-slide-up w-full max-w-sm"
        >
          <div className="space-y-3">
            {currentOptions.map(([item, score]) => {
              const isSelected = selected[currentStep.key] === item;

              return (
                <button
                  key={item}
                  onClick={() =>
                    setSelected((prev) => ({
                      ...prev,
                      [currentStep.key]: item,
                    }))
                  }
                  className={`flex w-full items-center justify-between border px-5 py-4 text-left text-sm uppercase transition ${
                    isSelected
                      ? "border-black bg-black text-white"
                      : "border-black/20 hover:border-black"
                  }`}
                >
                  <span>{item}</span>
                  <span>{(score * 100).toFixed(2)}%</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNavigation
        onBack={handleBack}
        onNext={handleNext}
        nextText={
          stepIndex === 0 ? "Age" : stepIndex === 1 ? "Gender" : "Finish"
        }
      />
    </div>
  );
}

export default SummaryCard;
