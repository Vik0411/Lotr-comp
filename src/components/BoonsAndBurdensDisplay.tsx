import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";
import React from "react";

function BoonsAndBurdensDisplay() {
  const { campaign } = React.useContext(LotrContext);

  return (
    <>
      <div>
        <SectionHeader>Boons</SectionHeader>
        {campaign.boonsAndBurdens.boons.map((boon) => (
          <ListItemWithWhiteText>{boon}</ListItemWithWhiteText>
        ))}
      </div>
      <div>
        <SectionHeader>Burdens</SectionHeader>
        {campaign.boonsAndBurdens.burdens.map((burden) => (
          <ListItemWithWhiteText>{burden}</ListItemWithWhiteText>
        ))}
      </div>
    </>
  );
}

export default BoonsAndBurdensDisplay;
