

// reference solution from Sola
let size = 8
let stairString = " ".repeat(size)
let stairArray;

for (let i=size-1; i>=0 ;i--) {
    stairArray = stairString.split('')
    stairArray.splice(i,1,'#').push('#')
    stairString = stairArray.join('')
    console.log(stairString)
}
console.log("1234567890"); 


// i learned you can't push after splice 
let case1 = ["D", "o"]
let case2 = ["D", "o"]
let case3 = ["D", "o"]

case1.splice(1,1,'#').push('#')
console.log("Case 1: splice n push:" + case1); 
case2.splice(1,1,'#')
console.log("Case 2: splice: " + case2); 
case3.push('#')
console.log("Case 3: push: " + case3); 