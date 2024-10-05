/*
To reverse a string 
*/

const reverseString = (str) => {
    var strToArray = str.split("");
    var arrReverse = strToArray.reverse();
    var strReverse = arrReverse.join("");
    return console.log(`The reverse of ${str} is ${strReverse}`);
}

reverseString("neymar");