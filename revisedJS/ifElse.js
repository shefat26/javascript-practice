
// "if" "else"  statement 


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










