class Bag {
    #Person
    constructor(weight, id, Person){
        this.weight = weight;
        this.id = id;
        this.#Person = Person;
    }
    getOwner(){
        return this.#Person
    }
    assignOwner(Person){
        this.#Person = Person
    }
}


module.exports = Bag;