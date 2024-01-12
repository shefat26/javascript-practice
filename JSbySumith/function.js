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