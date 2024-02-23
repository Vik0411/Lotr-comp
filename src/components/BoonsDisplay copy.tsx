import { Paragraph } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesHaveImage } from "../utils";
import { BorBCard } from "./atoms/BorBCard";
import {
  ContainerCurrentCard,
  ContainerFlex,
  ContainerFlexColumn,
} from "./atoms/Containers";
import { CancelBtn } from "./atoms/CancelBtn";
import { Boon } from "../types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "../index.css";
// import required modules
import { EffectCards } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";

function BoonsDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function cancelBoon(boon: Boon) {
    let newBoons = campaign.boonsAndBurdens.boons.filter(
      (bn) => bn.index !== boon.index
    );
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  return (
    <ContainerFlex>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <ContainerFlex style={{ marginLeft: "20px" }}>
          <ContainerFlexColumn>
            {campaign.boonsAndBurdens.boons.map((boon) => (
              <div key={boon.index} style={{ margin: "15px 15px" }}>
                {doesHaveImage(boon.image) ? (
                  <SwiperSlide key={boon.index}>
                    <ContainerCurrentCard style={{ width: "240px" }}>
                      <div style={{ position: "relative" }}>
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
                              top: "80px",
                              marginLeft: "14px",
                              marginRight: "5px",
                              borderRadius: "20px",
                            }}
                          >{`EXTRA INFO: ${boon.extraInfo}`}</Paragraph>
                        )}
                        <BorBCard
                          alt=""
                          src={`images/bb/${boon.image}.jpg`}
                        ></BorBCard>
                      </div>
                    </ContainerCurrentCard>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={boon.index}>
                    <ContainerCurrentCard style={{ width: "230px" }}>
                      <Paragraph>
                        {boon.name}
                        <CancelBtn onClick={() => cancelBoon(boon)}>
                          <CancelImage
                            alt=""
                            src="images/cancel-1.png"
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
                      <BorBCard alt="" src={`../images/nonffg.jpg`}></BorBCard>
                    </ContainerCurrentCard>
                  </SwiperSlide>
                )}
              </div>
            ))}
          </ContainerFlexColumn>
        </ContainerFlex>
      </Swiper>
    </ContainerFlex>
  );
}

export default BoonsDisplay;
