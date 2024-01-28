import CampaignScenario from "./CampaignScenario";
import CurrentScenarioDisplay from "./CurrentScenarioDisplay";
import {
  Container,
  ContainerFlex,
  ContainerWithWhiteText,
} from "./atoms/Containers";
import BoonsAndBurdens from "./BoonsAndBurdens";
import BoonsAndBurdensDisplay from "./BoonsAndBurdensDisplay";
import { DynamicLore } from "./DynamicLore";
import { styled } from "styled-components";
import WonScenarios from "./WonScenarios";
import AddCustomScenario from "./AddCustomScenario";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
  font-size: 20px;
`;
function CampaignManagement() {
  return (
    <ContainerHeroManagement>
      <div style={{ position: "relative" }}>
        <ContainerFlex>
          <WonScenarios />
          <div style={{ display: "flex", flexFlow: "column" }}>
            <CampaignScenario />
            <AddCustomScenario />
          </div>
          <CurrentScenarioDisplay />
        </ContainerFlex>
      </div>
      <ContainerFlex style={{ margin: "30px 30px" }}>
        <BoonsAndBurdens />
        <BoonsAndBurdensDisplay />
      </ContainerFlex>
      <ContainerWithWhiteText style={{ marginTop: "100px" }}>
        <DynamicLore />
      </ContainerWithWhiteText>
    </ContainerHeroManagement>
  );
}

export default CampaignManagement;
