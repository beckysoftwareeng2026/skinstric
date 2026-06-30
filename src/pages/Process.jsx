import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";

function Process() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/proceed");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageLayout className="relative">
      <Navbar />

      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden px-6">
        <div className="animate-slow-rotate absolute h-[300px] w-[300px] rotate-45 border border-dashed border-gray-300 sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]"></div>
        <div className="absolute h-[260px] w-[260px] rotate-[75deg] border border-dashed border-gray-300 sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]"></div>
        <div className="absolute h-[220px] w-[220px] rotate-[15deg] border border-dashed border-gray-300 sm:h-[300px] sm:w-[300px] md:h-[390px] md:w-[390px]"></div>

        <div className="animate-fade-slide-up relative z-10 text-center">
          <p className="mb-8 text-sm font-bold uppercase tracking-wide text-black">
            Preparing Your Analysis
          </p>

          <div className="mt-2 flex justify-center gap-4">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-black/40"></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-black/40 [animation-delay:150ms]"></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-black/40 [animation-delay:300ms]"></span>
          </div>
        </div>
      </section>

      <BottomNavigation onBack={() => navigate("/location")} showNext={false} />
    </PageLayout>
  );
}

export default Process;
