'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(({ abilities }) => {
        // console.log(abilities);
        return fetch(abilities[0].ability.url)
    })
    .then(response => response.json())
    .then(({ effect_entries }) => {
        effect_entries.filter(el => {
            if(el.language.name == 'en') {
                console.log(el.effect)
            }
        })
    })