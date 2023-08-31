//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
// high and low record 

// for (i=0,j=scoresArr.length; i<scoresArr.length; i++,j--) {

let scores = "6 5 21 36 10 28 35 4 24 42"; 
let scoresArr = scores.split(" ");

let highScoreCount = lowScoreCount = 0; 
let highScore = lowScore = parseInt(scoresArr[0]); 

for (let i=1; i<scoresArr.length; i++) {
    if (parseInt(scoresArr[i]) > highScore) {
        highScoreCount++
        highScore = parseInt(scoresArr[i]);

    } else if (parseInt(scoresArr[i]) < lowScore){
        lowScore = parseInt(scoresArr[i]);
        lowScoreCount++
    }
    console.log("iteration: ", i, "arrayVal: ", scoresArr[i], "highScoreCount", highScoreCount, "highScore: ", highScore, "lowScore: ", lowScore, "lowscorecount: ", lowScoreCount); 
}
console.log("high score records: ", highScoreCount, "\nlow score records", lowScoreCount); 