

// Function Practice


/**
 * You know how old your dog is in human years, but what about dog 
 * years? Calculate it!

 Write a function named calculateDogAge that:
 ->takes 1 argument: your puppy's age.
 ->calculates your dog's age based on the conversion rate of 1 human 
   year to 7 dog years.
 ->outputs the result to the screen like so: "Your doggie is NN years 
   old in dog years!"
 ->Call the function three times with different sets of values.
 Bonus: Add an additional argument to the function that takes the 
 conversion rate of human to dog years.
*/


function dogAge(age){

    let dogYears = 7*age;

    console.log(`Your dog is ${dogYears} years old`);

}

dogAge(2)
dogAge(0.5)
dogAge(1)



/*
 Ever wonder how much a "lifetime supply" of your favorite snack is? 
  Wonder no more!

 -Write a function named calculateSupply that:
 -takes 2 arguments: age, amount per day.
 -calculates the amount consumed for rest of the life (based on a 
  constant max age).
 -outputs the result to the screen like so: "You will need NN to last
  you until the ripe old age of X"
 -Call that function three times, passing in different values each 
  time.
 -Bonus: Accept floating point values for amount per day, and round 
  the result to a round number.

*/


function calculateSupply(age, amountParDay){

    let maxAge = 100 ;

    // years left to live
    let yearsLeft = maxAge - age ;

    // total amount of snacks needed for the rest of life
    let totalAmount = (amountParDay*365)*yearsLeft;

    // rounding the total amount of snacks 
    const roundAmount = Math.round(totalAmount);

    console.log(`you will need ${roundAmount} to last you untill u ripe old age of ${maxAge} `);


}

calculateSupply(25,2.5);
calculateSupply(35,2.8);



//


let people = [

    {name: "james", age: 20, gender: "male"},
    {name: "walker", age: 30, gender: "male"},
    {name: "watson", age: 33, gender: "male"},
    {name: "hena", age: 23, gender: "female"},
    {name: "sara", age: 25, gender: "female"},

]

let genders = people.filter((e)=>{

    return e.gender === "female" ;
});

console.log(genders);







/*
 Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".

*/


function calcCircumfrence(radius){

    return `The Circumfrence is ${Math.PI*2*radius}`

}

console.log(calcCircumfrence(10));


function calcArea(radius){

    return `The Area is ${Math.PI*((radius)*(radius))}`
}

console.log(calcArea(2))





  let obj = {

     // when a function is property of obj key then we call it a "method()"
     anny: () => "print "
  }

  console.log(obj.anny());


  let x = (a,b)=> {
    
    let c = a+b;
      
    if(c === 5){

        return true;

    }
    else if(c === 7){

        return false
    }
    return c;

    
}

  console.log(x(5,3));



function count(a,b){

    let z = ()=> {
    
        let c = a+b;
          
        // if(c === 5){
    
        //     return ;
    
        // }
        // else if(c === 7){
    
        //     return false
        // }


        return c === 5 ? true : c ;
    
        
    }

     
    return z();
}

console.log(count(3,4))





// destructring


let anyObj = {

    name: "John",
    age : 25,
    job : "Mechanic"

}


let {name:person, age, job} = anyObj 

 person = "Rohim"

console.log({
    person , age, job
})
























