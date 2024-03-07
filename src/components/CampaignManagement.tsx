import CampaignScenario from "./CampaignScenario";
import CurrentScenarioDisplay from "./CurrentScenarioDisplay";
import {
  ContainerFlex,
  ContainerFlexColumn,
  ContainerHeroManagement,
  ContainerWithWhiteText,
} from "./atoms/Containers";
import BoonsAndBurdens from "./BoonsAndBurdens";
import { DynamicLore } from "./DynamicLore";
import WonScenarios from "./WonScenarios";
import AddCustomScenario from "./AddCustomScenario";
import { useContext } from "react";
import { LotrContext } from "../context";
import { filterScenarios } from "../utils";
import { SectionHeader } from "./atoms/typography";
import BoonsDisplay from "./BoonsDisplay";
import BurdensDisplay from "./BurdensDisplay";
import AninamtedPage from "./AnimatedPage";

function CampaignManagement() {
  const { campaign } = useContext(LotrContext);

  const notCurrentAndWon = filterScenarios(
    { won: true, current: false },
    campaign.scenarios
  );

  return (
    <ContainerHeroManagement>
      <AninamtedPage>
        {/* option with row styling here */}
        {/* <div> */}
        {/* <ContainerFlex> */}
        <div
          style={{
            display: "flex",
            // flexFlow: "row",
            flexFlow: "column",
            justifyContent: "space-between",
          }}
        >
          {notCurrentAndWon[0] && <WonScenarios />}
          {/* <div> */}
          <CampaignScenario />
          <AddCustomScenario />
          {/* </div> */}
          <CurrentScenarioDisplay />
        </div>

        {/* </ContainerFlex> */}
        {/* </div> */}
        <SectionHeader
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "100px",
          }}
        >
          Add Boons & Burdens
        </SectionHeader>
        <ContainerFlex style={{ margin: "30px 30px" }}>
          <ContainerFlexColumn>
            <BoonsAndBurdens />
          </ContainerFlexColumn>
        </ContainerFlex>
        <ContainerFlex>
          {campaign.boonsAndBurdens.boons[0] && <BoonsDisplay />}
          {campaign.boonsAndBurdens.burdens[0] && <BurdensDisplay />}
        </ContainerFlex>
        <ContainerWithWhiteText style={{ marginTop: "100px" }}>
          <DynamicLore />
        </ContainerWithWhiteText>
      </AninamtedPage>
    </ContainerHeroManagement>
  );
}

export default CampaignManagement;
