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
// event loop 
// setTimeout setInterval clearInterval
// map foreach find findindex
// push pop shift unshift slice and splice



var array = [1, 8, 2, 3, 4, 5, 6]
const result = array.map((num) => num > 5)
console.log(result)



var array = [1, 6, 8, 2, 3, 4, 5, 6]
const res = array.forEach((number) => console.log(number ))
console.log(res, "res")



var arrya = [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5]
const newIndec = arrya.push(6)
console.log(newIndec, "newIndec")
console.log(arrya)

var array = [1, 2, 3]
array.pop()
console.log(array.pop())
console.log(array)


var array = [1, 2, 3]

array.unshift(5)
array.unshift(4)

console.log(array)


var array = [1, 2, 3]
const deletedPosition = array.shift()
console.log(deletedPosition,"deletedPosition")
array.shift()
console.log(array)

const array = ['a', 'b', 'c', 'd', "e"]

const ans = array.slice(2, 4);
console.log(ans)
// const ans = array.slice(1, 5);
// console.log(ans)
// const ans = array.slice(-3);
// console.log(ans)
// const ans = array.slice(1, -3);
// console.log(ans)



const array = ['a', 'b', 'c', 'd', 'e'];
// array.splice(index, 0/1, value )

array.splice(1, 0, 'z')
console.log(array)

array.splice(4, 1, 'x')
console.log(array)

var todos = ['comple assignmentts', 'eat lunch']

todos.splice(1, 2)
console.log(todos)

