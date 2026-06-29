import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function Result() {
  const navigate = useNavigate();
  const previewImage =
    localStorage.getItem("skinstricImage") ||
    localStorage.getItem("skinstricSelfie");

  return (
    <PageLayout className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <nav className="animate-fade-slide-up flex items-start justify-between px-6 py-8 md:px-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span>SKINSTRIC</span>
            <span className="font-normal text-gray-400">[ INTRO ]</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase">To Start Analysis</p>
        </div>

        <button className="smooth-button border border-black bg-black px-3 py-1.5 text-[10px] font-bold uppercase text-white hover:bg-transparent hover:text-black">
          Enter Code
        </button>
      </nav>

      <section className="relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-4 md:min-h-[72vh]">
        <div className="animate-slow-rotate absolute h-[300px] w-[300px] rotate-45 border border-dashed border-gray-300 sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]"></div>
        <div className="absolute h-[260px] w-[260px] rotate-[75deg] border border-dashed border-gray-300 sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]"></div>

        <div className="animate-fade-slide-up relative z-10 mb-8 flex flex-col items-center">
          <p className="mb-2 text-sm">Preview</p>

          <div className="h-24 w-24 overflow-hidden border border-gray-300 bg-transparent sm:h-32 sm:w-32">
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="animate-fade-slide-up relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-20">
          <button
            onClick={() => navigate("/selfie")}
            className="smooth-button flex w-full max-w-xs flex-col items-center gap-4 border border-transparent py-4 hover:border-black md:w-72"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-black transition duration-300">
              <div className="h-20 w-20 rounded-full border-4 border-black">
                <div className="mx-auto mt-5 h-10 w-10 rotate-45 border-l-[28px] border-r-[28px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
              </div>
            </div>

            <p className="text-center text-sm uppercase leading-relaxed">
              Allow A.I.
              <br />
              To Scan Your Face
            </p>
          </button>

          <button
            onClick={() => navigate("/upload")}
            className="smooth-button flex w-full max-w-xs flex-col items-center gap-4 border border-transparent py-4 hover:border-black md:w-72"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-black transition duration-300">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-black">
                <div className="absolute bottom-0 h-10 w-full bg-black"></div>
                <div className="absolute right-5 top-4 h-5 w-5 rounded-full bg-black"></div>
              </div>
            </div>

            <p className="text-center text-sm uppercase leading-relaxed">
              Allow A.I.
              <br />
              Access Gallery
            </p>
          </button>
        </div>
      </section>

      <button
        onClick={() => navigate("/proceed")}
        className="smooth-button absolute bottom-12 left-6 flex items-center gap-4 md:left-8"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>
    </PageLayout>
  );
}

export default Result;
