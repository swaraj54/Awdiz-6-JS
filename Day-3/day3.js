// Conditional Statement 

// if else 
// switch


// syntax 
// if ( condition - 2 == 3 ){ statement 1 } else { statement 2 }

// console.log(2 == 3)

if (5 > 3) {
    console.log("Condition is true.")
} else {
    console.log("Condition is false.")
}

var value1 = 31;
var value2 = 20;
var value3 = 30;

if(value1 > value2){
    console.log("Value 1 is bigger than value 2")
} else if(value1 > value3) {
    console.log("value 1 is bigger than value 3")
} else {
    console.log("value 1 is lesser than value 2 and value 3")
}

// RTO 

// 1. Age limit > 18   L
// 2. Age limit < 80  no L
// 3. Age  == 18 , LL
// 4. Age limit < 18 , no L

var age = 90;

if(age == 18){
    console.log("You are allowed for LL only.")
} else if (age > 18){
    if(age < 80){
        console.log("You are allowed for L.")
    } else {
        console.log("Your age is greater than 80.")
    }
} else {
    console.log("You are not allowed for L.")
}




// Logical && || 

var value1 = 10;
var value2 = 20;
var value3 = 3;
var value4 = 1;

console.log(value1 < value2 && value1 > value3 && value1 < value4)
console.log(10 > 20 || 10 < 2)

// && - if even one condition turns false then it'll return false
//     and only when all conditions turns true then it'll return true

// || -  if even one condition is true then it'll return true
//         and when all conditions are false then only it'll return false












