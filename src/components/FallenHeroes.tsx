import FallenHero from "./FallenHero"
import { allHerosMock, state } from "../context";
import { persistData } from "../context";
import React from 'react'

function FallenHeroes(){
    // the FallenHero component should be rendered in this component in a loop or so
    // to show all the fallen heroes, via forEach() or so
      
    // addFallenHero() - unfinished function for the send to coffin button
    // to get the hero from the input text and if correct, that is
    // matching hero from the set of totalHeroes,
    // and is included in rest of heroes alive, update the state accordingly
    const addFallenHero = function(name:string):void{
        //add hero to the list if it isnt there yet
        if(!state.restOfAliveHeroes.includes(name)){
            throw Error
        } 
        if(allHerosMock.includes(name) && state.restOfAliveHeroes.includes(name)){
            state.fallenHeroes.push(name);
            delete state.restOfAliveHeroes[name]
            persistData();
            console.log(state)
        }
        if(!allHerosMock.includes(name)){
            throw Error
        } 

    }

    return (
        <div>
    <header className="header">
        <input type="text" className="input_fallen" placeholder="Input your fallen heroes..."
        />   
            <button className="btn input_fallen" >Send to the coffin</button>
    </header>
        <header className="header">
            <button className="btn list_fallen">List fallen heroes</button>
                <div className="fallen__heroes__panel">
                    <ul className="fallen_heroes__list">
                    
                    </ul>
                </div>
        </header>
        </div>
    )
}

export default FallenHeroes




