
// Array 

let myArr = [];         // empty array

let num= [1,2,4,3,5]  // number arr

let someFruit = ["apple", "banana", "orange"];  // Array with string


// Using "Push()" method in array

let lang = ["Java", "Python", "JS"];

// using "push()"" to add str & num at the end of the "lang" arr
lang.push("Ruby", 5);  

console.log(lang)




//using "pop()" method in arr
// "pop()" method will remove the "last element" from the Array

let numArr= [1,2,3,4,5];

numArr.pop();
console.log(numArr);





// Using "Shift()" method
/* "Shift()" method will remove the first element from the array 
   and return the first element on the array in the console*/
//


let fruits = ["apple", "banana", "orange"];

let firstFruit= fruits.shift()

// this line will print removed element
console.log(firstFruit);     

// this line will print existing arr after "shift()" uses
console.log(fruits);     






// Using "unshift()"
/*
 Using "unshift()" we can add element at the beginning of the arr
*/


let color = ['red', 'green', 'black', 'white'];

// we are adding few elements at beginning of the above array with "unshift()"
color.unshift('blue', 'pink', 2)

console.log(color);
console.log(color.length);






// Using "splice()" method
/*
 We use "splice()" to remove and add element at the same time in an Arr,
 ex: animal.splice(1, 2, "bird")==> we are saying start from indx 1, 
  remove "2" element from indx "1", then add "bird" at the indx 1.
  ==> we can also say: animal.splice(3, 1 )==> start at 3rd indx,
   and remove 1 element and no element will be added

*/


let animal = ["dog", "cat", "bird", "fish"];

let addAnimal= animal.splice(1, 2, "bear" , "elephant", "cow");

console.log(animal);


// this code will remove the first indx, and 1 element from the arr only
animal.splice(0,1);

console.log(animal);






// Using "slice()" method
/*
 "slice()" method will return a new Array from the existing array
  Ex: let say "pop.slice(1,4)"==> it will start from the indx 1, and
  stop at the indx 3 , just before the 4th indx. it will not include 
  4th indx.  
*/


let pop = [1,2,3,4,5,6];

// this line of code will return a new arr from indx 1 to indx 3
let newPop = pop.slice(1,4);

console.log(newPop);




// Using "concat()"
// the "concat()" will combined two Arr in to one new Arr


let frut = ["apple", "banana", "orange"];

let mixNum = [1,2,3,"healthy", "fruit"];

let mixArr = frut.concat(mixNum);

console.log(mixArr);






// Using "indexOf()" method
// "indexOf()" will give us the arr element index num.


let colorArr = ["red", "green", "yellow", "red", "blue"];

//this line of code will give the first index "red" color
let red = colorArr.indexOf("red");
console.log(red);


/*
 here we are finding repeted color indx num from the same Arr,
 so we are saying look for "red" color and start count from indx 2,
 since we have "red" color on the 0th indx
*/
let secondRed = colorArr.indexOf("red", 2);

console.log(secondRed);



//this line of code will try to find the "white" color in the above arr
// it will return " -1", because there is no "with" color in the Arr
let indxUnknown = colorArr.indexOf("white");
console.log(indxUnknown);

































