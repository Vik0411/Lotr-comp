import { Route, Routes } from "react-router-dom";
import HeroManagement from "./components/HeroManagement";
import CampaignManagement from "./components/CampaignManagement";
import StableHeader from "./components/StableHeader";

function App() {
  return (
    <>
      <StableHeader />
      <Routes>
        <Route path="/" element={<CampaignManagement />} />
        <Route path="/hero" element={<HeroManagement />} />
      </Routes>
    </>
  );
}

export default App;
