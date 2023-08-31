// .count 
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

candles = [4,4,4,3];

const birthdayCakeCandles = () => {
    let maxCandleHeight = Math.max(...candles); 
    let tallOnes = 0
    candles.forEach((candle) => candle == maxCandleHeight ? tallOnes++ : tallOnes+=0);
    console.log("\nmax value is: " + maxCandleHeight); 
    console.log("\ncount of max value is: " + tallOnes); 
}

birthdayCakeCandles()