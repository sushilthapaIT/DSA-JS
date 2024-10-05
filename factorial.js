/*
To find factorial of a given number
*/

const inpNum = 9;

var fact = 1;

if(inpNum < 0){
    console.log(`Factorial of ${inpNum} is not possible.`)
}
else{
    for(let i = 1; i <= inpNum; i++){
        fact = fact * i;
    }
    console.log(`Factorial of ${inpNum} is ${fact}.`);
}