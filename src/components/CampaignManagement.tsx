import CampaignScenario from "./CampaignScenario";
import CurrentScenarioDisplay from "./CurrentScenarioDisplay";
import {
  Container,
  ContainerFlex,
  ContainerFlexColumn,
  ContainerWithWhiteText,
} from "./atoms/Containers";
import BoonsAndBurdens from "./BoonsAndBurdens";
import { DynamicLore } from "./DynamicLore";
import { styled } from "styled-components";
import WonScenarios from "./WonScenarios";
import AddCustomScenario from "./AddCustomScenario";
import { useContext } from "react";
import { LotrContext } from "../context";
import { filterScenarios } from "../utils";
import { SectionHeader } from "./atoms/typography";
import BoonsDisplay from "./BoonsDisplay copy";
import BurdensDisplay from "./BurdensDisplay";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
  font-size: 20px;
`;
function CampaignManagement() {
  const { campaign } = useContext(LotrContext);

  let notCurrentAndWon = filterScenarios(
    { won: true, current: false },
    campaign.scenarios
  );

  return (
    <ContainerHeroManagement>
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
      <SectionHeader style={{ textAlign: "center", marginBottom: "0px" }}>
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
    </ContainerHeroManagement>
  );
}

export default CampaignManagement;
