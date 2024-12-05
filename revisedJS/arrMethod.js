

// map() , filter(), reduce(), sort()


// "map()"
// "map()" will always return a new arr from the existing arr

const multiply = (x) => x * 3 ;






let num = [1,2,3,4];

let newNum = num.map((e) => e*2 );
console.log({newNum});



//"map()"
//Using "map()" tocheck the condition "true" or "false" 

let divis = [1,2,3,4];

let newDivis = divis.map((e) => e%2 === 0);
console.log(newDivis);




// Farenheit --> Celcious convert
// formula Farenheit --> Celcious :-  (F-32) * (5/9)


let fahTemp = [32, 68,86,104,212];

function temp(e){

    // formula Farenheit --> Celcious
    return (e-32)*(5/9);

}

let newTemp = fahTemp.map(temp)

console.log(newTemp);






// "filter()"
/*
 The filter() method of Array instances creates a shallow copy of a 
 portion of a given array, filtered down to just the elements from 
 the given array that pass the test implemented by the provided 
 function.
*/


let someNum = [1,2,3,4,5,6,7,8,9];

let newSomeNum = someNum.filter((e) => e*3+1 === 7);
console.log(newSomeNum);

//
let newSomeNum1 = someNum.filter((e) => e%3 === 0 );
console.log(newSomeNum1);



//Using "filter()" for object filtering

let employee = [

    {name:"John", age:30 , gender:"male"},
    {name:"Bob", age:35 , gender:"male"},
    {name:"Lisa", age:40 , gender:"female"},
    {name:"Priya", age:25 , gender:"female"},
    {name:"Peter", age:55 , gender:"male"},

];

let femaleEmpAge = employee.filter((emp) => {

    return emp.gender === "female" && emp.age > 20;

});

console.log(femaleEmpAge);






// "reduce()"
/*
 The reduce() method of Array instances executes a user-supplied 
 "reducer" callback function on each element of the array, in order, 
 passing in the return value from the calculation on the preceding 
 element. The final result of running the reducer across all elements
 of the array is a single value.

The first time that the callback is run there is no "return value of 
the previous calculation". If supplied, an initial value may be used 
in its place. Otherwise the array element at index 0 is used as the 
initial value and iteration starts from the next element 
(index 1 instead of index 0).
*/

/*
 Another way we can say, 
 (accumulator, currentValue) => accumulator + currentValue,
 initialValue,
*/


let numb = [1,2,4,5,6];

let sum = numb.reduce((acc,num) => {

    //this acc + num --> will be our initial value
    // our initial value is "0", since we don' declare any initial value
    // 0+1 = 1, 
    // 1+2 = 3,
    // 3+4 = 7,
    // 7+5 = 12,
    // 12+6 = 18
    return acc + num ; 


}, 0)         /// "0" is our starting num or initial value

console.log(sum)



// Find the Max number using "reduce()"

let top = [10,5,25,8,30,15];

// in this fun()
let maxNum = top.reduce((max,num) =>{

    //this acc + num --> will be our initial value
    // our initial value is "0", since we don' declare any initial value
    // num>max = max
    // 0  > 10 = 10, 
    // 10 > 5 = 10,
    // 10 > 25 = 25,
    // 25 > 8 = 25,
    // 25 > 30 = 30
    // 30 > 15 = 30

    if(num>max){

        return num;

    }
    else{ 

        return max;

    }

}, top[0]);   // "top[0]" is ouur initial value

console.log(maxNum);

























