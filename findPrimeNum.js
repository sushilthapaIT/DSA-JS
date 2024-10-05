/*
To find the prime number
1. Prime Number: are those which are divided by itself or 1.
*/

//without using function
const num = 7;

if (num == 1){
    console.log(`${num} is not a prime neither composite number.`)
}
else if (num < 1) {
    console.log(`Prime number of ${num} is not possible.`)
}
else{
    for (let i = 2; i < num; i++){
        if(num % i == 0){
            var result = `${num} is not a prime number.`
        }
        else{
            var result = `${num} is a prime number.`
        }
    }

    console.log(result)
}


//using function
function toCheckPrime(a){
    if (a == 1){
        return console.log(`${a} is neither prime nor a composite number.`)
    }
    else if ( a < 1 ){
        return console.log(`Prime number of ${a} is not possible.`)
    }
    else{
        for (let i = 2; i < a; i++){
            if (a % 2 == 0){
                return console.log(`${a} is not a prime number.`)
            } 
            else{
                return console.log(`${a} is a prime number.`)
            }
        }
    }
}

toCheckPrime(7)