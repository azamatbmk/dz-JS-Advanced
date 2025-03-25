class Caracter {
    name;
    race;
    language;
    constructor(name, race, language) {
        this.name = name;
        this.race = race;
        this.language = language;
    }

    talk() {
        console.log(`Меня зовут ${this.name}, я ${this.race} и говорю на ${this.language} языке`)
    }
};

const hero = new Caracter('Арагорн', 'человек', 'Англиский');
console.log(hero.talk())

class Orc extends Caracter {
    weapon;
    constructor(name, race, language, weapon) {
        super(name, race, language)
        this.name = name;
        this.race = race;
        this.language = language;
        this.weapon = weapon;
    }

    talk() {
        console.log(`Меня зовут ${this.name}, я ${this.race} и говорю на ${this.language} языке. Мое оружие ${this.weapon}`)
    }

    strike() {
        console.log('Орк нанес удар')
    }
};

const orc = new Orc('Гулдан', 'орк', 'оркский', 'дубина');
console.log(orc.talk())
console.log(orc.strike())

class Elf extends Caracter {
    magic;
    constructor(name, race, language, magic) {
        super(name, race, language)
        this.name = name;
        this.race = race;
        this.language = language;
        this.magic = magic;
    }

    talk() {
        console.log(`Меня зовут ${this.name}, я ${this.race} и говорю на ${this.language} языке. Мое оружие ${this.magic}`)
    }

    createMagic() {
       return console.log('Эльф произнес заклинание')
    }
};

const elf = new Elf('Гендальф', 'эльф', 'эльфийский', 'магия');
console.log(elf.talk())
console.log(elf.createMagic())