/*
To find the sum of all elements in a given array
*/

const arrNum = [1,2,3,4,5,6,7,8,9,10];

const sumOfAll = (arr) => {
    return arr.reduce((preValue, curValue) => {
        return preValue + curValue;
    })
};

console.log(sumOfAll(arrNum));