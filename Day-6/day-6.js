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



// for (var i = 0; i < 2; i++) {
//     for (var j = 0; j < 2; j++) {
//         console.log(i, j)
//         // j++
//     } // end
//     // i++
// }
// 1 iteration:
// i = 0, i < 2, 0 < 2, true,
//     j = 0, j < 2, 0 < 2, true,
//     console.log(i, j), (0, 0),
//     j++

// 2 iterations

// i = 0, i < 2, 0 < 2, true,
//     j = 1, i < 2, 1 < 2, true,
//     console.log(i, j)(0, 1)
// j++

// 3 iteration:

// i = 0, i < 2, 0 < 2, true,
//     j = 2, j < 2, 2 < 2, false
// i++

// 4 iteration:
// i = 1, i < 2, 1 < 2, true
// j = 0; j < 2, 0 < 2, true
// console.log(i, j)(1, 0)
// j++

// 5 iteration:
// i = 1, i < 2, 1 < 2, true
// j = 1, j < 2, 1 < 2, true
// console.log(i, j)(1, 1)
// j++

// 6 iteration
// i = 1, i < 2, 1 < 2, true
// j = 2, i < 2, 2 < 2, false 
// i++

// 7 iteration 
// i = 2, i < 2, 2 < 2, false








// for (var i = 10; i <= 30; i += 10) {
//     for (var j = 20; j <= 40; j += 10) {
//         console.log(i, j)
//         // j++
//     }
//     //i++
// }

// 1 iteration :
// i = 10 , i <= 30 , 10 <= 30, true, 
// j = 20, j <= 40, 20 <= 40, true 
// console.log(i,j) (10, 20)
// j++

// 2 iteration 
// i = 10 , i <= 30 , 10 <= 30, true, 
// j = 30, j <= 40, 30 <= 40, true
// console.log(i,j) (10, 30)
// j++

// 3 iteration 
// i = 10 , i <= 30 , 10 <= 30, true, 
// j = 40, j <= 40, 40 <= 40, true
// console.log(i,j) (10, 40)
// j++


// 4 iteration 
// i = 10 , i <= 30 , 10 <= 30, true, 
// j = 50, j <= 40, 50 <= 40, false
// i++ 


// 4 iteration 
// i = 20 , i <= 30 , 20 <= 30, true, 
// j = 20, j <= 40, 20 <= 40, true
// console.log(i,j) (20, 20)
// j++


// 10, 20
// 10, 30
// 10, 40
// 20, 20
// 20, 30
// 20, 40
// 30, 20
// 30, 30
// 30, 40




//  1 + 2, 4, 56, 7, 8, 3, 2, 5, 7

//  1 + 2  =  2 == target
//  1 + 4  =
//  1 + 56 = 
//  1 + 7 
//  1 + 8  
//  1 + 3 
//  ...




// Q Find addition of  two number from given array with target.

// 1 0  + j = i + 1 = 1 2,4, 56, 7, 8, 3, 2, 5, 7
//  2 i = 1 +  j = i + 1, 2,  4, 56, 7, 8, 3, 2, 5, 7
//  4 i + j 56, 7, 8, 3, 2, 5, 7
//  56 i + j 7, 8, 3, 2, 5, 7
//  7 i + j 8, 3, 2, 5, 7
//  8 i + j 3, 2, 5, 7
//  3 i + j 2, 5, 7
//  2 i + j 5, 7
//  5 i + j 7
// ans : 
// 4 8
// 5 7
var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12

function FindTargetedValues(array, target) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            // console.log(array[i], array[j])
            if(array[i] + array[j] == target){
                console.log(array[i], array[j])
            }
        }
    }
}
FindTargetedValues(array, target)
















