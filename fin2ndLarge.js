/*
To find second largest value, and remove first largest value in a array
*/

// const arrNum = [1,2,3,4,5,66];

// const maxNum = (arr) => {
//     return arr.reduce(function(preValue, currentValue){
//         return preValue > currentValue ? preValue:currentValue;
//     })
// }

// console.log(maxNum(arrNum))

/* 
another method to find largest and minimum value in array 
*/


/*
const largestValue = (arr) => {
    return firstLargeValue=Math.max(...arr);
}

console.log(largestValue(arrNum));
*/

/* another method to find largest and minimum value in array */
/*
const minValue = (arr) => {
    return firstMinValue=Math.min(...arr);
}

console.log(minValue(arrNum));
*/

const intArray = [1,2,3,4,5];

const largeValue = (arr) => {
    firstLargestValue=Math.max(...arr);
    return firstLargestValue;
}

console.log(largeValue(intArray))