import FallenHero from "./FallenHero"
import { allHerosMock, state } from "../context";
import { persistData } from "../context";

function FallenHeroes(){

    const addFallenHero = function(hero){
        //add hero to the list if it isnt there yet
        if(!state.restOfAliveHeroes.includes(hero)){
            throw Error
        } 
        if(!allHerosMock.includes(hero) && state.restOfAliveHeroes.includes(hero)){
            state.fallenHeroes.push(hero);
            delete state.restOfAliveHeroes[hero]
            persistData();
            console.log(state)
        }
        if(!allHerosMock.includes(hero)){
            throw Error
        } 

    }

    return (
        <div>
    <header class="header">
        <input type="text" class="input_fallen" placeholder="Input your fallen heroes..." onSubmit={addFallenHero}

        />   
            <button class="btn input_fallen" >Send to the coffin</button>
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