/*
To find the missing number in a given integer from array
*/

const arrNum = [1,2,3,5,6,7,8,100];
const missingNum = [];

const missingValue = (arr) => {
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    for(let i = minValue; i < maxValue; i++){
        if(arr.indexOf(i) < 0){
            missingNum.push(i);
        }
    }
    return {missingNum};
};

console.log(missingValue(arrNum));