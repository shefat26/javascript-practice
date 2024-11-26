
// "if" "else"  statement 

// Ternary Operator


function checkAge(age){

    if(age>=18){

        console.log("eligible to vote")
    }
    else{

        console.log("Not eligible to vote")

    }

}

checkAge(15);
checkAge(22)
checkAge(0);





// 

function checkNum(num){

    if(num>0){

        console.log("number is positive")
    }
    else if(num<0){

        console.log("number is Negative")
    }
    else{

        console.log("No number is Found")

    }

}

checkNum(5)
checkNum(-1)
checkNum(0)


//Nested "if" "else"


function checkMarks(mark){

    let score;

    if(mark>=90){

        score = "A";
    }
    else{

        if(mark>=80){

            score = "B"

        }
        else{

            if(mark>=70){

                score = "C"

            }
            else{

                score = "D"

            }
        }
    }

    console.log(score)
}

checkMarks(91)
checkMarks(80)
checkMarks(79)
checkMarks(68)
checkMarks(88)



// if -else

let player = "Johny"

if( player== "Sam"){

    console.log("it's Sam")
}
else if(player=="Rayman"){

    console.log("it's Rayman")

}
else if(player=="John"){

    console.log("it's John")

}
else{

    console.log("None of them")

}






console.log("\n###### if ... else , #######\n")


// School Practice 



let person = "Sam"

let greetings;

if(person === "James"){

    greetings = " Hello James";
}
else if(person=== "Rocky"){

    greetings = "Hello Rocky";
}
else if(person === "Walker"){

    greetings = "Hello Walker";
}
else{

    greetings = "Whooo are you";
}

console.log(greetings);





// "Ternary" practice


let newPerson = ""

let impression;

 switch (newPerson) {
    case "Joe":

     impression = "welcoming";
        
        break;
 

    case "Rabit" :

     impression = "Adorable";

        break;

    case "Tigger":

      impression = "Dangerous Animal";

      break;


    case "Shark":

      impression = "Ocean King"

      break;


    default:

      impression = "Not a living things"

        break;
 }

 console.log(impression);







console.log("\n###### Ternary Operator #######\n")




// "Ternary" operator 
// Ternary operator is replace of "if"  "else" statement, 
// "Ternary" operator can have multiple "Ternary" operatore inside the operator
// "Ternary" operator can be chaned together.

let i = 10;
let j = 12;

let result = i>j ? console.log("i is greater") : console.log("j is greater");

console.log(result);



//

let product = "phone";

/* so here we are saying if the "product" holds any value it will print 
 the first part of the "ternary" operator, else it will print the 
 second part.
 */

 //           =condition ?  "true"     :      "false"
let responce = product? "it's a phone" : "it's a Telivision ";

console.log(responce);





/*/ Chaining or multiple "Ternary" operator inside one "Ternary" operator, 
 we seperated multiple "Ternary" operator by placing " : " after every
 first "true" statement. 
*/

let testScore = 50;

let myGrade = testScore > 89? `Grade "A"`:testScore > 79? `Grade B ` 
             :testScore > 69? ` Grade  C ` 
             :testScore > 59? ` Grade  D ` 
             : ` F ` ;

console.log(myGrade);





// Multiple "Ternary" operator


 let firstCheck = false;
 let secondCheck = false;

 // here we wrote two "Ternary" operator, inside one "Ternary" operator
 access=firstCheck?"Access denied": secondCheck?"Access denied":"Access granted"

console.log(access);






// "Rock", "Paper" and "Scissors" game for "Ternary" operator


 let playerOne = "rock";
 let playerTwo= "rock"

 // variable =      "condition"     ?      "true"    :      "false"
 let result1 = playerOne===playerTwo?"player matched":"different player"

console.log(result1);





// School chapter 
//


 let myName = "Sifat";
 let probalityOfRain = 0.2;
 let temperatureInc = 26;


let message = `Hello, ${myName}, with a rain chance of ${probalityOfRain*100}%
  and a temparature of ${temperatureInc}C we recommend that` + 
  (probalityOfRain>0.3? " take an umbrella" : " enjoy this rain") + `
  ${
    temperatureInc>=26 ? 'and watch out for heatstroake.'
    :'and bask in this fine weather'
}`


console.log(message);



// Refactoring the above code

let newName = "James";
let rainProbality = 0.2;
let temparature = 26;


let likelyToRain = rainProbality > 0.3 ;
let sunIsDanger = temparature >= 26;
let rainPercent = rainProbality * 100;


let oldMessage = `Hello ${newName}, with a rain chanceof ${rainPercent}%
 and a temperature of ${temparature}C we recommend that you` + 
 (likelyToRain ? "take an umbrella" : " enjoy this rainey day") +
 `${
    sunIsDanger 
    ? " and watch out for heatstroke!" 
    : "and bask in this fine weather."

 }`;

console.log("\n", oldMessage);





// Refactoring / reOrganizing the above code again

let newName1 = "James";
let rainProbality1 = 0.2;
let temparature1 = 26;


let likelyToRain1 = rainProbality1 > 0.3;
let sunIsDanger1 = temparature1 >= 26
let rainPercent1 = rainProbality1*100

let rainAdvice = likelyToRain1 ?"take an umbrella" : "enjoy this rainy day";
let sunAdvice = sunIsDanger1 ? "watchout for heatstroke" : "bask in this weather";


let finalMessage= ` Hello, ${newName1}, with a rain chance of ${rainPercent1}% 
     and a temperature of ${temparature1}C we recommend that you 
     ${rainAdvice} and ${sunAdvice}. ` ;


console.log("\n", finalMessage);




//

let first = 2;
let second = 1;
let problem = 99;

let luckyNumber = first > second ? (problem-1)/2 : problem / 3 ;

console.log(luckyNumber);





