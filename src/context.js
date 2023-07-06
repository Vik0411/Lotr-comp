
export const allHerosMock = ['Aragorn', 'Eowyn', 'Beravor']
export const state = {
    fallenHeroes: ['Aragorn'],
    restOfAliveHeroes: ['Eowyn', 'Beravor'],
    allHeros: allHerosMock
}
export const persistData = function () {
    localStorage.setItem('fallenHeroes', JSON.stringify(state.fallenHeroes))
}


export const addFallenHero = function(hero){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        delete state.restOfAliveHeroes[hero]
        persistData();
    }   
}

export const addFallenHeroCount = function(hero){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}
export const resetRestOfHeroes = function(hero){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}

const fallenHeroes = "y";

const init = function(){
    const storage = localStorage.getItem('fallenHeroes')
    if (storage) state.fallenHeroes= JSON.parse(storage)
}
init()
console.log(state.fallenHeroes, state.restOfAliveHeroes)