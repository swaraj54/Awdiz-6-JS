// datatypes - String, number, Boolean 
// varibles - var let const 
// comparision operator - < > == === 
// logical op || && 
// conditional statement if else , switch 
// Loops for while 


switch (40) {
    case 10:
        console.log("10")
        break;
    case 20:
        console.log("20")
        break;
    default:
        console.log("10 nor 20")
        break;
}



// Q Print numbers from 1 - 100


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// console.log(100)


// for (starting - 1; ending - 100; sequence 1) {
//     console.log("hi")
// }

for (var count = 1; count <= 10; count++) {
    console.log("hoi") // 1 2 3 ... 10

    // count++; 2 3 4 5 6 7 8 9 10 11
}




for(var count = 2; count < 10; count+=5){
    console.log("Hii")
}



for (var i = 440; i < 480; i += 10) { console.log(i) }


for (var i = 2; i < 20; i += 6) {
    console.log("bghhjbkawd")
}



// Q Print number from 10 - 1

for (var i = 100; i >= 1; i -= 10) {
    console.log(i) // 10 9 ...  1

    // i-- 10  9  8 ..  1 0 
}







// Q Print even and odd number from 1 - 10.
// For even number print even with number , 2 - even 
// For odd number print odd with number , 1 - odd 


for(var i = 1; i < 11; i++){
    if( i % 2 == 0){
        console.log(i , "- even")
    } else {
        console.log(i , "- odd")
    }
    // console.log(i, "- odd" )
}


// Q Print addition of odd number from 10 -30.

var count = 0

for(var i = 10 ; i < 30; i++){
    if(i % 2 == 1){
        count += i;
    }
}

console.log(count)


console.log( 15 % 2 == 0 )



//    ____  10 - Q
// 2 / 22
//     22
//      0 - R 
 




var count = 1;
count = count + 2; // re-assign
count += 2
count++
console.log(count)

var count = 1;
count = count - 2; // re-assign
count -= 2
count--
console.log(count)


