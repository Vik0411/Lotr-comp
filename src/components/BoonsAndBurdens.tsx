import { ButtonShadow } from "./atoms/Button";
import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { styled } from "styled-components";
import { ContainerWithWhiteText } from "./atoms/Container";
import { LotrContext } from "../context";
import React from "react";

const ButtonShadowYellow = styled(ButtonShadow)`
  &:not([disabled]):active {
    box-shadow: yellow 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

const ButtonShadowBlood = styled(ButtonShadow)`
  &:not([disabled]):active {
    box-shadow: red 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function BoonsAndBurdens() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [boon, setBoon] = useState("");
  const [burden, setBurden] = useState("");

  function handleChange(e) {
    setBoon(e.target.value);
  }

  function handleChange2(e) {
    setBurden(e.target.value);
  }

  function submitBoons(e) {
    e.preventDefault();
    let newBoons = [...campaign.boonsAndBurdens.boons, boon];
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };

    setCampaign({ ...campaign, boonsAndBurdens: newBB });
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }

  function submitBurdens(e) {
    e.preventDefault();
    let newBurdens = [...campaign.boonsAndBurdens.burdens, boon];
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };

    setCampaign({ ...campaign, boonsAndBurdens: newBB });
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }

  return (
    <>
      <div>
        <SectionHeader>Add Boons & Burdens</SectionHeader>
        <form>
          <Input
            type="text"
            value={boon}
            onChange={handleChange}
            placeholder="your boons"
          />
          <ButtonShadowYellow value="sumbit boons" onClick={submitBoons}>
            submit boons
          </ButtonShadowYellow>
          <br />
          <Input
            type="text"
            value={burden}
            onChange={handleChange2}
            placeholder="your burdens"
          />
          <ButtonShadowBlood value="sumbit burdens" onClick={submitBurdens}>
            submit burdens
          </ButtonShadowBlood>
        </form>
      </div>
      <div>
        <ContainerWithWhiteText>Boons:</ContainerWithWhiteText>
        {campaign.boonsAndBurdens.boons.map((boon) => (
          <ListItemWithWhiteText>{boon}</ListItemWithWhiteText>
        ))}
      </div>
      <ContainerWithWhiteText>
        Burdens:
        {campaign.boonsAndBurdens.burdens.map((burden) => (
          <ListItemWithWhiteText>{burden}</ListItemWithWhiteText>
        ))}
      </ContainerWithWhiteText>
    </>
  );
}

export default BoonsAndBurdens;
