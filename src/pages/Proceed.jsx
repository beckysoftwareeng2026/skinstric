import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";

function Proceed() {
  const navigate = useNavigate();

  return (
    <PageLayout className="relative min-h-screen overflow-hidden bg-[#f4f4f2] text-black">
      <Navbar subtitle="A.I. Analysis" />

      <section className="relative flex h-[75vh] items-center justify-center">
        <div className="animate-slow-rotate absolute h-[520px] w-[520px] rotate-45 border border-dashed border-gray-300"></div>
        <div className="absolute h-[460px] w-[460px] rotate-[75deg] border border-dashed border-gray-300"></div>
        <div className="absolute h-[390px] w-[390px] rotate-[15deg] border border-dashed border-gray-300"></div>

        <div className="animate-fade-slide-up relative z-10 text-center">
          <h1 className="text-3xl font-normal">Thank you!</h1>

          <p className="mt-6 text-lg text-gray-600">
            Proceed for the next step
          </p>
        </div>
      </section>

      <button
        onClick={() => navigate("/location")}
        className="smooth-button absolute bottom-8 left-6 flex items-center gap-4 md:bottom-10 md:left-8"
      >
        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">‹</span>
        </div>

        <span className="text-sm font-bold uppercase">Back</span>
      </button>

      <button
        onClick={() => navigate("/result")}
        className="smooth-button absolute bottom-8 right-6 flex items-center gap-4 md:bottom-10 md:right-8"
      >
        <span className="text-sm font-bold uppercase">Proceed</span>

        <div className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45 text-lg">›</span>
        </div>
      </button>
    </PageLayout>
  );
}

export default Proceed;
