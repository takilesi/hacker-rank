
let length = 10
let sp = " "
let spaces = sp.repeat(length)
let spaceArr = spaces.split('')

// replace single array element with hashtag in this case 
for (i=length-1; i>0; i--) {
    spaceArr.splice(i,1,'#'); 
    let stairs = spaceArr.join(''); 
    console.log(stairs); 
}
console.log("1234567890"); 

