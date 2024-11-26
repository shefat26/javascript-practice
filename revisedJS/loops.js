
// Different Types of loops
// For loop, while loop



// for loop:

for(let i=0; i<=10; i++){

    console.log(i);

}

console.log("######\n")

//

for( let i=1; i<10; i++){

    console.log(i);
}


console.log("##########\n")


// Array index based loop

let arr = [1,2,3,4,5,6];

for( let i=0; i<arr.length; i++){

    console.log(arr[i]);
}



//counting portion of the Array from above "arr= [1,2,3,4,5,6]"

for(let i=1; i<arr[4]; i++){

    console.log(arr[i]);
}




console.log("##########\n")



// for ... of loop

let numArr = [10,11,12,13,14,15];

for( let e of numArr){

    console.log(e);
}

console.log("##########\n")




// "while ... loop"


// print 1 to 10


let p=1;

while(p<=5){

    console.log(p);

    p++ ;

}


// Print "even" numbers using "while loop"

let l=2;

while(l<=10){

    console.log(l);

    //l+=2;
    l=l+2                  // l+2 ==> increment by 2 number

}

console.log("##########\n")


// "do ... while loop" 

let h = 1;

do{

    console.log(h);

    h++;
}

while(h<=8);




console.log("##########\n")


// "break"  statement in loops
//use while loop

// print num 1 to 50 and when you see multiply of 5 say "hi"
// so it will say "hi" after each num: 5,10,15,20,25,30,35,40,45, 50


let num = 1;

while(num<=50){

    console.log(num);         // it will print the "num = 0"

    if(num % 5 == 0){     // if any num divisible by 5 and 
                          // remainder is 0 then print "hi"
        console.log("hi")

        break;        // when we find the multiplies of 5 it will break
    }                 // so it will break at num "5"

    num ++
}



// print the browser using "for ... of" loop and "break" statement


let browser = ["chrome", "firefox", "edge", "IE"];

for(let e of browser){

    // we are using "if else" condition to launch specific browse
    if(e == "edge"){

        console.log("launch edge browser ...");

        break;        // "break" will stop the condition once it matches 
    }

}




//  

let favoriteNum = 32;

if(favoriteNum >= 10){

    favoriteNum = favoriteNum + 10

}

console.log("\nfavorite Number:-",favoriteNum);



// using while loop for above code

let newFavoriteNum = 0;

while( newFavoriteNum < 10){

    newFavoriteNum = newFavoriteNum + 1;

}

console.log(newFavoriteNum);















