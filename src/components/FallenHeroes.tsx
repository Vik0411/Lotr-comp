import { LOTRContext } from "../context";
import React from "react";

function FallenHeroes() {
  // the FallenHero component should be rendered in this component in a loop or so
  // to show all the fallen heroes, via forEach() or so

  // addFallenHero() - unfinished function for the send to coffin button
  // to get the hero from the input text and if correct, that is
  // matching hero from the set of totalHeroes,
  // and is included in rest of heroes alive, update the state accordingly

  const { campaign, setCampaign } = React.useContext(LOTRContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCampaign({ ...campaign, fallenName: e.target.value });

  function addFallenHero() {
    //add hero to the list if it isnt there yet
    if (!campaign.restOfAliveHeroes.includes(campaign.fallenName)) {
      throw Error;
    }
    if (
      campaign.allHeros.includes(campaign.fallenName) &&
      campaign.restOfAliveHeroes.includes(campaign.fallenName)
    ) {
      const updatedFallen = [...campaign.fallenHeroes, campaign.fallenName];
      const updatedRestOfAlive = campaign.restOfAliveHeroes.filter(
        (e) => e !== campaign.fallenName
      );
      setCampaign({
        ...campaign,
        fallenHeroes: updatedFallen,
        restOfAliveHeroes: updatedRestOfAlive,
      });
    }
    if (!campaign.allHeros.includes(campaign.fallenName)) {
      throw Error;
    }
  }

  console.log(campaign);
  return (
    <div>
      <input
        type="text"
        className="input_fallen"
        value={campaign.fallenName}
        placeholder="Input your fallen heroes..."
        onChange={handleChange}
      />
      <button className="btn input_fallen" onClick={addFallenHero}>
        Send to the coffin
      </button>
      <header className="header">
        <button className="btn list_fallen">List fallen heroes</button>
        <div className="fallen__heroes__panel">
          <ul className="fallen_heroes__list">{campaign.fallenHeroes}</ul>
        </div>
      </header>
    </div>
  );
}

export default FallenHeroes;
