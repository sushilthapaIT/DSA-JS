/*
To find second largest value, and remove first largest value in a array
*/

const arrNum = [1,2,3,4,5,66];

const maxNum = (arr) => {
    return arr.reduce(function(preValue, currentValue){
        return preValue > currentValue ? preValue:currentValue;
    })
}

console.log(maxNum(arrNum))