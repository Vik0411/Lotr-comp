import { Paragraph } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesBoonHaveImage } from "../utils";
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
import "../index.css";
// import required modules
import { EffectCards } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";
import AninamtedPage from "./AnimatedPage";

function BoonsDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function cancelBoon(boon: Boon) {
    const newBoons = campaign.boonsAndBurdens.boons.filter(
      (bn) => bn.id !== boon.id
    );
    const newBB = { ...campaign.boonsAndBurdens, boons: newBoons };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  return (
    <ContainerFlex>
      <Swiper
        style={{ margin: "0px 40px" }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <ContainerFlex style={{ margin: "0px 20px" }}>
          <ContainerFlexColumn>
            {campaign.boonsAndBurdens.boons.map((boon) => (
              <div key={boon.id} style={{ margin: "15px 15px" }}>
                <SwiperSlide key={boon.id}>
                  <AninamtedPage>
                    <ContainerCurrentCard>
                      <Paragraph style={{ marginLeft: "25px" }}>
                        {boon.name}
                        <CancelBtn onClick={() => cancelBoon(boon)}>
                          <CancelImage
                            // possibly still tune this margin
                            style={{ marginRight: "-15px" }}
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
                            marginLeft: "39px",
                            marginRight: "5px",
                            backgroundColor: "rgba(1, 1, 1, 0.3)",
                            borderRadius: "20px",
                          }}
                        >{`EXTRA INFO: ${boon.extraInfo}`}</Paragraph>
                      )}
                      {doesBoonHaveImage(boon.image + ".jpg") ? (
                        <BorBCard
                          style={{ marginLeft: "35px" }}
                          alt=""
                          src={`images/bb/${boon.image}.jpg`}
                        ></BorBCard>
                      ) : (
                        <BorBCard
                          style={{ marginLeft: "35px" }}
                          alt=""
                          src="images/burden.jpg"
                        ></BorBCard>
                      )}
                    </ContainerCurrentCard>
                  </AninamtedPage>
                </SwiperSlide>
              </div>
            ))}
          </ContainerFlexColumn>
        </ContainerFlex>
      </Swiper>
    </ContainerFlex>
  );
}

export default BoonsDisplay;
