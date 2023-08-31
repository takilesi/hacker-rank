let array =[[1,2,3], 
            [4,5,6], 
            [7,8,9]];

let sum1 = 0
let sum2 = 0 
j=0
for (let i=0; i<array.length; i++) {
    for (let j=0; j<array[i].length; j++) {
        
    }
    console.log(array[i][i]);
    sum1 += array[i][i]
}

k=0
for (let i=0; i<array.length; i++) {
    for (k=array[i].length; k > 0; k--) {
        console.log("array length: " + array[i].length + "k=: " + k)
    }
    console.log(array[i][k]);
    sum2 += array[i][k]

}
console.log("sum1: " + sum1); 
console.log("sum2: " + sum2); 

console.log(array[0][2]);
console.log(array[1][1]);
console.log(array[2][0]);
