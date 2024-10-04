/*
Difference between filter and find method
*/

/*
filter() => this method returns the matched values in an array from the collection
find()   => this method returns the first value that match from the collection once it matched the value in findings,
            it will not check the remaining values in the array collection.   
*/

//example 

const exampleArray = [
    {name: "king", age: 21},
    {name: "queen", age: 22},
    {name: "ace", age: 44},
    {name: "roha", age: 31},
    {name: "sam", age: 34},
    {name: "george", age: 23},
    {name: "cali", age: 22},
    {name: "tessa", age: 24},
    {name: "kat", age: 28},
    {name: "rhitu", age: 24},
    {name: "raha", age: 19},
];

const filterItems = exampleArray.filter((item) => {
    return item.age < 30; // this will return all the age that are less that 30 from a object array
})

const findItems = exampleArray.find((item) => {
    return item.age < 30; // this will return the first matched age that are less that 30 from a object array
})

console.log(findItems);
console.log(filterItems);