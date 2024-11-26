
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
















