
// Function 

// Function Expression

// Arro function

// constructor Function

// //IIFE (Immediately Invoked Function Expression):

// Annonymous function

// Recursive functio

// Higher order Function

//method Overloding in a function in JS













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


console.log("\n\n")





/// ----------------------O----------------------------------



// Dave gray




function add(a,b){

    if(b === undefined){

        return a + a ;

    }
    else{

        return a + b;
    }

}

console.log(add(3,5))



// find the user name from the email address

function getUser(email){

    // using "slice()" and "indexOf()" to find the user name from email
    return email.slice(0, email.indexOf('@'));

    //to print the email untill "@" we conditioned untill index "."
    //return email.slice(0, email.indexOf('.'));

}

console.log(getUser('james0567@gmail.com'));
console.log(getUser('RobinDash@gmail.com'));





// Annoynomus function

let place = function(a){

    if(a === "city" || a === "town" ){

        return "Dense population"

    }
    else{

        return "good living condition"
    }
}

let densityOfPlace = place( 'town');

console.log(densityOfPlace);




// using arro function to upper case the first letter of the name/word

let toProperCase = (name) => {

    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();

};

console.log(toProperCase('jAcKWiLL'));

console.log(toProperCase('septembar'));



////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////



// method overloading is not supported by JavaScript
// method overloading is compile time polymorphism
// it will be decide which function has to call during run time
// it will only run the letest function out of multiple function

function print(){

    console.log("hello")
}

//print()


function print(name){

    console.log("hello" + name)
}

// only this function will be called because this function replaced by above 2 function
function print(name, age){

    console.log("hello," +" " + name + " age is " + age);
}

print("james", 28)




// run a test cases on remote browser
// parameter : browserName, browserVersion, remoteExecution


function testBrowser(browserName, browserVersion, remoteExecution){

    if(typeof browserVersion==="number" && typeof remoteExecution ==="boolean"){

        console.log(`Browser: ${browserName}, "version:" ${browserVersion}, remoteEecution: ${remoteExecution}`)
    }
    else if(typeof browserVersion==="number"){

        console.log(`Browser: ${browserName}, "version:" ${browserVersion}`)


    }
    else{

        console.log(`Browser: ${browserName}`)

    }

}

testBrowser("chrome", 115, true);
testBrowser("chrome", 115);
testBrowser("mozila");









function logWhisper(string){

    

    return string.toUpperCase();

}

console.log(logWhisper("hello"))


//

function sayHiToHeadphonedRoommate(str){

    if(str === "Hello!"){

        return "I can't hear you";
    }
    else if(str === "HELLO!"){

        return "Yes INDEED"

    }
    else if(str === str){

        return "I would love to!"
    }

}

console.log(sayHiToHeadphonedRoommate("HELLO!"))




