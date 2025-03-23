const Caracter = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Caracter.prototype.talk = function() {
    console.log(`Меня зовут ${this.name} и я говорю на ${this.language} языке. `)
    return
}

const hero = new Caracter('человек', 'Арагорн', 'Английский');

console.log(hero.talk())

const Ork = function(race, name, language, weapon ) {
    Caracter.call(this, race, name, language);
    this.weapon = weapon;
}

Ork.prototype = Object.create(Caracter.prototype);

Ork.prototype.strike = function() {
    console.log(`Орк наносит удар`)
};

Ork.prototype.magic = function() {
    console.log(`Орк применил заклинание`)
};

Ork.prototype.createMagic = function() {
    console.log(`Орк создал заклинание`)
};


const ork = new Ork('Ork', 'Gul Dan', 'orks', 'Меч')

console.log(ork.talk())