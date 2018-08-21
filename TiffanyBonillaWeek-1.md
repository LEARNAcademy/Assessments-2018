### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  1. Number 2. Object 3. Boolean 4. Null 5. Undefined 6. String
  The primitive data types are: strings, numbers, undefined, null, boolean.                                                      

  //Googled Answer
  Boolean.
  Null.
  Undefined.
  Number.
  String.
  Symbol.
  Object.

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
I think this is going to be an error message because there are no "" inside the function call, function is supposed to be returning a string.

Then, past the code in your console and explain why you were right/wrong.
Okay, so I was wrong, console returned undefined.
I'm not sure why this is undefined.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON is JavaScript object notation and is used for storing objects as strings. You have to use "" (double quotes) with JSON.

  //Googled Answer

  JSON is commonly, but not exclusively, used to exchange information between web clients and web servers. JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A closure is a combination of where something was declared AND the environment in which it was declared.

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = means to assign
  == Is Equal to, this one converts to type and then compares if they are the same. Not recommended to use this one unless you know what you're doing.
  === Strict Equals, is a comparing whether both data type and value are the same. This one is not forgiving, no type conversion. Recommended to use this one.

  //Googled Answer
  Equal (==)	Returns true if the operands are equal.
  Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.
