import { ButtonShadow } from "./atoms/Button";
import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { styled } from "styled-components";
import { LotrContext } from "../context";
import React from "react";

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
  const { boon, setBoon } = React.useContext(LotrContext);
  const { burden, setBurden } = React.useContext(LotrContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBoon(e.target.value);
  }

  function handleChange2(e: React.ChangeEvent<HTMLInputElement>) {
    setBurden(e.target.value);
  }

  function submitBoons(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newBoons = [
      ...campaign.boonsAndBurdens.boons,
      { name: boon, index: campaign.boonsAndBurdens.boons.length + 1 },
    ];
    let newBB = { ...campaign.boonsAndBurdens, boons: newBoons };

    setCampaign({ ...campaign, boonsAndBurdens: newBB });
  }

  function submitBurdens(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newBurdens = [
      ...campaign.boonsAndBurdens.burdens,
      { name: burden, index: campaign.boonsAndBurdens.burdens.length + 1 },
    ];
    let newBB = { ...campaign.boonsAndBurdens, burdens: newBurdens };

    setCampaign((currentState) => {
      let camp = currentState;
      return { ...camp, boonsAndBurdens: newBB };
    });
  }

  return (
    <>
      <div>
        <SectionHeader>Add Boons & Burdens</SectionHeader>
        <form onSubmit={submitBoons}>
          <Input
            type="text"
            value={boon}
            onChange={handleChange}
            placeholder="your boons"
          />
          <ButtonShadowYellow value="sumbit boons" type="submit">
            submit boons
          </ButtonShadowYellow>
        </form>
        <form onSubmit={submitBurdens}>
          <Input
            type="text"
            value={burden}
            onChange={handleChange2}
            placeholder="your burdens"
          />
          <ButtonShadowBlood value="sumbit burdens" type="submit">
            submit burdens
          </ButtonShadowBlood>
        </form>
      </div>
    </>
  );
}

export default BoonsAndBurdens;
