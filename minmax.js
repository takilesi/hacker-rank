// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// WORKS!!!

arr = [1,2,3,4,15]
console.log("Original Array: " + arr); 
let sumMinus1element = []
let sum = 0 
let temp = 0
sumArr = []
for (let i=0; i<arr.length; i++) {
    temp = arr[i]
    arr[i]=0; 
    sum = arr.reduce((a,b)=>a+b); 
    arr[i] = temp
    // console.log("Sum: " + sum); 
    sumArr.push(sum); 
}
console.log("SumArr: " + sumArr); 
console.log("max: " + Math.max(...sumArr)); 
console.log("min: " + Math.min(...sumArr)); 
