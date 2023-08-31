//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

// apple tree -   - orange tree
//   (a)   (s)house(t)  (b)
//    a=4    s=7  t=10  b=12
//     (d)= distance from tree
//           + to the right of tree
//           - to the left of tree 
// m apples 3
//  [2,3,-4]
// n oranges 3
//  [3,-2,-4]
// countApplesAndOranges function 
let s = 7, t=10, a=4, b=12, apples=[2,3,-4], oranges=[3,-2,-4]
let house = []
for (let i=s; i<=t; i++){
    house.push(i)
}
for (let i=0; i<apples.length; i++){
    apples[i]=parseInt(apples[i])+4
    oranges[i]=parseInt(oranges[i])+12
}
console.log("house array values: ", house)
console.log("apples array values: ", apples)
console.log("oranges array values: ", oranges)
const appleHits = house.filter(value => apples.includes(value));
const orangeHits = house.filter(value => oranges.includes(value));
console.log("Apples hitting the house: ", appleHits.length)
console.log("Oranges hitting the house: ", orangeHits.length)