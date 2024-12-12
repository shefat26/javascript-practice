
// We are wlooking 4 type of object

// 1. Object

// 2. "Constructor" Function to object

// 3. "Class style" to create Object

// 4. "Factory" function to create an Object



// object 


let obj = {

    name : "James",
    country: "USA",
    Occupation: "Engineering"

};

console.log(obj.name, obj.country);



// Construction Function 

function Car(brand, model, price){

    //instance variable 
    // "this" keyword is a instance of a class
    this.brand = brand;
    this.model = model;
    this.price = price;

}

// initializing with the referance variable
let c1 = new Car("BMW", "X5", 2025)

let c2 = new Car("Benz", "c300", 2025)


console.log(c1.brand + " "+c1.model+" "+c1.price);
console.log(c2.brand + " "+c2.model+" "+c2.price);





// Class style 
// we can create "class" withouth creating "objt",with the help of constructor

class Customer{

    // creating a "constructor" inside the class
    //class name and construct name doesn't have to be same
    constructor(name, product){

        //instance variable
        this.name = name;
        this.product = product;

    }

    // creating a method/function inside the class

    addToCart(){

        console.log(`${this.product} added to the cart`);

    }

}

let custom1 = new Customer("James", "MacBook pro");

console.log(custom1.name, custom1.product)
console.log(custom1.product)

// accessing "Customer" class and then accessing "addToCart()"
custom1.addToCart();






// Object.creat()
// we will create a proto type here
/*
 The Object.create() static method creates a new object, using an 
 existing object as the prototype of the newly created object.
*/

let employeeProto = {

    // creating a function for our prototype obj
    printInfo: function(){

        console.log(`hello, employee name is ${this.name}`);

    }

};


/*
 The Object.create() static method creates a new object, using an 
 existing object as the prototype of the newly created object.
*/

// we inserted "employeeProto"  protoType as a param, to create obj
let e1 = Object.create(employeeProto);

// assigning name in the instance variable "this.name"
e1.name = "Tom";
e1.printInfo();





// Using Factory function , it will return Object


function createDeptName(deptName, hod){

    // here we will return an obj

    return {

        deptName: deptName,
        hod: hod,

        getDeptName:function(){

            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);

        }
    }
}

// 
let dept1 = createDeptName("Physics", "James Walker");
let dept2 = createDeptName("Maths", "Raynold");

// Accessing "getDeptName()" function 
dept1.getDeptName();
dept2.getDeptName();





////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////




let myObj = {name: "Dave"};

console.log(myObj.name);
console.log(myObj);


//

let anotherObj ={

    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },

    action: function(){

        return `Time for ${this.beverage.morning}`
    }

};

console.log(anotherObj);
console.log(anotherObj.alive)
console.log(anotherObj.hobbies[1])
console.log(anotherObj.beverage.afternoon)
console.log(anotherObj.action());





//


let vehicle = {

    wheel : 4,
    engine: function(){

        return "Vrrooom";

    }

};


// we created "truck" obj and inheritting "vehicle" obj property
let truck = Object.create(vehicle);

// adding new property for "truck" obj
truck.door = 2;
truck.light = "Led light"

console.log(truck)

//inheritting "vehicle" obj property into "truck" obj
console.log(truck.wheel);
console.log(truck.engine(), "\n");


// creating "car" obj

let car = Object.create(vehicle);

car.door = 2;
car.engine = function(){

    return "Car start sound Whoooosh!";

};

console.log(car.engine());
console.log(car.wheel);
console.log(car.door);


// Creating "tesla" car obj


let tesla = Object.create(vehicle)

tesla.engine = function(){

    return "engine sound:- Shhhhhh...."

}

console.log(tesla.engine())
console.log(tesla.wheel,"\n")




// Object


let band = {

    vocals : "Robert Plant",
    guiter : "Jimmy Page",
    bass : "John Paul Jones",
    drums : "John Bonham"
};



//finding objects "keys"
console.log(Object.keys(band));

//finding objects "key values"
console.log(Object.values(band));


// using "for in loop" to iterate the "band" obj and return


// for(let i=0; i<band.length; i++){

//     return `on ${band.keys()}, it's ${band.values()}`;
// }
// console.log(band);

for( let job in band){

    // here "band[job]" will iterate by index num in the obj
    console.log(`on ${job}, it's ${band[job]}`)
}



// to "delete" something from the obj
delete band.drums;
console.log(band);

// checking obj property "drums" is there or not
console.log(band.hasOwnProperty("drums"));

console.log("\n")



// "destructring" Object 


let brand = {

    shirt : "Ralph Loren",
    shoes : "Aldo",
    pant : "Tommyhilfigure",
    belt : "Lv"
};

// destructring obg "key" name
let {shirt:top, pant: bottom, shoes: snekers } = brand;

console.log(top);
console.log(bottom);
console.log(brand.bottom);


// let {shirt, pant, shoes } = brand;
// console.log(shirt);
// console.log(pant);
// console.log(brand);


// destructring obj 
let {shirt, pant, shoes, belt} = brand;

function outfit({shirt}){

    return `John wear ${shirt} brand for his party`;

}

console.log(brand);
console.log(shoes);
console.log(belt);



//let {shirt:"tshirt", pant:"short", shoes:"flipflop", belt:"TM"} = brand;

























