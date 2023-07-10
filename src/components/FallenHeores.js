import FallenHero from "./FallenHero"
import { allHerosMock, state } from "../context";
import { persistData } from "../context";

function FallenHeroes(){
    // the FallenHero component should be rendered in this component in a loop or so
    // to show all the fallen heroes, via forEach() or so
      
    // addFallenHero() - unfinished function for the send to coffin button
    // to get the hero from the input text and if correct, that is
    // matching hero from the set of totalHeroes,
    // and is included in rest of heroes alive, update the state accordingly
    const addFallenHero = function(e){
        var value = e.target.value
        console.log(value)
        const fname = value;
        console.log(fname)
        //add hero to the list if it isnt there yet
        if(!state.restOfAliveHeroes.includes(fname)){
            throw Error
        } 
        if(allHerosMock.includes(fname) && state.restOfAliveHeroes.includes(fname)){
            state.fallenHeroes.push(fname);
            delete state.restOfAliveHeroes[fname]
            persistData();
            console.log(state)
        }
        if(!allHerosMock.includes(fname)){
            throw Error
        } 

    }

    return (
        <div>
    <header class="header">
        <input type="text" className="input_fallen" placeholder="Input your fallen heroes..."
        />   
            <button class="btn input_fallen" onClick={addFallenHero}>Send to the coffin</button>
    </header>
        <header class="header">
            <button class="btn list_fallen">List fallen heroes</button>
                <div class="fallen__heroes__panel">
                    <ul class="fallen_heroes__list">
                    <FallenHero/>
                    </ul>
                </div>
        </header>
        </div>
    )
}

export default FallenHeroes




