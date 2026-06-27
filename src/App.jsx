import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Location from "./pages/Location";
import Summary from "./pages/Summary";
import Upload from "./pages/Upload";
import Process from "./pages/Process";
import Proceed from "./pages/Proceed";
import Demographics from "./pages/Demographics";
import Result from "./pages/Result";
import Selfie from "./pages/Selfie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/process" element={<Process />} />
        <Route path="/proceed" element={<Proceed />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/result" element={<Result />} />
        <Route path="/selfie" element={<Selfie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
