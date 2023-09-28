import { LotrContext } from "../context";
import React, { useState } from "react";
import { FallenHero } from "./FallenHero";
import styled from "styled-components";

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
    <Wrapper className="section">
      <div>
        <form onSubmit={addFallenHero}>
          <input
            type="text"
            className="input_fallen"
            value={fallenHero}
            placeholder="Input your fallen hero..."
            onChange={handleChange}
          />
          <button type="submit" className="btn input_fallen">
            Send to the coffin
          </button>
          <h3>The Fallen:</h3>
          <ul className="fallen_heroes__list">
            {campaign.fallenHeroes.map(
              (fallenHero): JSX.Element => (
                <FallenHero fallenHero={fallenHero} key={fallenHero} />
              )
            )}
          </ul>
        </form>
      </div>
    </Wrapper>
  );
}

export default FallenHeroes;

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  header {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;
