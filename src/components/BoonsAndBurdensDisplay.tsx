import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";

function BoonsAndBurdensDisplay() {
  const { campaign } = React.useContext(LotrContext);

  return (
    <>
      <ul
        style={{
          columnWidth: "200px",
          margin: "5px 5px",
          maxHeight: "250px",
          maxWidth: "300px",
          overflow: "auto",
          scrollbarColor: "red",
        }}
      >
        <SectionHeader>Boons</SectionHeader>
        {campaign.boonsAndBurdens.boons.map((boon) => (
          <ListItemWithWhiteText>
            {boon}
            <CancelImage
              alt=""
              src={require("../images/cancel-1.png")}
            ></CancelImage>
          </ListItemWithWhiteText>
        ))}
      </ul>
      <ul
        style={{
          columnWidth: "200px",
          margin: "5px 5px",
          maxHeight: "250px",
          maxWidth: "200px",
          overflow: "auto",
          backgroundColor: "transparent",
        }}
      >
        <SectionHeader>Burdens</SectionHeader>
        {campaign.boonsAndBurdens.burdens.map((burden) => (
          <ListItemWithWhiteText>
            {burden}
            <CancelImage
              alt=""
              src={require("../images/cancel-1.png")}
            ></CancelImage>
          </ListItemWithWhiteText>
        ))}
      </ul>
    </>
  );
}

export default BoonsAndBurdensDisplay;
