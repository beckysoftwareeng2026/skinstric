import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Location from "./pages/Location";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
