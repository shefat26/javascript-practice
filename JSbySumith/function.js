





// Arrow function with single or one parameter
// we don't need prenthesis with single parameter arrow function

let squar = num => num*num;
let newSquar = squar(5);
console.log(newSquar);




//we can also have parenthesis with single parameter arrow function
let aSquar = (num) => num*num;
let newAsquar = squar(3);
console.log(newAsquar);






//2. Arrow function with No parameter
// No parameter arrow function doesn't need any param inside the parenthesis

let str = () => "hellow world"
// let newStr = str();

console.log(str())






// 3. Arrow function with two / multiple parameters
// if we have two or more parameter, we must have parenthesis for parameter
//


let add = (a, b) => a + b;

console.log(add(4,5))



// 4. Arrow function with Objects , (single parameter)

//Example:- 1
let person = {

    firstName: "Jame" ,
    lastName: "Watson"

}

let getFullName = (person) => `${person.firstName} ${person.lastName}`

//console.log(getFullName(person));

let aName = getFullName(person);

console.log(aName);







//Example:- 2
let personData = {

    firstName: "Jame" ,
    lastName: "Watson",
    age: 35,
    Job: "Business Analyst"

}

let getData = personData => `${personData.firstName} ${personData.lastName} is a ${personData.Job}`

//console.log(getFullName(person));

let newData= getData(personData);

console.log(newData);






// 5. Arrow function with Default value and double parameter

let greet = (User="guest", age=0) => `Hello ${User}! you are ${age} years old`

let newGreet = greet()

console.log(newGreet);


// Here Default parameter in greet() will be ignored and , new value will be added
let newGreet1 = greet("Tom", 30)

console.log(newGreet1);





// 6. Arrow function with rest parameters (...)


/*
 1) Here we are using rest param to include all the sum(1,2,3,4,5)parameters.
 2) numbers.reduce() will reduced the numbers to one value
 3) num is our initial value, and it will iterate up to 5th
  accu--> will add the all the num value one by one
  
*/


// Example:- 1
let sum = (...numbers) => numbers.reduce((accu, num) => accu +num,   0)

let newSum = sum(1,2,3,4,5);
console.log(newSum)




// Example:-  2
let str1 = (...words) => words.find((e) => e==="Banana" )

let newStr1 = str1("Apple", "Orange","Banana","Mango");
console.log(newStr1)




// Example:-3



let word1 = (...words)=> words.filter((e)=> e==="subtract")


let newWord1 = word1(["add", "subtract", "plus", "minus", "add", "plus"])

console.log(newWord1);




// Example:-3
// rest parameter() and default value together

let browserInfo = (browser = "chrome", ...details) => {

  console.log(`Browser: ${browser}`);
  console.log("other details:", details)

}































































