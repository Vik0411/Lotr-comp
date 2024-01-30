import { ButtonShadow } from "./atoms/ButtonShadow";
import { Input } from "./atoms/Input";
import { BoonDiv } from "./atoms/BoonDiv";
import { SectionHeader } from "./atoms/typography";
import { styled } from "styled-components";
import { LotrContext } from "../context";
import React, { useState } from "react";
import { boons } from "../data/boons";
import { burdens } from "../data/burdens";

export const ButtonShadowYellow = styled(ButtonShadow)`
  opacity: 1;
  &:not([disabled]):active {
    box-shadow: yellow 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

export const ButtonShadowBlood = styled(ButtonShadow)`
  opacity: 1;
  &:not([disabled]):active {
    box-shadow: red 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function BoonsAndBurdens() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  const [bBNameObject, setBBNameObject] = useState({
    boonName: "",
    burdenName: "",
  });

  const [extraBoonInfo, setExtraBoonInfo] = useState("");
  const [extraBurdenInfo, setExtraBurdenInfo] = useState("");

  const [showDataList, setShowDataList] = useState(false);
  const [showDataListBurden, setShowDataListBurden] = useState(false);

  function handleChangeBoon(e: React.ChangeEvent<HTMLInputElement>) {
    setBBNameObject({ ...bBNameObject, boonName: e.target.value });
  }

  function handleChangeBurden(e: React.ChangeEvent<HTMLInputElement>) {
    setBBNameObject({ ...bBNameObject, burdenName: e.target.value });
  }
  function handleChangeBoonInfo(e: React.ChangeEvent<HTMLInputElement>) {
    setExtraBoonInfo(e.target.value);
  }

  function handleChangeBurdenInfo(e: React.ChangeEvent<HTMLInputElement>) {
    setExtraBurdenInfo(e.target.value);
  }

  function submitBoon(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newBoons = [
      ...campaign.boonsAndBurdens.boons,
      {
        name: bBNameObject.boonName,
        index: campaign.boonsAndBurdens.boons.length + 1,
        image: bBNameObject.boonName.replaceAll(" ", "-"),
        extraInfo: extraBoonInfo,
      },
    ];
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };

    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  function submitBurden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newBurdens = [
      ...campaign.boonsAndBurdens.burdens,
      {
        name: bBNameObject.burdenName,
        index: campaign.boonsAndBurdens.burdens.length + 1,
        image: bBNameObject.burdenName.replaceAll(" ", "-"),
        extraInfo: extraBurdenInfo,
      },
    ];
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };

    setCampaign((currentState) => {
      let camp = currentState;
      return { ...camp, boonsAndBurdens: newBB };
    });
  }

  const filteredBoons = boons.filter((boon) =>
    boon.toLowerCase().includes(bBNameObject.boonName.toLowerCase())
  );

  const filteredBoonsFormatted = filteredBoons.map((boon) =>
    Array.from(boon).slice(0, -4).join("").replaceAll("-", " ")
  );

  const filteredBurdens = burdens.filter((burden) =>
    burden.toLowerCase().includes(bBNameObject.burdenName.toLowerCase())
  );

  const filteredBurdensFormatted = filteredBurdens.map((burden) =>
    Array.from(burden).slice(0, -4).join("").replaceAll("-", " ")
  );

  return (
    <div style={{ position: "relative" }}>
      <SectionHeader>Add Boons & Burdens</SectionHeader>
      <form onSubmit={submitBoon}>
        <Input
          name="boon"
          type="text"
          value={bBNameObject.boonName}
          onChange={handleChangeBoon}
          placeholder="Your boons"
          onFocus={() => setShowDataList(true)}
        />
        {showDataList && (
          <BoonDiv>
            {filteredBoonsFormatted.map((boon, index) => (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  height: "90px",
                }}
                key={index}
                onClick={() => {
                  setBBNameObject({ ...bBNameObject, boonName: boon });
                  setShowDataList(false);
                }}
              >
                <div
                  style={{
                    height: "15px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderRadius: "5px",
                  }}
                ></div>
                <img
                  alt={boon}
                  src={"images/bb/" + boon.replaceAll(" ", "-") + ".jpg"}
                  style={{ height: "220px" }}
                />
              </button>
            ))}
          </BoonDiv>
        )}
        {bBNameObject.boonName !== "" && (
          <div>
            <Input
              name="boon extra"
              value={extraBoonInfo}
              onChange={handleChangeBoonInfo}
              placeholder="extra boon info (optional)"
            />
            <ButtonShadowYellow type="submit">Submit boon</ButtonShadowYellow>
          </div>
        )}
      </form>
      <form onSubmit={submitBurden} name="burden">
        <Input
          type="text"
          value={bBNameObject.burdenName}
          onChange={handleChangeBurden}
          placeholder="Your burdens"
          onFocus={() => setShowDataListBurden(true)}
        />
        {showDataListBurden && (
          <BoonDiv>
            {filteredBurdensFormatted.map((burden, index) => (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  height: "90px",
                }}
                key={index}
                onClick={() => {
                  setBBNameObject({ ...bBNameObject, burdenName: burden });
                  setShowDataListBurden(false);
                }}
              >
                <div
                  style={{
                    height: "15px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderRadius: "5px",
                  }}
                ></div>
                <img
                  alt={burden}
                  src={
                    "images/bb/burdens/" + burden.replaceAll(" ", "-") + ".jpg"
                  }
                  style={{ height: "220px" }}
                />
              </button>
            ))}
          </BoonDiv>
        )}
        {bBNameObject.burdenName !== "" && (
          <div>
            <Input
              name="burden extra"
              value={extraBurdenInfo}
              onChange={handleChangeBurdenInfo}
              placeholder="extra burden info (optional)"
            />
            <ButtonShadowBlood type="submit">Submit burden</ButtonShadowBlood>
          </div>
        )}
      </form>
    </div>
  );
}

export default BoonsAndBurdens;
