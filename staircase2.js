//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

// for loop increments and decrements at same time 
let num = 10; 
let space = " "; 
let hashtag = "#"
let spaces = space.repeat(num); 
for (i=1, j=num-1; i<=num; i++, j--){
    spaces = space.repeat(j)
    hashtags = hashtag.repeat(i)
    console.log(spaces + hashtags)
}
console.log("1234567890"); 