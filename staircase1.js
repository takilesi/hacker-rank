//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

let n = 7;  
let sp = " "; 

let staircase = ""; 
for (let i=0, j=n-1; i<n; i++, j--) {
    let spacecase = ""; 
    for (let  j=n-1; j>0; j-- ) {
        spacecase += sp; 
    }
    spacecase = spacecase.slice(i); 
    staircase += "#"; 
    console.log(spacecase + staircase);
}

console.log("12345678"); 

