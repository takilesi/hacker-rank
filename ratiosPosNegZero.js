//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
// use new line in console.log   "\n"
// .toFixed() function 

let arr = [1,1,0,-1,-1, -1]

let countPos = 0
let countNeg = 0 
let countZero = 0 

for (let i=0; i<arr.length; i++) {

    if(arr[i]>0){
        countPos += 1
    } else if (arr[i]<0) {
        countNeg += 1
    } else {
        countZero += 1
    }
}

console.log("\nPositive Ratio: " + (countPos/arr.length).toFixed(6)); 
console.log("Negative Ratio: " + (countNeg/arr.length).toFixed(6)); 
console.log("Zero Ratio    : " + (countZero/arr.length).toFixed(6)); 