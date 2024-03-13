import { ButtonShadow } from "./atoms/ButtonShadow";
import { Input } from "./atoms/Input";
import { BoonDiv } from "./atoms/BoonDiv";
import { styled } from "styled-components";
import { LotrContext } from "../context";
import React, { useState } from "react";
import { boons } from "../data/boons";
import { burdens } from "../data/burdens";
import { ContainerFlex } from "./atoms/Containers";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

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

    const newBoons = [
      ...campaign.boonsAndBurdens.boons,
      {
        name: bBNameObject.boonName,
        id: Date.now().toString(),
        image: bBNameObject.boonName.replaceAll(" ", "-"),
        extraInfo: extraBoonInfo,
      },
    ];
    const newBB = { ...campaign.boonsAndBurdens, boons: newBoons };
    setCampaign({ ...campaign, boonsAndBurdens: newBB });
    setBBNameObject({ ...bBNameObject, boonName: "" });
    setExtraBoonInfo("");
  }

  function submitBurden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newBurdens = [
      ...campaign.boonsAndBurdens.burdens,
      {
        name: bBNameObject.burdenName,
        id: Date.now().toString(),
        image: bBNameObject.burdenName.replaceAll(" ", "-"),
        extraInfo: extraBurdenInfo,
      },
    ];
    const newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };

    setCampaign((currentState) => {
      const camp = currentState;
      return { ...camp, boonsAndBurdens: newBB };
    });
    setBBNameObject({ ...bBNameObject, burdenName: "" });
    setExtraBurdenInfo("");
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
    <ContainerFlex style={{ position: "relative" }}>
      <form name="boon" onSubmit={submitBoon} autoComplete="off">
        <Input
          as={motion.input}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ marginLeft: "15px" }}
          name="boon"
          type="text"
          value={bBNameObject.boonName}
          onChange={handleChangeBoon}
          placeholder="Your boons"
          onFocus={() => setShowDataList(true)}
        />
        {showDataList && (
          <BoonDiv>
            {filteredBoonsFormatted.map((boon) => (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  height: "130px",
                  cursor: "pointer",
                }}
                key={uuidv4()}
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
          <ContainerFlex>
            <Input
              as={motion.input}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              name="boon extra"
              value={extraBoonInfo}
              onChange={handleChangeBoonInfo}
              placeholder="extra boon info (optional)"
            />
            <ButtonShadowYellow
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
            >
              Submit boon
            </ButtonShadowYellow>
          </ContainerFlex>
        )}
      </form>
      <form onSubmit={submitBurden} name="burden" autoComplete="off">
        <Input
          as={motion.input}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ marginLeft: "15px" }}
          type="text"
          value={bBNameObject.burdenName}
          onChange={handleChangeBurden}
          placeholder="Your burdens"
          onFocus={() => setShowDataListBurden(true)}
        />
        {showDataListBurden && (
          <BoonDiv>
            {filteredBurdensFormatted.map((burden) => (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  height: "90px",
                  cursor: "pointer",
                }}
                key={uuidv4()}
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
          <ContainerFlex>
            <Input
              as={motion.input}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              name="burden extra"
              value={extraBurdenInfo}
              onChange={handleChangeBurdenInfo}
              placeholder="extra burden info (optional)"
            />
            <ButtonShadowBlood
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
            >
              Submit burden
            </ButtonShadowBlood>
          </ContainerFlex>
        )}
      </form>
    </ContainerFlex>
  );
}

export default BoonsAndBurdens;
