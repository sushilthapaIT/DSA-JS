/*
Difference between ==  and ===
*/

/*
Both are comparison operator.
The main difference between the both operators is that,
"==" is used to compares values
"===" is used to compare both value and data types. 
*/

/*
"=="
Examples:
*/
var x = 7;
var y = '7';

console.log(x==y); // the result will be true it compares the value but ignore its data types.

/*
"==="
Examples:
*/
var x = 7;
var y = '7';

console.log(x==y); // the result will be false it compares the value and its data types since one is integer and another one is string it will return false.
