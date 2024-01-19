
// 1) Store Multiple Values with Arrays


var ourArray = ["John", 23];

console.log(ourArray);





// 2) Nested Array / Multidimentional array


var ourArray = [["the universe", 42, 55], "ALACE",235, ["everything", 1001]]

console.log(ourArray[0][2])
console.log(ourArray[1][3])
console.log(ourArray[3][0])
console.log(ourArray[3][1])
console.log(ourArray[2])




// 3) Access array data with index


var anArray = [50, 60, 70, 8]

console.log(anArray[1]);
console.log(anArray[0]);
console.log(anArray[3]);






// Modify Array Data with Index


var myArray = [20,64,99,33]
console.log(myArray);

myArray[0] = 85;
console.log(myArray)


console.log("\n", "\n###########################\n")






// 4) Manipulate Arrays with push()



var anArray = ["John", "jay", "cat"];
console.log(anArray);


anArray.push("Ron", "Joy");
console.log(anArray);


var anArray = [["James", 23], ["Dog", 3]];
console.log(anArray)

anArray.push(["bird",1])
console.log(anArray, "\n\n");







// Manipulate Arrays with pop()


var newArr = [1,2,3,4]
console.log(newArr)

var removedArr = newArr.pop()

console.log(newArr);
console.log(removedArr,"\n");





let myArray1 = ["A", "B", "C", "D", "E","F"];

// join() , it will return new string separated by coma

let newStr = myArray.join()
console.log(newStr);



//The split() method is a string method that creates a new array
// it will split the "newStr" string in to individual string.

let aStr = newStr.split(",")
console.log(aStr);





// The concat() method
// the concat method joined two different into one Array

let myArrayA = ["1", "2", "3", "4"];

let myArrayB = ["E","F","G","H"];

//let newArray = myArrayA.concat(myArrayB);


// We can also use spread operator for concatination.
let newArray = [...myArrayA, ...myArrayB];

console.log(newArray);





// Nested Array/ Multidimentional Array




// Naveen array practice


// 1. splice()


let animals = ["dog", "cat", "bird", "fish"]

// add "Linon" at index 1 & remove 0 element 
animals.splice(1,0,"Lion")
console.log(animals)


animals.splice(3,1,"Zebra")
console.log(animals)


animals.splice(5,0,"PIG")
console.log(animals)


animals.splice(3,2,"Dog")
console.log(animals)




