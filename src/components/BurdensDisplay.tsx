import { Paragraph } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { CancelImage } from "./atoms/CancelImage";
import { doesBurdenHaveImage } from "../utils";
import { BorBCard } from "./atoms/BorBCard";
import {
  ContainerCurrentCard,
  ContainerFlex,
  ContainerFlexColumn,
} from "./atoms/Containers";
import { CancelBtn } from "./atoms/CancelBtn";
import { Burden } from "../types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
// import required modules
import { EffectCards } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";
import AninamtedPage from "./AnimatedPage";

function BurdensDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function cancelBurden(burden: Burden) {
    const newBurdens = campaign.boonsAndBurdens.burdens.filter(
      (br) => br.index !== burden.index
    );
    const newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };
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
        <ContainerFlex style={{ marginLeft: "20px" }}>
          <ContainerFlexColumn>
            {campaign.boonsAndBurdens.burdens.map((burden) => (
              <div key={burden.index} style={{ margin: "15px 15px" }}>
                {doesBurdenHaveImage(burden.image + ".jpg") ? (
                  <SwiperSlide key={burden.index}>
                    <AninamtedPage>
                      <ContainerCurrentCard style={{ width: "230px" }}>
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
                    </AninamtedPage>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={burden.index}>
                    <AninamtedPage>
                      <ContainerCurrentCard style={{ width: "230px" }}>
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
                    </AninamtedPage>
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

export default BurdensDisplay;
