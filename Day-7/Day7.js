var myName = "absaafsba"

// console.log(myName[myName.length - 1])

function isStringPalindrome(string) {
    for (var i = 0; i < Math.floor(string.length / 2); i++) { // run 2 times
        console.log(string[i], string[string.length - 1 - i])
        if (string[i] !== string[string.length - 1 - i]) {
            return "Not palindrome"
        }
    }
    return "Its a Palindrome"
}
console.log(isStringPalindrome(myName))


// console.log(Math.floor(5/2))
// console.log(Math.ceil(12.5))

// abbbc

// bccb


// abcde edcba
// +         -
// str[0] === str[lastOne]
// str[1] === str[second last]



