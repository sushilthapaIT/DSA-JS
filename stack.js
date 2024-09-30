/* STACK */

/*
Stacks are last in first out type of service.
Meaning: Lets take an example of a book the last book you put on top of a stack would be the first book you take off the stack.
functions:  push = for placing data onto a stack
            pop = for removing the top element of a stack
            peek = for displaying the top element of the stack
            length or size = for determining how many elements are on a stack
*/

/*
Implementation of a stack in JavaScript involves creating a data structure that follows the Last-In-First-Out (LIFO) principle,
where elements are added and removed from the same end. We use stacks to manage function calls, undo functionality, and parse algorithms
efficiently in JavaScript applications
*/ 


var letters = [];
var word = "racecar";
var reversedWord = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
    reversedWord += letters.pop();
}

if(reversedWord === word){
    console.log(word + " is a palindrome.")
}
else{
    console.log(word + " is not a palindrome.")
}


/*STACK IN JS*/