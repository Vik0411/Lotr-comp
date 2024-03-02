import { Route, Routes, useLocation } from "react-router-dom";
import HeroManagement from "./components/HeroManagement";
import CampaignManagement from "./components/CampaignManagement";
import StableHeader from "./components/StableHeader";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <StableHeader />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<CampaignManagement />} />
          <Route path="/hero" element={<HeroManagement />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
