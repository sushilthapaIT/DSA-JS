/*
To find the duplicate elements in a given array
*/

const arrNum = [1,2,3,4,5,5,6]
const dubArray=arrNum.filter((element, index, arr) => {
    return arr.indexOf(element) !== index;
})

console.log(dubArray);
