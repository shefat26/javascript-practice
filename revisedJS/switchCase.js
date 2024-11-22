
// Switch case 
// we use "switch" case because of less time consumption
/*
  so here if the "case" num matches with the "dayNum" it will print
  that "day" or else it will break and look for the matching "dayNum"

*/



function checkDayOfWeek(dayNum){

    let day;

    switch (dayNum) {

        case 0:
        day = "Sunday"
            
            break;

        case 1:
        day = "Monday"
            
            break;

        case 2:
        day = "Tuesday"
            
            break;

        case 3:
        day = "Wednessday"
            
            break;

        case 4:
        day = "Thursday"
            
            break;

        case 5:
        day = "Friday"
            
            break;

        case 6:
        day = "Saturday"
            
            break;
    
        default:

        console.log("Invalid day");

            break;
    }

    return day;

}

console.log(checkDayOfWeek(0));
console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(2));
console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(10));



// 


let browser = "safari"

switch (browser) {

    case "firefox":
         
        console.log("firefox browser")
        
        break;

    case "edge":
                       
        console.log("edge browse")

        break;

    case "chrome":
        
        console.log("chrome browser")

        break;

    case "mozila":
          
        console.log("mozila browser")
               
        
        break;



    default:

    console.log("please pass the correct browser ..." + browser)

        break;
}



// use the switch case statement for multi user
// multi user: admin, customer, seller, distributor, manager


function multiUser(user){

    //let candidate;

    switch (user) {

        case "admin":

        console.log("User: Admin")
            
            break;
    
        case "customer":

        console.log("User: Customer")
            
            break;
    
        case "seller":

        console.log("User: Seller")
            
            break;
    
        case "manager":

        console.log("User: Manager")
            
            break;
    
        default:
            break;
    }

    
}

console.log(multiUser("customer"));




//Usint "Math.floor(Math.random()*3+1)" for Switch statement



switch (Math.floor(Math.random() * 2 + 1)) {
    case 1:
        
       console.log("Matched the valu: 1")

        break;


        
    case 2:
        
       console.log("Matched the valu: 2")

        break;


    case 3:
        
       console.log("Matched the valu: 3")

        break;



    default:

     console.log("Did Not Matched the valu")

        break;

}




// " Rock, Paper and scissor " game  for "Switch" statement


let playerOne = "scissors";
let computer = "rock";


switch (playerOne){

    case computer:

       console.log("Tie game!");
       break;

    case "rock":

       if(computer === "paper"){

        console.log("computer wins!");

       }
       else{

        console.log("playerOne wins!");
      }

       break;


    case "paper": 

     if(computer === "scissor"){

        console.log("computer wins!");

     }
     else{

        console.log("playerOne wins!");
     }

      break;


    default:

    if(computer === "rock"){

        console.log("computer wins!");

     }
     else{

        console.log("playerOne wins!");   
    }

        break;


}


