import { ButtonShadow } from "./atoms/Button";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { styled } from "styled-components";
import { LotrContext } from "../context";
import React, { useState } from "react";
import { boons } from "../utils";

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

  function handleChange2(e: React.ChangeEvent<HTMLInputElement>) {
    setBBNameObject({ ...bBNameObject, burdenName: e.target.value });
  }

  function handleChangeBoon(e: React.ChangeEvent<HTMLInputElement>) {
    setBBNameObject({ ...bBNameObject, boonName: e.target.value });
  }

  function handleChangeBoonInfo(e: React.ChangeEvent<HTMLInputElement>) {
    setExtraBoonInfo(e.target.value);
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

  function submitBurdens(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newBurdens = [
      ...campaign.boonsAndBurdens.burdens,
      {
        name: bBNameObject.burdenName,
        index: campaign.boonsAndBurdens.burdens.length + 1,
        image: bBNameObject.burdenName.toLowerCase().replaceAll(" ", "-"),
      },
    ];
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };

    setCampaign((currentState) => {
      let camp = currentState;
      return { ...camp, boonsAndBurdens: newBB };
    });
  }

  return (
    <div>
      <SectionHeader>Add Boons & Burdens</SectionHeader>
      <form onSubmit={submitBoon}>
        <Input
          type="text"
          name="boon"
          value={bBNameObject.boonName}
          onChange={handleChangeBoon}
          list="boons"
          placeholder="Your boons"
        />
        <datalist
          id="boons"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {boons.map((boon, index) => (
            <option
              style={{ backgroundColor: "black", color: "white" }}
              key={boon + index}
              value={boon.slice(0, -4).replaceAll("-", " ")}
            />
          ))}
        </datalist>
        {bBNameObject.boonName !== "" && (
          <div>
            <Input
              value={extraBoonInfo}
              onChange={handleChangeBoonInfo}
              placeholder="extra boon info (optional)"
            />
            <ButtonShadowYellow type="submit">Submit boon</ButtonShadowYellow>
          </div>
        )}
      </form>
      <form onSubmit={submitBurdens}>
        <Input
          type="text"
          value={bBNameObject.burdenName}
          onChange={handleChange2}
          placeholder="your burdens"
        />
        <ButtonShadowBlood value="sumbit burdens" type="submit">
          submit burdens
        </ButtonShadowBlood>
      </form>
    </div>
  );
}

export default BoonsAndBurdens;
