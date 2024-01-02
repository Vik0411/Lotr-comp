import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesHaveImage } from "../utils";
import { hover } from "@testing-library/user-event/dist/hover";
import { BorBCard } from "./atoms/BorBCard";

function BoonsAndBurdensDisplay() {
  const { campaign } = React.useContext(LotrContext);

  return (
    <div style={{ display: "flex" }}>
      <SectionHeader>Boons</SectionHeader>
      <ul
        style={{
          columnWidth: "200px",
          margin: "5px 5px",
          maxHeight: "400px",
          maxWidth: "400px",
          overflow: "auto",
        }}
      >
        {campaign.boonsAndBurdens.boons.map((boon) => (
          <ListItemWithWhiteText>
            {doesHaveImage(boon) ? (
              <BorBCard
                alt=""
                src={require(`../images/bb/${boon}.jpg`)}
              ></BorBCard>
            ) : (
              <BorBCard alt="" src={require(`../images/nonffg.jpg`)}></BorBCard>
            )}
            <CancelImage
              alt=""
              src={require("../images/cancel-1.png")}
            ></CancelImage>
          </ListItemWithWhiteText>
        ))}
      </ul>
      <SectionHeader>Burdens</SectionHeader>
      <ul
        style={{
          columnWidth: "200px",
          margin: "5px 5px",
          maxHeight: "400px",
          maxWidth: "400px",
          overflow: "auto",
          backgroundColor: "transparent",
        }}
      >
        {campaign.boonsAndBurdens.burdens.map((burden) => (
          <ListItemWithWhiteText>
            {doesHaveImage(burden) ? (
              <BorBCard
                alt=""
                src={require(`../images/bb/${burden}.jpg`)}
              ></BorBCard>
            ) : (
              <BorBCard alt="" src={require(`../images/nonffg.jpg`)}></BorBCard>
            )}
            <CancelImage
              alt=""
              src={require("../images/cancel-1.png")}
            ></CancelImage>
          </ListItemWithWhiteText>
        ))}
      </ul>
    </div>
  );
}

export default BoonsAndBurdensDisplay;
