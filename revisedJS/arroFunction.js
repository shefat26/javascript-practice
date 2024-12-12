// Arro Function

// No parentheses () Arrow function

// No "parameter" Arrow function

// Object with Arrow function

// Arrow function with default parameter value

// Arrow function with rest parameter.










//Arro Function

let newFunction = (e) => e*3;
let value = newFunction(5);


//

let arrFunction = (e)=>{

    return e/2 ;

}

const returned = arrFunction(12)
console.log({returned, value})



// No parentheses () Arrow function 
// if we have only one parameter we don't need () in Arrow function
// in single parameter arrow function we don't need "return" statement

let squar = num => num*num ;

let result = squar(5);
console.log(result);




// No "parameter" Arrow function


let mesg = () => "Hello World" ;

let newMesg = mesg();
console.log(newMesg);



// multiple parameter Arrow function

let add = (a,b) => a + b ;

console.log(add(3,4));




// Arrow function with "Object {}" 
// single parameter Arro function


let data = {

    firstName: 'Sifat',
    lastName: 'Moral' ,
    age : 29 ,
}

let bio = person => `${person.firstName} ${person.lastName} is ${person.age}` ;

let fullBio = bio(data);
console.log(fullBio);



// Arrow function with default parameter value
// we can insert devault value inside the  parameter in Arrow function

let greet= (user='John',age=10)=> `Hellow ${user} u r ${age} years old`

let personsAge = greet();

console.log(personsAge);




/* here we are passing vallue in greet1("Tom",30), this value will 
   override the "default value" and return the function with new value
*/

let greet1= (user='John',age=10)=> `Hellow ${user} u r ${age} years old`

let personsAge1 = greet1("Tom", 30);

console.log(personsAge1);




// rest parameter (...parm) arrow function


let sum = (...num) => num.reduce((acc,num) => acc + num, 0)

let newSum = sum(1,2,3,4,5);

console.log(newSum);



// 
let mult = (...num) => num.reduce((acc,num) => acc* num, 1)

let newMult = mult(1,2,3,4);

console.log(newMult);




// Arrow function with "...rest" param and multiple parameter


let browserInfo = (browser="chrome", ...details)=> {

    console.log(`Browser: ${browser}`);
    console.log('other details:', details);

}

browserInfo();

// so "firefox" is for browser parameter 
// And the other argument is for  "...details" parameter 
browserInfo('firefox', '115.11', ' Mozila', 'headless');





// Find the max number

const maxNum = (a,b,c) => {

    return Math.max(a,b,c);
}

const maxValue = maxNum(10,60,40);

console.log(maxValue);





let fun = () => "hello world"

console.log(fun());

//
 let calc = (a,b) => {

    if(a>b){

        return "a is greater"
    }
    else{

        return "a is less or equal to b"
    }
}
console.log(calc(4,4))



//


let anObj = (a,b)=> { return [a,b,1,2,3,"4","5"]}

console.log(anObj(2,3));































