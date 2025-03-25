class Billing {
    
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
};

class FixedBilling extends Billing {
    
    constructor(amount) {
        super(amount);
    }
};

class HourBilling extends Billing {

    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
};

class ItemBilling extends Billing {

    constructor(amount, item) {
        super(amount);
        this.item = item;
    }

    calculateTotal() {
      return this.amount * this.item;
    }
};

const fixedBill = new FixedBilling(100);
console.log('Fixed billing total:', fixedBill.calculateTotal());

const hourBill = new HourBilling(10, 40);
console.log('Hour billing total:', hourBill.calculateTotal());

const itemBill = new ItemBilling(5, 100);
console.log('Item billing total:', itemBill.calculateTotal());