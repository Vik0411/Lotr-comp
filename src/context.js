// Here the first working version with local browser storage was only in javascript
// and will have to be adjusted to react and useState() hooks probably
// This page should work as mainly as the data handling place

export const allHerosMock = ['Aragorn', 'Eowyn', 'Beravor']
export const state = {
    fallenHeroes: ['Aragorn'],
    restOfAliveHeroes: ['Eowyn', 'Beravor'],
    allHeros: allHerosMock
}

export const persistData = function () {
    // I believe we could simply use this browser local storage for our purposes
    localStorage.setItem('fallenHeroes', JSON.stringify(state.fallenHeroes))
}

// unfinished function for potentianlly new feature of also keeping count
// of individual deaths for the heroes
export const addFallenHeroCount = function(hero){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}

// function preparation for reseting those heroes remaining alive
export const resetRestOfHeroes = function(hero){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}


const init = function(){
    const storage = localStorage.getItem('fallenHeroes')
    if (storage) state.fallenHeroes= JSON.parse(storage)
}
init()
console.log(state.fallenHeroes, state.restOfAliveHeroes)