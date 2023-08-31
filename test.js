//https://leetcode.com/problems/valid-parentheses/
// LEETCODE 
 
// Dylan used objects to solve this 
bool valid = true; 
let s =  "()()[][]{}{}"

let arrayS = s.split(""); 
console.log(arrayS); 

let falseCount = 0; 
for (i=0; i<arrayS.length; i+=2) {

    if ( arrayS[i] == "(") {
        // let checkP = arrayS[i+1] == ")" ? "Good ()" : "No good close for ( " + arrayS[i+1]; 
        arrayS[i+1] == ")" ? true : (falseCount += 1);
        // console.log(checkP); 
    } else if ( arrayS[i] == "[") {
        // let checkP = arrayS[i+1] == "]" ? "Good []" : "No good close for [ " + arrayS[i+1]; 
        arrayS[i+1] == "[" ? true : (falseCount += 1);
        // console.log(checkP); 
    } else if ( arrayS[i] == "{") {
        // let checkP = arrayS[i+1] == "}" ? "Good {}" : "No good close for { " + arrayS[i+1]; 
        arrayS[i+1] == "}" ? true : (falseCount += 1); 
        // console.log(checkP); 
    } 
}

if (falseCount > 0) {
    valid = false; 
    console.log("Valid: " + valid); 
} else {
    console.log("Valid: " + valid); 
}
console.log(falseCount); 


 