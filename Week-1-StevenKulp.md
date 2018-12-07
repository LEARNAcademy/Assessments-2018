### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

//Your Answer
Primitives: numbers, strings
Others: array, object, class

//Googled Answer
Primitives: Boolean, Null, Undefined, Number, String, Symbol
Other: Object


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
I'd assume calling the function 'logIt()' would return 'outside', since that's global, whereas the 'inside' var text is local and is not called within the function.

Then, past the code in your console and explain why you were right/wrong.
It actually returns 'undefined'. This is likely since the 'console.log()' is calling 'text' within the function BEFORE 'text' is actually defined in the function.


#### 3. What is JSON? How does it relate to javascript objects?

//Your Answer
JSON is a syntax of Javascript that helps simplify objects.

//Googled Answer
JSON data format is another data format (after XML) which can be used to transmit the structured data between a client and server in the web applications. ... JSON data format is used in the programming of Web services and APIs in order to provide public data.


#### 4. Describe a closure, what is it good for and how do you recognize one?

//Your Answer
A closure is when something is contained locally, so it can not be used elsewhere in situations it's not intended to be. It can be recognized by seeing where the variable is defined in relation to where in the code it's called, where the functions close, and where code is returned.

//Googled Answer
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.


#### 5. What's the difference between =, ==, and === in JavaScript?

//Your Answer
= is an assigner (for example, X = Y could mean to do Y every time X is referenced)
== means only the value OR type must be equal (less strict, can compare a string of a number vs a number of the same value and have it return true)
=== means both the type AND value must be equal (more strict, a string of a number vs a number of the same value would return false)

//Googled Answer
Simple assignment operator ('=') is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables. The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison. But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.
