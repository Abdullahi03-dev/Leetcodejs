//EASY
//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

var createHelloWorld = function() {
    
    return function(...args) {
        return 'hello world '
    }
};
let answer=createHelloWorld(['jshsu'])
answer()
console.log(answer())