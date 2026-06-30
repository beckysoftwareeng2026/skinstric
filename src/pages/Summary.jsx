import SummaryCard from "../components/SummaryCard";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
function Summary() {
  return (
    <PageLayout className="min-h-screen bg-[#f4f4f2] text-black">
      <Navbar subtitle="A.I. Analysis" />

      <SummaryCard />
    </PageLayout>
  );
}

export default Summary;
