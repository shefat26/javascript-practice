
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





