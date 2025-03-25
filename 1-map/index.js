let array = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'}
]

let setObjects = new Set(
    array.map(el => array.find(obj => obj.id === el.id)));
    
console.log(setObjects)