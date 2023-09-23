import { LotrContext } from "../context";
import React, { useState } from "react";
import { FallenHero } from "./FallenHero";
import { Button } from "./styles/Button.styled";
import { StyledInput } from "./styles/Header.styled";

function FallenHeroes() {
  // the FallenHero component should be rendered in this component in a loop or so
  // to show all the fallen heroes, via forEach() or so

  // addFallenHero() - unfinished function for the send to coffin button
  // to get the hero from the input text and if correct, that is
  // matching hero from the set of totalHeroes,
  // and is included in rest of heroes alive, update the state accordingly
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [fallenHero, setFallenHero] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFallenHero(e.target.value);
  }

  function addFallenHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //add hero to the list if it isnt there yet
    if (!campaign.restOfAliveHeroes.includes(fallenHero)) {
      throw Error("Sorry, your hero is not among the living!");
    }
    if (campaign.restOfAliveHeroes.includes(fallenHero)) {
      const updatedFallen = [...campaign.fallenHeroes, fallenHero];
      const updatedRestOfAlive = campaign.restOfAliveHeroes.filter(
        (hero) => hero !== fallenHero
      );
      setCampaign({
        ...campaign,
        fallenHeroes: updatedFallen,
        restOfAliveHeroes: updatedRestOfAlive,
      });
    }
  }

  console.log(campaign);
  return (
    <div>
      <form onSubmit={addFallenHero}>
        <StyledInput
          type="text"
          value={fallenHero}
          placeholder="Input your fallen hero..."
          onChange={handleChange}
        />
        <br></br>
        <Button type="submit">Send to the coffin</Button>
        <h3>The Fallen:</h3>
        <ul>
          {campaign.fallenHeroes.map(
            (fallenHero): JSX.Element => (
              <FallenHero fallenHero={fallenHero} key={fallenHero} />
            )
          )}
        </ul>
      </form>
    </div>
  );
}

export default FallenHeroes;
