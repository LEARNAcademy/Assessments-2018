### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  boolean, unidentified, number, string, object, symbol


  //Googled Answer
  boolean, null, undefined, number, string, symbol, object


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: outside

Then, past the code in your console and explain why you were right/wrong.
It's undefined because of variable hoisting!


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  //Googled Answer
  Javascript Object Notation, syntax for storing and exchanging data.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A function inside another function's scope- the outside function "closes" the inner function.

  //Googled Answer
  "A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain."


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = assigns something
  == equality comparison?
  === is an absolute equals


  //Googled Answer
  = declared, assigns, or computes
  == "loose" or abstract equality
  === "strict" equality
