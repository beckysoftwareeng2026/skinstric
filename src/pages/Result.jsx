import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";

function Result() {
  const navigate = useNavigate();

  const previewImage =
    localStorage.getItem("skinstricImage") ||
    localStorage.getItem("skinstricSelfie");

  return (
    <PageLayout className="relative">
      <Navbar />

      <div className="animate-fade-slide-up absolute right-6 top-28 z-20 flex flex-col items-start md:right-8">
        <p className="mb-2 text-sm">Preview</p>

        <div className="h-28 w-28 overflow-hidden border border-gray-300 bg-transparent sm:h-36 sm:w-36">
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-6 pb-28 pt-8">
        <div className="animate-fade-slide-up grid w-full max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <button
            onClick={() => navigate("/selfie")}
            className="smooth-button group relative flex h-[360px] flex-col items-center justify-center"
          >
            <div className="animate-slow-rotate absolute h-[260px] w-[260px] rotate-45 border border-dashed border-gray-300 sm:h-[320px] sm:w-[320px]"></div>
            <div className="absolute h-[230px] w-[230px] rotate-[75deg] border border-dashed border-gray-300 sm:h-[290px] sm:w-[290px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-black bg-[#f4f4f2]">
                <div className="h-20 w-20 rounded-full border-4 border-black">
                  <div className="mx-auto mt-5 h-10 w-10 rotate-45 border-l-[28px] border-r-[28px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm uppercase leading-relaxed">
                Allow A.I.
                <br />
                To Scan Your Face
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate("/upload")}
            className="smooth-button group relative flex h-[360px] flex-col items-center justify-center"
          >
            <div className="animate-slow-rotate absolute h-[260px] w-[260px] rotate-45 border border-dashed border-gray-300 sm:h-[320px] sm:w-[320px]"></div>
            <div className="absolute h-[230px] w-[230px] rotate-[75deg] border border-dashed border-gray-300 sm:h-[290px] sm:w-[290px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-black bg-[#f4f4f2]">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-black">
                  <div className="absolute bottom-0 h-10 w-full bg-black"></div>
                  <div className="absolute right-5 top-4 h-5 w-5 rounded-full bg-black"></div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm uppercase leading-relaxed">
                Allow A.I.
                <br />
                Access Gallery
              </p>
            </div>
          </button>
        </div>
      </section>

      <BottomNavigation onBack={() => navigate("/proceed")} showNext={false} />
    </PageLayout>
  );
}

export default Result;
