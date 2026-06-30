function BottomNavigation({
  onBack,
  onNext,
  backText = "Back",
  nextText = "Proceed",
  showNext = true,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-[#f4f4f2]/95 px-6 py-5 md:px-8">
      <button
        onClick={onBack}
        className="smooth-button flex items-center gap-4"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">{backText}</span>
      </button>

      {showNext && (
        <button
          onClick={onNext}
          className="smooth-button flex items-center gap-4"
        >
          <span className="text-sm font-bold uppercase">{nextText}</span>

          <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black bg-[#f4f4f2]">
            <span className="-rotate-45 text-lg">›</span>
          </div>
        </button>
      )}
    </div>
  );
}

export default BottomNavigation;
