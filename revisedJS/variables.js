
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






