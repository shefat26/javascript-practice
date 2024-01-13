function myFunction(a, b) {
  return a * b;
}

let x = myFunction(3, 6);
console.log(x);


// Function
function toCelcious(fahrenheight) {
   return (5 / 9) * (fahrenheight - 32);
 }
 
 console.log(toCelcious(77));
 
 //
 
 function myCar() {
   let carName = "Volvo";
 
   console.log(carName);
 }
 
 myCar();
 
 ///
 
 let carName = "BMW";
 
 console.log(carName);
 
 carName = "Toyata";
 console.log(carName);
 
 //
 
 function logger(param, param2) {
   console.log(param, param2);
 }
 
 let a = ["car", "Bus"];
 let b = 10;
 
 logger(a, b);
 logger(33, 45);
 logger({ key: "lock" }, "object");
 
 let person = {
   job: "IT",
   age: 27,
   name: "John",
   cars: a,
 };
 
 const {job, age, name,cars}= person;
 console.log(job);




// Replite code practice


function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));

function isGreater(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}
console.log(isGreater(2, 7));
console.log(isGreater(9, 6));
console.log(isGreater(5, 5));







//Ternary Operator

let w = 15;
let y = 10;

let z = w > y ? "W is Greater" : "Y is Greater";
console.log(z);







//Destructuring Object
let v = ["BMW", "ToyoTa", "KIA"];

let person1 = {
  job1: "IT",
  age1: 27,
  names: "John",
  car: v,
  business: "Clothing line",
  house: "Private house",
};

// renaming destructure variable, business to commars
//let { business : comars } = person;
//console.log(comars);

let { house } = person1;
console.log(house);

let { age1, job1, names } = person1;
console.log(age);
console.log(names);
console.log(job);













