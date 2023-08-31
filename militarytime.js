// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
// convert to military time 
s = '12:01:00PM'

let time = Date.now() // milliseconds since Unix epoch
let timeS = Math.floor(Date.now() / 1000) // seconds since Unix epoch
console.log("\nEST: five hours behind UTC /not daylight savings time/"); 
console.log("UTC: time at 0 deg longitude"); 
console.log("Unix Epoch: Jan 1, 1970 UTC"); 
console.log("\nmilliseconds since Unix epoch: " + time); 
console.log("seconds since Unix epoch: " + timeS); 

var d = new Date(); 
let hour = d.getHours(); 
if (hour > 12) {
    hour -= 12
}
let min = d.getMinutes(); 
if (min < 10) {
    min = "0" + min
}
let sec = d.getSeconds(); 
if (sec < 10) {
    sec = "0" + sec
}
console.log("\nCurrent local time: " + hour + ":" + min + ":" + sec); 

