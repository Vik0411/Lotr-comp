import { Link, Route, Routes } from "react-router-dom";
import HeroManagement from "./components/HeroManagement";
import CampaignManagement from "./components/CampaignManagement";
import { ListItemWithWhiteText } from "./components/atoms/ListItemWithWhiteText";
import { SectionHeader } from "./components/atoms/typography";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "black", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          <header>Scenario Name</header>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              height: "50px",
              width: "auto",
            }}
          >
            <Link to="/" style={{ marginRight: "100px" }}>
              Home
            </Link>
            <Link to="/hero" style={{ marginLeft: "100px" }}>
              Hero
            </Link>
          </div>
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              width: "100px",
              marginLeft: "100px",
              top: "0",
              opacity: "0.5",
            }}
          >
            <SectionHeader style={{ color: "white" }}>
              Current heroes
            </SectionHeader>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100px",
              marginRight: "100px",
              top: "0px",
              right: "0px",
              opacity: "0.5",
            }}
          >
            <SectionHeader style={{ color: "white" }}>
              Boons & Burdens
            </SectionHeader>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
            <ListItemWithWhiteText>Aragorn</ListItemWithWhiteText>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<CampaignManagement />} />
        <Route path="/hero" element={<HeroManagement />} />
      </Routes>
    </>
  );
}

export default App;
