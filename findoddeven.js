/*
To find the odd or even from a collection of array
*/

const arrNum = [1,2,3,4,5,6,7,8,9,10];
const evenNum = arrNum.filter((item) => {
    return item % 2 === 0;
})
console.log("Even Numbers are: ", evenNum);

const oddNum = arrNum.filter((item) => {
    return item % 2 == !0;
})
console.log("Odd Numbers are: ", oddNum);