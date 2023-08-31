//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

let array =[[1,2,3], 
            [4,5,6], 
            [7,8,-6]];

let sum1 = 0
let sum2 = 0 
let output = 0 

for (let i=0, j=array.length-1; i<array.length; i++, j--) {

    sum1 += array[i][i]
    sum2 += array[i][j]
}

console.log("sum1: " + sum1); 
console.log("sum2: " + sum2); 

output = Math.abs(sum1-sum2); 

console.log("The difference is: " + output); 