import FallenHero from "./FallenHero"
import { allHerosMock, state } from "../context";
import { persistData } from "../context";

function FallenHeroes(){
       
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




