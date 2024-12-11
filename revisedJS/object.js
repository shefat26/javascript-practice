
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





















































