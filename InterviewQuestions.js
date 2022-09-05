/*
Capitalize the first letter of all elements of an array of strings using RECURSION.

APPROACH
capitalizeFunction(["abc", "pqr", "xyz", "jkl"]) => ["Abc", "pqr", "Xyz", "Jkl"];
["Abc"] concate with capitalizeFunction(["pqr", "xyz", "jkl"]);
["Abc"] concate with ["Pqr"] concate with capitalizeFunction["xyz", "jkl"];
["Abc"] concate with ["Pqr"] concate with ["Xyz"] concate with capitalizeFunction["jkl"];
["Abc"] concate with ["Pqr"] concate with ["Xyz"] concate with ["Jkl"] concat with [];
*/

function capitalizeFirstLetter(arr){
    let result = [];

    if(arr.length == 0) return [];
    // pull out arr[0] and capitalize the first char of arr[0]
    let s = arr[0][0].toUpperCase() + arr[0].slice(1);
    result.push(s);
    return result.concat(capitalizeFirstLetter(arr.slice(1)));
}
// console.log(capitalizeFirstLetter(["abc", "pqr", "xyz", "jkl"]));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
REVERSE a Sentence using RECURSION in given manner (Very Commonly asked question).
Ex 1: INPUT: "Concept of The Day",  OUTPUT: "tpecnoC fO ehT yaD"
Ex 2: INPUT: "they are playing a game",  OUTPUT: "yeht era gniyalp a emag"


APPROACH
reverseSentWords() => split the sentence based on space => ["hi", "to", "all"] => loop over the 
array and reverse each word using reverse function and keep concating with next words
*/

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function revSentenceWords(sent){
    let words = sent.split(" ");
    for(let i=0; i<words.length; i++){
        words[i] = reverse(words[i]);
    }
    return words.join(" ");
}
// console.log(revSentenceWords("hi to all"));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PRINT THE DUPLICATE IN AN ARRAY
Ex : INPUT: [23, 3, 2,1, 3, 1],  OUTPUT: 3, 1.

APPROACH
We will create HashMap for counting the frequency of all element.
let frequencies = {
    23: 1,
    3: 2,
    2: 1,
    1: 2
}
Then loop over all keys and collect wherever value is greater than 1.
*/

function duplicate(arr){
    let frequencies = new Map();
    for(let i=0; i<arr.length; i++){
        if(frequencies.get(arr[i]) == undefined){
            frequencies.set(arr[i], 1);
        }
        else {
            frequencies.set(arr[i], frequencies.get(arr[i]) + 1);
        }
    }
    let res = [];
    for(let pairs of frequencies){
        if(pairs[1] > 1) res.push(pairs[0]);
    }
    return res;
}
console.log(duplicate([23, 3, 2,1, 3, 1]));



