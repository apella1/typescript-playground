class Furniture {
    //  * class members
    name: string
    model: string
    price: number
    origin: string

    constructor(name: string, model: string, price: number, origin: string) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.origin = origin;
    }
}

// * using visibility modifiers to avoid the redundancy
/* 
    * public
    * private
    * readonly
    * protected
 */

class Musician {
    secondLang!: string // using assertion

    constructor(public readonly name: string, private age: number, public songs: string[], protected lang: string) {
        this.name = name
        this.age = age
        this.songs = songs
    }
}

const Hov = new Musician('Carter', 52, ['Encore', 'Excuse Me Miss', 'Forever Young'], 'English')
console.log(Hov);

class Language {
    constructor(public name: string, private type: string) {
    }
    
    public getName() {
        return `${this.name} is a ${this.type.toLowerCase()} language`
    }
}

const Java = new Language("Java", "Programming")
console.log(Java.getName());

// console.log(Java.type); - we can't access private members outside of a class

class Shelf extends Furniture {
    constructor(name: string, model: string, price: number, origin: string, public use: string) {
        super(name, model, price, origin)
        this.use = use
    }
}

const BookShelf = new Shelf('Book Shelf', 'm20', 454, 'Kenya', 'storing books')
console.log(BookShelf);


// Interfaces 

interface Book {
    bookName: string,
    price: number, 
    use: string
}

class Novel implements Book {
    constructor(public bookName: string, public price: number, public use: string) {
    }
}

const Davinci = new Novel("Davinci Code", 34, "Entertainment")
console.log(Davinci);