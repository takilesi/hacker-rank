let a =[1,2,3]; 
let b =[5,6,7]; 

let alice = 0
let bob = 0 
for (let i=0; i<a.length; i++) {

    
    for (let j=0; j<b.length; j++) {

        console.log(a[i] == b[j] && i == j);

        if (a[i] > b[j] && i == j){
            console.log("point alice")
            alice++
        } else if (a[i] < b[j] && i== j) {
            console.log("point bob")
        }
    
         
    }

}