
// Class and Object




// this is car class
// inside the "Class" we can have only 1 constructor, no second "constructor"
// In JS "Class" we can't have more than one "constructor()"

class Car {


    // this is constructor, classs name & constructor name doesn't have to match in JS
    constructor(name,model,year,price){

        // initializing in the constructor function
        this.name = name;
        this.model = model;
        this.year = year;
        this.price = price;

    }

    // we also added seperate function in the class
    refuel(){

        console.log(this.name + "car was pumping the gas")

    }

    fixCar(){

        console.log(this.name +" " + this.model +" " + "model can be fix here")
    }

}

// creating "Car{}" obj here using "new" keyword also "Car" class & "constructor()"
c1 = new Car("Bmw", "X5", 2025, "$60,000")

// this line will print the object
console.log(c1); 


console.log(c1.name);      
console.log(c1.model);      
console.log(c1.year);      
console.log(c1.price);    

// this line will call the "refule()" from the "Car" class
c1.refuel();


console.log("\n")



// creating second "Car{}" obj here using "Car" class & "constructor()"
c2 = new Car("Audi", "Q7", 2024, "$65,000");

// this line will print the second "Car" obj
console.log(c2)


console.log(c2.name);
console.log(c2.model)
console.log(c2.year)
console.log(c2.price);

// this line will call the "refule()" from the "Car" class
c2.refuel();
c2.fixCar();




console.log("###############################\n\n")



// class   by Dave Gray


class Pizza {

    constructor(){

        this.size = "medium";
        this.crust = "original";
        this.toppings = [];       // empty array initialize

    }


    bake(){

        console.log(`this ${this.size} size is ${this.crust} crust pizza`)
    }


    getToppings(){

        return this.toppings

    }


    // we are using "push()" to push toppings inside the array
    setToppings(toppings){

        this.toppings.push(toppings);

    }



}


let myPizza = new Pizza();

myPizza.bake();


// setToppings() 

myPizza.setToppings("Sausage");
myPizza.setToppings("Olives")
console.log(myPizza.getToppings())





/////////////////////////////////////////////////
///////////////////////////////////////////////////



// this is our parent "Class"
class Pizza2 {

    constructor(pizzaSize){

        this.size = pizzaSize
        this.crust = "original";
        

    }


    //
    getCrust(){

        return this.crust

    }


    // 
    setCrust(pizzaCrust){

        this.crust = pizzaCrust

    }



}



// "Child"/"super" class. this is a "super" class of parent "Pizza2" class

// we are "inheritting" parent class "Pizza2"
class SpecialityPizza2 extends Pizza2 {

    // calling the constructor of "pizza2" class here

    constructor(pizzaSize){

        super(pizzaSize);
        this.type = "The work"

    }


    slice(){

        console.log(`Our ${this.type} ${this.size} pizza has 12 slice. `)
    }

}

let mySpecility = new SpecialityPizza2("large");

mySpecility.slice();



///////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Factory function
// if we want to create an obj that property should be private we can use Factory function


function pizzaFactory(pizzaSize){

    // defining variables , this variable will not be accessible outside
    // this is why we have return method at the bottom
    const crust = "Origial";
    const size = pizzaSize;

    // returning a method
    return {

        bake2 : () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };

}

const myNewPizza = pizzaFactory("small & large");

myNewPizza.bake2();







//////////////////////////////////////////////
//////////////////////////////////////////////


// Here "public" and "#private" field are not used in everywhere,
// it's not supported that much

class Pizza3 {

    // public field/variable, public has to declare outside the constructor
    crust = "original";

    // private field, it will not be accessible outside the "Pizza3" class
    #sauce = "traditional";
    #size;


    constructor(pizzaSize){

        this.#size = pizzaSize   

    }

    //
    getCrust(){

        return this.crust

    }

    // 
    setCrust(pizzaCrust){

        this.crust = pizzaCrust

    }

    readyPizza(){

        console.log(`Here's ur ${this.crust} ${this.#sauce} sauce 
            ${this.#size} pizza.`)
    }


}

let completePizza = new Pizza3("large");

completePizza.readyPizza()

console.log(completePizza.crust);
//console.log(completePizza.#sauce);































