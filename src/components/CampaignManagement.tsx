import { LotrProvider } from "../context";
import CampaignScenario from "./CampaignScenario";
import CurrentScenarioDisplay from "./CurrentScenarioDisplay";
import {
  Container,
  ContainerFlex,
  ContainerWithWhiteText,
} from "./atoms/Container";
import BoonsAndBurdens from "./BoonsAndBurdens";
import BoonsAndBurdensDisplay from "./BoonsAndBurdensDisplay";
import { DynamicLore } from "./DynamicLore";
import { styled } from "styled-components";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
  font-size: 20px;
`;
function CampaignManagement() {
  return (
    <ContainerHeroManagement>
      <ContainerWithWhiteText>
        <DynamicLore />
      </ContainerWithWhiteText>
      <div style={{ position: "relative" }}>
        <CampaignScenario />
        <CurrentScenarioDisplay />
      </div>
      <ContainerFlex style={{ margin: "30px 30px" }}>
        <BoonsAndBurdens />
        <BoonsAndBurdensDisplay />
      </ContainerFlex>
    </ContainerHeroManagement>
  );
}

export default CampaignManagement;
