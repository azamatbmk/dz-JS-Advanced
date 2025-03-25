class Car {
    #name;
    #model;
    #mileage;

    constructor(name, model, mileage) {
        this.#name = name;
        this.#model = model;
        this.#mileage = mileage;
    }

    set changeMileage(newMileage) {
        this.#mileage = newMileage;
    }

    get getMileage() {
        return this.#mileage;
    }

    info() {
        return console.log(`Эта машина марки ${this.#name} модель ${this.#model} с пробегом ${this.#mileage}км`)
    }
};

const toyota = new Car('Toyota', 'Hilux', 3000);

toyota.changeMileage = 5000;

console.log(toyota.getMileage);
console.log(toyota.info());