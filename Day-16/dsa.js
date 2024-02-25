var string = "Hi, I am Awdiz. I am located at washi."

// output { "Hi" : 1, "I" : 2, "am" : 2,  }

// var array = [1, 2, 3]
// array[0] = 1

// var object = { name: "athrava" }
// object[name]  // athrava

function findCount(string) {
    var object = {}
    var word = ""; // Hi I
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " " || string[i] === "," || string[i] === ".") {
            if (word !== "") {
                if (object[word]) {
                    object[word]++
                } else {
                    object[word] = 1
                }
                word = "";
            }
        } else {
            word += string[i]
            console.log(string[i], "string[i]")
        }
        console.log(word, "word")
    }
    console.log(object) // final answer
}

findCount(string)