// datatypes - String, number, Boolean 
// varibles - var let const 
// comparision operator - < > == === 
// logical op || && 
// conditional statement if else , switch 
// Loops for - while 
// ++ -- 
// function  - trad, arraow
// console.log();
// typeof()
// undefined 
// Array  
// function
// Nested for loop 

// Object



// var array = [1, 2, 3, 4]


var myObject = { name: 'awdiz', surname: "xyz", age: 20, isOpen: true, students: ["a", 'b'] }

console.log(myObject, "myObject")
console.log(myObject.students)
console.log(myObject.name)
console.log(myObject.surname)
console.log(myObject.age)

myObject["xyz"] = "xyz"
console.log(myObject)


// // Q Find unique numbers,  1 , 2,  3, 4, 5

var array = [1, 2, 1, 3, 4, 5, 2, 3, 5];
var myAnswer = {}

for (var i = 0; i < array.length; i++) {
    // console.log(myAnswer[array[i]])
    if (myAnswer[array[i]] === undefined) {
        myAnswer[array[i]] = 1
        console.log(array[i])
    }
}






// Q Find count of unique numbers,  1 , 2,  3, 4, 5

var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
var myAnswer = { }

for (var i = 0; i < array.length; i++) {
    // console.log(myAnswer[array[i]])
    if (myAnswer[1] === undefined) {
        myAnswer[array[i]] = 1
    } else {
        myAnswer[array[i]]++
    }

}

console.log(myAnswer)



