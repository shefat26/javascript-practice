
// Inheritance 



// parent class
/*
 inheritance.
 -> in inheritance we can share only parents class property, 
    not child class property from different child class
 -> in " JS " we can't have multiple "parent" class, means "child"
     class can't have two or more parent class. Only 1 parent class
     allowed .

  -> We can have multi level inheritance, means "parent" class can have
     "grandParent" class and we can inherite "grandParent" class
      property from "parent" class using "extends" keyWord.

  -> A "child" class can access "grandParent" class propery/method
*/


// Grand Parent class
class Automobile{


    constructor(vin){

        this.vin = vin ;

    }

    useAeroDynamic(){

        console.log("Automobile --- aerodynamic " + this.vin);

    }
}


//Parent class
class Vehicle extends Automobile{

    constructor(make,model,year){

        // passing "grandParent" class vin using super() class constructor
        super("V1200678")

        this.make = make;
        this.model = model;
        this.year = year;

    }


    getInfo(){

        return ` ${this.make}, ${this.model}, ${this.year}`;

    }

    startEngine(){

        console.log('Start engine ....' + this.make + " "+ this.model);

    }

    stopEngine(){

        console.log("Stopping Engine ....");

    }

}




// child-1 (sub class)
class Car extends Vehicle {

    // called parent constructor param also added new param
    constructor(make, model, year, fuelType){

        // calling the parent class here
        super(make, model, year);

        //initializing fuelType
        this.fuelType = fuelType;

    }


    driveCar(){

        console.log(" driving the car " + this.model );
    }

}




// child-2 (sub class)
class Truck extends Vehicle{

    constructor(make, model, year, loadingCapacity ){

        super(make, model,year);
        this.loadingCapacity = loadingCapacity;

    }


    driveTruck(){

        console.log("driving the Truck " + this.model + " capacity " + this.loadingCapacity);

    }


}



// Creating Object (instance): new keyword

let car1 = new Car("Honda","civic", 2024, "Gas")
let truck1 = new Truck("Ford","150 Raptor", 2023, "1 ton");

//car
car1.startEngine();
console.log(car1.getInfo());
car1.driveCar();
car1.useAeroDynamic()
console.log(car1.vin)


//truck
truck1.startEngine();
console.log(truck1.getInfo())










































