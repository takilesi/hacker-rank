//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

let n = 5

let grades = [34, 33, 32, 85, 90]
for (let i=0; i<grades.length; i++){
    console.log("grade: ", grades[i], "remainder: ", grades[i]%5)
    if (grades[i]%5 > 2) { 
        console.log("new grade: ", grades[i] += (5-grades[i]%5))
    }
}


