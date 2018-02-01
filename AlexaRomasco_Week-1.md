### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  Primitives:
  Boolean
  Null
  Undefined
  Number
  String
  Symbol

  Non-primitive:
  Object

  //Googled Answer

  SAA

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
'inside'

Then, past the code in your console and explain why you were right/wrong.
The browser's console shows 'undefined'; I thought the console.log inside of the function would use the properties of scope to look for a variable called 'text' inside the local (function) scope first and return that before it would look for and return 'outside' which is in the global scope. However, I think because the variable inside the function was defined after it was called it doesn't recognize 'inside' but it also won't go look in the global scope since there is a variable called 'text' defined within the function.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  JavaScript Object Notation; syntax for easy data transfer

  //Googled Answer

  JSON is a syntax for storing and exchanging data. JavaScript objects can be converted to JSON (which is text) and then sent between a browser and server. JSON can also be used as a data format by any programming language.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

  Closures are used to access things within a local scope, so that they can then be used elsewhere (outside of that specific local scope)

  //Googled Answer

  Closures use self-invoking functions (only run once) and returns a function expression. The variable itself then becomes a function, but it can still access variables in the parent scope of the self-invoking, anonymous function, even after it has closed.  

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

  single '=' is an assignment operator
  double '==' is a comparison operator that omits data type
  triple '===' is a comparison operator that includes data type

  //Googled Answer

  SAA
