
// Function 

// Function Expression

// Arro function

// constructor Function

// //IIFE (Immediately Invoked Function Expression):

// Annonymous function

// Recursive functio

// Higher order Function














// simple function()


function add(a,b){

    return a+b;

}
let sum = add(3,6);
console.log(sum);



//

function hello(){

    console.log('Print:- Hello world')

}
hello()




// Function Expression / Annonymous function:- 

let multiply = function(a,b){

    return a*b ;

}

let mul = multiply(4,7);

console.log(mul);


//

// let x = 5;
// let y = 8;

let greater = function(a,b){

    if(a>b){

        return "A is Greater " ;
    }
    else{

        return "B is greater" ;
    }


}

let grt = greater(5,8);
console.log(grt);







// Arro function  :- 



const divide = (a,b) => a/b ;

const div = divide(20, 2);
console.log({div});


//



// constructor Function :- 
// here last parameter behave like function body
// it doesn't have that much of use


const substract = new Function( "a", "b", " return a-b; ")


const sub = substract(10,2);
console.log({sub});




//IIFE (Immediately Invoked Function Expression):
// self invoking Function that declare and invoke immediately


(function(){

    console.log("Hello world");

})
();




// Generator Function:-
// Syntax:- function* and yield keyworl
// use case of this function is not much

function* generateNum(){

    yield 1 ;
    yield 2 ;
    yield 3 ;
    yield 4 ;

}

const generator = generateNum();

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)






// Annonymous function
// it doesn't have any specific name


const num = [1,2,3,4,5];

const newNum = num.map(function(e){

    return e*e ;

})

console.log(newNum);


//
const subNum = num.map((e) =>{

    return e - 1  ;

})

console.log(subNum);





// Recursive functio
// this function will call itself

function factorial(n){

    if(n === 0 || n === 1){

        return 1 ;

    }
    else{

        // we called the factorial function internally and n-1 will iterate toward the decrasing num
        return n * factorial(n-1);

    }

}

console.log(factorial(4))   // factorial of 4-> 4*3*2*1 = 24

console.log(factorial(5))   // factorial of 5 -> 5*4*3*2*1 = 120






// Higher order Function
// This function will take one or more function as an argument


function addition(a,b){

    return a + b ;

}


// so here we are passing the "addition(a,b)" in to "operate()"
function operate(funcName, a, b){

    return funcName (a,b);

}

// we passed the "addition, 4, 5" as an argument in "operate()" function
const s = operate(addition, 4, 5);

console.log(s);



//


function miltiplication(a,b){

    return a*b ;
}


function multi(myFunction, a,b){

    return myFunction(a,b);

}

const m = multi(multiply, 3, 6);

console.log(m)



























