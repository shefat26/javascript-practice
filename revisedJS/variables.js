
// var : is a old way of declaring variable

var x = 10;

function test(){

    var y = 5;

}

console.log(x);



//functional declaration of global and local variable

var pop = "hi js"          // global variable

function rel(){

    var top = " Hello World"   // local ariable

    //console.log(top)
}
rel();                        // calling the function here

console.log(pop)
//console.log(top)




// redeclaring  and re-inatialize the variable 
// we can redeclare the variable with  "var" keyword 

var browser = "chrome" ;

var browser = "firefox";

browser = "edge";                // re-inatializing the variable

console.log(browser);



/////

// Not assigning any value

var a ;

console.log(a);  // undefined

a = "Hello World"

console.log(a);



//########################################################


// let  variable
// " let " is always a block scope {}
// we can't re-declare "let" variable twice
// we can reinitialize the "let"  variable


let m = "hi how are u"
let time = 5 ;

if(time>3){

    let mesg = "what is ur name"
    console.log(mesg);

}

// console.log(mesg) ==> we cant print "mesg" varialbe because of block scope

console.log(m)


// reinitialize the "let" variable


let z = 5;

z= 7;                    // reinitializing " z "

console.log(z);



// ###############################################


// "const" variable
// "const" variable must be initialize first exm: const num = 15
// we can't redlecare or reinitialize the "const" variable

const num = 15;

// num = 20;   reinitializing is not allowed with the "const"

console.log(num);



console.log("##############\n")




console.log("\n####### 'String Type' #######\n")



// string type


let str = "name"

let price = 5;

// string with the "  ${}  "
let aString = `spinach price is ${price} dollar`
console.log(aString);

let spinach = `spinach is ${2+4} years old `
console.log(spinach);



let littleBoy = ' "wait" said Joe, "Don\'t go without me" '
// we uses \'t to write "Don't" inside the single quotatio string
console.log(littleBoy);


// join "string" using " + " symbole

let firstName = "James";
let secondName = "Karbitus";
let commonName = "Maris";

let fullName;

fullName = firstName + " " +secondName + " " + commonName;

console.log(fullName);



// printing "newName" with interpolation
let newName;

newName = `${firstName} ${secondName} ${commonName}`

console.log(newName);



// Assignment Operator


// 3. Comparison Operators
// These operators compare values and return true or false.

// ==: Equal to  ==>  42 == "42" ;
// ===: Strict equal to (checks both value and type)=> 42 === 42 ;
// !=: Not equal to   ==> 9000 != 9001
// !==: Strict not equal to (checks both value and type) => 900 !== 901
// >: Greater than ==> 10 > 9 ;
// <: Less than  ==> 5 < 7 ;
// >=: Greater than or equal to ==>  10 >= 10
// <=: Less than or equal to ==> 

// &&: Logical AND (true if both conditions are true) => 5 && 6
// ||: Logical OR (true if at least one condition is true) => 3 || 2
// !: Logical NOT (reverses the Boolean value)





// Ternary Operator  
