// ... spread operator 
// .filter 
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

// use spread operator with array 

const birthdayCakeCandles = () => {
    // candles array contains the height of each candle 
    candles = [4,4,4,3]; 
    maxHeight = Math.max(...candles); 
    console.log("max height: " + maxHeight); 
    console.log("num of tall candles: " + candles.filter(x => x==maxHeight).length)
}

birthdayCakeCandles()