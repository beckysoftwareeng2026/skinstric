function EnterCodeButton({ dark = true, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`smooth-button border border-black px-3 py-1.5 text-[10px] font-bold uppercase ${
        dark
          ? "bg-black text-white hover:bg-transparent hover:text-black"
          : "bg-transparent text-black hover:bg-black hover:text-white"
      } ${className}`}
    >
      Enter Code
    </button>
  );
}

export default EnterCodeButton;
