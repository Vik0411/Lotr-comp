import FallenHero from "./FallenHero"
import React, { useState } from 'react'

function FallenHeroes(){
    // the FallenHero component should be rendered in this component in a loop or so
    // to show all the fallen heroes, via forEach() or so
      
    // addFallenHero() - unfinished function for the send to coffin button
    // to get the hero from the input text and if correct, that is
    // matching hero from the set of totalHeroes,
    // and is included in rest of heroes alive, update the state accordingly

     const [campaign, setCampaign] = useState({
        fallenName:'',
        fallenHeroes: ['Aragorn'],
        restOfAliveHeroes: ['Eowyn', 'Beravor'],
        allHeros: ['Aragorn', 'Eowyn', 'Beravor']
    });
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => 
         setCampaign({...campaign, fallenName: e.target.value});
       

    const addFallenHero: React.FormEventHandler = (e) => {
        console.log(campaign.fallenName)
        //add hero to the list if it isnt there yet
        /*
        if(!campaign.restOfAliveHeroes.includes(campaign.fallenName)){
            throw Error
        } 
        */
        if(campaign.allHeros.includes(campaign.fallenName) && campaign.restOfAliveHeroes.includes(campaign.fallenName)){
            const updated = [...campaign.fallenHeroes, campaign.fallenName]
            setCampaign({...campaign, fallenHeroes: updated})
           // delete campaign.restOfAliveHeroes[campaign.fallenName]
        
        }
        /*
        if(!campaign.allHeros.includes(campaign.fallenName)){
            throw Error
        } 

        */

    }

    console.log(campaign)
    return (
        <div>
        <input type="text" className="input_fallen" value={campaign.fallenName} placeholder="Input your fallen heroes..."
       onChange={handleChange} />   
            <button className="btn input_fallen" onClick={addFallenHero}>Send to the coffin</button>
        <header className="header">
            <button className="btn list_fallen">List fallen heroes</button>
                <div className="fallen__heroes__panel">
                    <ul className="fallen_heroes__list">
                        {campaign.fallenHeroes}
                    </ul>
                </div>
        </header>
        </div>
    )
}

export default FallenHeroes




