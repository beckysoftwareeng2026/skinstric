import EnterCodeButton from "./EnterCodeButton";

function NavBarHome({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav className="animate-fade-slide-up flex items-center justify-between px-6 py-8 md:px-8">
        <div className="flex items-center gap-3 text-sm font-bold">
          <span>SKINSTRIC</span>
          <span className="font-normal text-gray-400">[ INTRO ]</span>
        </div>

        <div className="hidden md:block">
          <EnterCodeButton dark={false} />
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="smooth-button flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-black"></span>
          <span className="h-[2px] w-6 bg-black"></span>
          <span className="h-[2px] w-6 bg-black"></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 animate-fade-slide-up bg-[#f4f4f2] px-8 py-8 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-bold">
              <span>SKINSTRIC</span>
              <span className="font-normal text-gray-400">[ INTRO ]</span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="smooth-button text-3xl font-light"
            >
              ✕
            </button>
          </div>

          <div className="mt-20 flex flex-col gap-8 text-3xl font-[200]">
            <a href="/" onClick={() => setMenuOpen(false)} className="w-fit">
              Home
            </a>

            <a
              href="/testing"
              onClick={() => setMenuOpen(false)}
              className="w-fit"
            >
              Take Test
            </a>

            <EnterCodeButton dark={false} className="w-fit" />
          </div>
        </div>
      )}
    </>
  );
}

export default NavBarHome;
