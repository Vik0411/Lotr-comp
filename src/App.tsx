import { Route, Routes } from "react-router-dom";
import HeroManagement from "./components/HeroManagement";
import CampaignManagement from "./components/CampaignManagement";
import StableHeader from "./components/StableHeader";

function App() {
  return (
    <div>
      <StableHeader />
      <Routes>
        <Route path="/" element={<CampaignManagement />} />
        <Route path="/hero" element={<HeroManagement />} />
      </Routes>
    </div>
  );
}

export default App;
