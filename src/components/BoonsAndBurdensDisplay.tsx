import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesHaveImage } from "../utils";
import { BorBCard } from "./atoms/BorBCard";

function BoonsAndBurdensDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  function cancelBoon(boon) {
    let newBoons = campaign.boonsAndBurdens.boons.filter(
      (bn) => bn.index !== boon.index
    );
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  function cancelBurden(burden) {
    let newBurdens = campaign.boonsAndBurdens.burdens.filter(
      (br) => br.index !== burden.index
    );
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

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
          <ListItemWithWhiteText key={boon.index}>
            {doesHaveImage(boon.name) ? (
              <div style={{ display: "flex", flexFlow: "column" }}>
                <div>{boon.name}</div>
                <BorBCard
                  alt=""
                  src={require(`../images/bb/${boon.name}.jpg`)}
                ></BorBCard>
                <button
                  style={{
                    backgroundColor: "transparent",
                    paddingInline: "0px",
                    paddingBlock: "0px",
                    borderWidth: "0px",
                  }}
                  onClick={() => cancelBoon(boon)}
                >
                  <CancelImage
                    alt=""
                    src={require("../images/cancel-1.png")}
                  ></CancelImage>
                </button>
              </div>
            ) : (
              <div key={boon.index}>
                <div>{boon.name}</div>
                <BorBCard
                  alt=""
                  src={require(`../images/nonffg.jpg`)}
                ></BorBCard>
                <button
                  style={{
                    backgroundColor: "transparent",
                    paddingInline: "0px",
                    paddingBlock: "0px",
                    borderWidth: "0px",
                  }}
                  onClick={() => cancelBoon(boon)}
                >
                  <CancelImage
                    alt=""
                    src={require("../images/cancel-1.png")}
                  ></CancelImage>
                </button>
              </div>
            )}
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
          <ListItemWithWhiteText key={burden.index}>
            {doesHaveImage(burden.name) ? (
              <div style={{ display: "flex", flexFlow: "column" }}>
                <div>{burden.name}</div>
                <BorBCard
                  alt=""
                  src={require(`../images/bb/${burden.name}.jpg`)}
                ></BorBCard>
                <button
                  style={{
                    backgroundColor: "transparent",
                    paddingInline: "0px",
                    paddingBlock: "0px",
                    borderWidth: "0px",
                  }}
                  onClick={() => cancelBurden(burden)}
                >
                  <CancelImage
                    alt=""
                    src={require("../images/cancel-1.png")}
                  ></CancelImage>
                </button>
              </div>
            ) : (
              <div key={burden.index}>
                <div>{burden.name}</div>
                <BorBCard
                  alt=""
                  src={require("../images/burden.jpg")}
                ></BorBCard>
                <button
                  style={{
                    backgroundColor: "transparent",
                    paddingInline: "0px",
                    paddingBlock: "0px",
                    borderWidth: "0px",
                  }}
                  onClick={() => cancelBurden(burden)}
                >
                  <CancelImage
                    alt=""
                    src={require("../images/cancel-1.png")}
                  ></CancelImage>
                </button>
              </div>
            )}
          </ListItemWithWhiteText>
        ))}
      </ul>
    </div>
  );
}

export default BoonsAndBurdensDisplay;
