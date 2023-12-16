import { ButtonShadow } from "./atoms/Button";
import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { styled } from "styled-components";
import { ContainerWithWhiteText } from "./atoms/Container";

const ButtonShadowYellow = styled(ButtonShadow)`
  &:not([disabled]):active {
    box-shadow: yellow 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function BoonsAndBurdens() {
  const defaultBB = {
    boons: [],
    burdens: [],
  };

  const [boonsAndBurdens, setBoonsAndBurdens] = useState(defaultBB);
  const [boon, setBoon] = useState("");
  const [burden, setBurden] = useState("");

  function handleChange(e) {
    setBoon(e.target.value);
  }

  function handleChange2(e) {
    setBurden(e.target.value);
  }

  function submitBoons(e) {
    e.preventDefault();
    let newBoons = [boon, ...boonsAndBurdens.boons];
    setBoonsAndBurdens({ ...boonsAndBurdens, boons: newBoons });
  }

  function submitBurdens(e) {
    e.preventDefault();
    let newBurdens = [burden, ...boonsAndBurdens.burdens];
    setBoonsAndBurdens({ ...boonsAndBurdens, burdens: newBurdens });
  }

  return (
    <>
      <div>
        <SectionHeader>Add Boons & Burdens</SectionHeader>
        <form>
          <Input
            type="text"
            value={boon}
            onChange={handleChange}
            placeholder="your boons"
          />
          <ButtonShadowYellow value="sumbit boons" onClick={submitBoons}>
            submit boons
          </ButtonShadowYellow>
          <br />
          <Input
            type="text"
            value={burden}
            onChange={handleChange2}
            placeholder="your burdens"
          />
          <ButtonShadow value="sumbit burdens" onClick={submitBurdens}>
            submit burdens
          </ButtonShadow>
        </form>
      </div>
      <div>
        <ContainerWithWhiteText>Boons:</ContainerWithWhiteText>
        {boonsAndBurdens.boons.map((boon) => (
          <ListItemWithWhiteText>{boon}</ListItemWithWhiteText>
        ))}
      </div>
      <ContainerWithWhiteText>
        Burdens:
        {boonsAndBurdens.burdens.map((burden) => (
          <ListItemWithWhiteText>{burden}</ListItemWithWhiteText>
        ))}
      </ContainerWithWhiteText>
    </>
  );
}

export default BoonsAndBurdens;
