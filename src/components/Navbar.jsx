import EnterCodeButton from "./EnterCodeButton";

function Navbar({ subtitle = "To Start Analysis", intro = true, children }) {
  return (
    <nav className="animate-fade-slide-up px-6 py-8 md:px-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>

            {intro && (
              <span className="font-normal text-gray-400">[ INTRO ]</span>
            )}
          </div>

          {children ? (
            <div className="mt-8">{children}</div>
          ) : (
            subtitle && (
              <p className="mt-8 text-xs font-bold uppercase">{subtitle}</p>
            )
          )}
        </div>

        <EnterCodeButton />
      </div>
    </nav>
  );
}

export default Navbar;
