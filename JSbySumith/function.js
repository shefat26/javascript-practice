





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

































































