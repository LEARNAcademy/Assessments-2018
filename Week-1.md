### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  number, string, boolean, array, character, null

  //Googled Answer
  (primitive) boolean, null, undefined, number, string, symbol
  (not primitive) Object

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


Then, paste the code in your console and explain why you were right/wrong.

I got 2 undefined responses. I think this is because the function logIt() does not
take any arguments, therefore the previously defined var text = 'outside' is not
transferred into the function. Furthermore, the var text = 'inside'; comes after
the console.log(text) so it is not printed either.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON has something to do with JavaScript objects, and is sometimes used with Java applications as well.

  //Googled Answer
  JSON: JavaScript Object Notation.

  JSON is a syntax for storing and exchanging data.

  JSON is text, written with JavaScript object notation.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A closure is an additional function added within a function to make sure that a variable inside the function cannot be used outside the function

  //Googled Answer
   A closure is the combination of a function and the lexical environment within which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  '=' redefines the original variable to whatever comes after the '='. For example:
  var a = 1
  var b = 2
  a = b
  console.log(a)
  >>2
  -----------------
  '==' is a check to see if the first variable holds the same value as the second, and is a boolean operator. For example:
  1 == 2
  >>false
  1 == 1
  >>true
  -----------------
  '===' is a check to see if the first variable holds the same value AND TYPE as the second, and is also a boolean operator.
  For example:
  1 === 1
  >>true
  1 === "1"
  >>false
  //Googled Answer
