// .filter 
// .reduce 
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

candles = [4,4,1,3];

// reducer2 sums values of candles 
const reducer2 = () => {
    console.log("\nreducer2 (sum of candles element values): " +  candles.reduce((sum, index) => sum + index)); 
}
reducer2()

const reducer1 = () => {
    const maxHeight = candles.reduce((max, val) => val > max ? val : max, candles[0]);
    console.log("\nmaximum height: " + maxHeight); 
    console.log("num of tall candles: " + candles.filter(x => x==maxHeight).length)
}
reducer1() 