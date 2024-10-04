/*
To find the max and min value in a given array
*/

const arrNumber = [1,2,3,4,5,6,7,8,9,10];

const maxFunction = (arr) => {
    return arr.reduce(function(preValue, currValue){
        return preValue > currValue ? preValue:currValue;
    })
}
console.log(maxFunction(arrNumber))

const minFunction = (arr) => {
    return arr.reduce(function(previousValue, currentValue){
        return previousValue < currentValue ? previousValue:currentValue;
    })
}
console.log(minFunction(arrNumber));