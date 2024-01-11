


// let key word

let x = "john"

x = 5;



// "let" key word is Block scope

let y = 10;

{
    let y = 5

    console.log(y);

}

console.log(y);


{
    let y = 8
    console.log(y);
    
}



// Hoisting "let" keyword






// "const" 
// with "const" we can't re-declare or re-assign any value
// we can change a "const" Array elements
// we can change a "const" Object property value.


const  cars = ["volvo", "BMW", "Toyota"]

cars[0] = "Nissan"

console.log(cars);

cars.push("Audi")

console.log(cars);



// "const"  Object
// we can change a "const" Object property value.

const autoMobile = {
    brand: "Fiat",
    model: "500",
    color: "white"
}

console.log(autoMobile)

autoMobile.color = "red"
console.log(autoMobile)


const a = 7;

{
    const a = 5;

    console.log(a)

}

console.log(a);


{
    const a = 5;

    console.log(a)

}

{
    const a = 5;

    console.log(a)

}

//"const" block scope
{
    const a = 3;

    console.log(a)

}



// Function  Hoisting


//printLn("print this line")
function printLn(arg){

  return  console.log(arg);
}

//printLine("Hello world");
const printLine = (arg)=>{

  return  console.log(arg);
}







