import { Paragraph, SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesBurdenHaveImage, doesHaveImage } from "../utils";
import { BorBCard } from "./atoms/BorBCard";
import {
  ContainerCurrentCard,
  ContainerFlex,
  ContainerFlexColumn,
} from "./atoms/Containers";
import { CancelBtn } from "./atoms/CancelBtn";
import { Boon, Burden } from "../types";

function BoonsAndBurdensDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function cancelBoon(boon: Boon) {
    let newBoons = campaign.boonsAndBurdens.boons.filter(
      (bn) => bn.index !== boon.index
    );
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  function cancelBurden(burden: Burden) {
    let newBurdens = campaign.boonsAndBurdens.burdens.filter(
      (br) => br.index !== burden.index
    );
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  return (
    <ContainerFlex>
      <SectionHeader>Boons</SectionHeader>
      <ContainerFlexColumn>
        {campaign.boonsAndBurdens.boons.map((boon) => (
          <div key={boon.index} style={{ margin: "15px 15px" }}>
            {doesHaveImage(boon.image) ? (
              <ContainerCurrentCard key={boon.index} style={{ width: "180px" }}>
                <Paragraph>
                  {boon.name}
                  <CancelBtn onClick={() => cancelBoon(boon)}>
                    <CancelImage
                      alt=""
                      src={"images/cancel-1.png"}
                    ></CancelImage>
                  </CancelBtn>
                </Paragraph>
                {boon.extraInfo !== "" && (
                  <Paragraph
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "60px",
                      marginLeft: "14px",
                      marginRight: "5px",
                      backgroundColor: "rgba(1, 1, 1, 0.3)",
                      borderRadius: "20px",
                    }}
                  >{`extra info: ${boon.extraInfo}`}</Paragraph>
                )}
                <BorBCard alt="" src={`images/bb/${boon.image}.jpg`}></BorBCard>
              </ContainerCurrentCard>
            ) : (
              <ContainerCurrentCard key={boon.index}>
                <Paragraph>
                  {boon.name}
                  <CancelBtn onClick={() => cancelBoon(boon)}>
                    <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
                  </CancelBtn>
                </Paragraph>
                {boon.extraInfo !== "" && (
                  <Paragraph
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "60px",
                      marginLeft: "14px",
                      marginRight: "5px",
                      backgroundColor: "rgba(1, 1, 1, 0.3)",
                      borderRadius: "20px",
                    }}
                  >{`extra info: ${boon.extraInfo}`}</Paragraph>
                )}
                <BorBCard alt="" src={`../images/nonffg.jpg`}></BorBCard>
              </ContainerCurrentCard>
            )}
          </div>
        ))}
      </ContainerFlexColumn>
      <ContainerFlex>
        <SectionHeader>Burdens</SectionHeader>
        <ContainerFlexColumn>
          {campaign.boonsAndBurdens.burdens.map((burden) => (
            <div key={burden.index} style={{ margin: "15px 15px" }}>
              {doesBurdenHaveImage(burden.image + ".jpg") ? (
                <ContainerCurrentCard style={{ width: "180px" }}>
                  <Paragraph>
                    {burden.name}
                    <CancelBtn onClick={() => cancelBurden(burden)}>
                      <CancelImage
                        alt=""
                        src="images/cancel-1.png"
                      ></CancelImage>
                    </CancelBtn>
                  </Paragraph>
                  {burden.extraInfo !== "" && (
                    <Paragraph
                      style={{
                        color: "white",
                        position: "absolute",
                        top: "60px",
                        marginLeft: "14px",
                        marginRight: "5px",
                        backgroundColor: "rgba(1, 1, 1, 0.3)",
                        borderRadius: "20px",
                      }}
                    >{`extra info: ${burden.extraInfo}`}</Paragraph>
                  )}
                  <BorBCard
                    alt=""
                    src={`images/bb/burdens/${burden.image}.jpg`}
                  ></BorBCard>
                </ContainerCurrentCard>
              ) : (
                <ContainerCurrentCard key={burden.index}>
                  <Paragraph>
                    {burden.name}
                    <CancelBtn onClick={() => cancelBurden(burden)}>
                      <CancelImage
                        alt=""
                        src="images/cancel-1.png"
                      ></CancelImage>
                    </CancelBtn>
                    {burden.extraInfo !== "" && (
                      <Paragraph
                        style={{
                          color: "white",
                          position: "absolute",
                          top: "60px",
                          marginLeft: "14px",
                          marginRight: "5px",
                          backgroundColor: "rgba(1, 1, 1, 0.3)",
                          borderRadius: "20px",
                        }}
                      >{`extra info: ${burden.extraInfo}`}</Paragraph>
                    )}
                  </Paragraph>
                  <BorBCard alt="" src="images/burden.jpg"></BorBCard>
                </ContainerCurrentCard>
              )}
            </div>
          ))}
        </ContainerFlexColumn>
      </ContainerFlex>
    </ContainerFlex>
  );
}

export default BoonsAndBurdensDisplay;
