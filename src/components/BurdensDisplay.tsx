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
      (br) => br.id !== burden.id
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
        <ContainerFlex style={{ margin: "0px 20px" }}>
          <ContainerFlexColumn>
            {campaign.boonsAndBurdens.burdens.map((burden) => (
              <div key={burden.id} style={{ margin: "15px 15px" }}>
                <SwiperSlide key={burden.id}>
                  <AninamtedPage>
                    <ContainerCurrentCard style={{ width: "230px" }}>
                      <Paragraph style={{ marginLeft: "25px" }}>
                        {burden.name}
                        <CancelBtn onClick={() => cancelBurden(burden)}>
                          <CancelImage
                            style={{ marginRight: "-25px" }}
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
                            top: "80px",
                            marginLeft: "39px",
                            marginRight: "5px",
                            backgroundColor: "rgba(1, 1, 1, 0.3)",
                            borderRadius: "20px",
                          }}
                        >{`extra info: ${burden.extraInfo}`}</Paragraph>
                      )}
                      {doesBurdenHaveImage(burden.image + ".jpg") ? (
                        <BorBCard
                          style={{ marginLeft: "35px" }}
                          alt=""
                          src={`images/bb/burdens/${burden.image}.jpg`}
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

export default BurdensDisplay;
